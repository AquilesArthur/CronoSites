import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  shape: 'circle' | 'square' | 'triangle' | 'hexagon';
  angle: number;
  vAngle: number;
  mass: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const shapes: ('circle' | 'square' | 'triangle' | 'hexagon')[] = ['circle', 'square', 'triangle', 'hexagon'];

    const initParticles = () => {
      particles = [];
      // Calculate a generous base amount based on screen width, with randomness
      const baseNum = Math.floor(window.innerWidth / 15);
      const randomOffset = Math.floor(Math.random() * 20) - 10;
      const targetNum = Math.max(30, Math.min(baseNum + randomOffset, 80));
      
      // Shuffle shapes array once per init to start with a random distribution
      const shuffledShapes = [...shapes].sort(() => Math.random() - 0.5);
      
      for (let i = 0; i < targetNum; i++) {
        const radius = Math.random() * 10 + 6; // Random sizes between 12px and 32px diameter
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (Math.random() * 2.5 + 0.5), // More dynamic speeds
          vy: (Math.random() - 0.5) * (Math.random() * 2.5 + 0.5),
          radius: radius,
          mass: radius, 
          // Cycle through the shuffled shapes to ensure perfectly balanced quantities
          shape: shuffledShapes[i % shuffledShapes.length], 
          angle: Math.random() * Math.PI * 2,
          vAngle: (Math.random() - 0.5) * 0.04
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(); // Re-initialize with new random positions on resize
    };

    window.addEventListener('resize', resize);
    resize(); // Initial setup

    const drawShape = (p: Particle) => {
      ctx.beginPath();
      // Match the visual radius EXACTLY with the physical collision radius (p.radius)
      const r = p.radius;

      if (p.shape === 'circle') {
        ctx.arc(0, 0, r, 0, Math.PI * 2);
      } else if (p.shape === 'square') {
        // Expand square width slightly so its edges (not just corners) push closer to the collision boundary
        const w = r * 0.95; 
        if (ctx.roundRect) {
          ctx.roundRect(-w, -w, w * 2, w * 2, w * 0.25); // Slightly rounded corners, sharp edges
        } else {
          ctx.rect(-w, -w, w * 2, w * 2);
        }
      } else if (p.shape === 'triangle') {
        // Expand triangle visually so its flat edges sit perfectly on the collision boundary
        const tr = r * 1.15; 
        const bottomY = r * 0.75;
        const rightX = r * 1.05;
        ctx.moveTo(0, -tr);
        ctx.lineTo(rightX, bottomY);
        ctx.lineTo(-rightX, bottomY);
      } else if (p.shape === 'hexagon') {
        const hr = r * 1.05;
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const hx = Math.cos(angle) * hr;
          const hy = Math.sin(angle) * hr;
          if (i === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
      }
      ctx.closePath();
      
      // Fill the shape with clean, flat translucency (No strokes to prevent overlapping artifacts)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fill();
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions and handle collisions
      for (let i = 0; i < particles.length; i++) {
        let p1 = particles[i];

        // Wall collisions (bounce)
        if (p1.x - p1.radius < 0) { p1.x = p1.radius; p1.vx *= -1; }
        if (p1.x + p1.radius > canvas.width) { p1.x = canvas.width - p1.radius; p1.vx *= -1; }
        if (p1.y - p1.radius < 0) { p1.y = p1.radius; p1.vy *= -1; }
        if (p1.y + p1.radius > canvas.height) { p1.y = canvas.height - p1.radius; p1.vy *= -1; }

        // Particle vs Particle collisions (Spring-based elastic resolution)
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p2.x - p1.x;
          let dy = p2.y - p1.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          let minDist = p1.radius + p2.radius; // Exact hitbox distance

          if (dist < minDist && dist !== 0) {
            // Push them apart gently
            let angle = Math.atan2(dy, dx);
            let tx = p1.x + Math.cos(angle) * minDist;
            let ty = p1.y + Math.sin(angle) * minDist;
            let ax = (tx - p2.x) * 0.02; // Spring force
            let ay = (ty - p2.y) * 0.02;
            
            p1.vx -= ax;
            p1.vy -= ay;
            p2.vx += ax;
            p2.vy += ay;
          }
        }

        // Apply velocity
        p1.x += p1.vx;
        p1.y += p1.vy;
        p1.angle += p1.vAngle;

        // Velocity damping (air resistance)
        p1.vx *= 0.99;
        p1.vy *= 0.99;

        // Maintain minimum speed so they don't stop entirely
        const speed = Math.sqrt(p1.vx * p1.vx + p1.vy * p1.vy);
        if (speed < 0.3) {
            p1.vx *= 1.05;
            p1.vy *= 1.05;
        }

        // Draw particle
        ctx.save();
        ctx.translate(p1.x, p1.y);
        ctx.rotate(p1.angle);
        drawShape(p1);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
