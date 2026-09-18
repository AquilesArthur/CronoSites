import { Instagram, Mail, Phone } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getWhatsAppLink, siteConfig } from "@/src/config/site";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-crono-bg text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l-grid border-r-grid border-b-grid">
          
          <div className="p-10 border-b-grid md:border-b-0 md:border-r-grid col-span-1 md:col-span-2">
            <Link to="/" className="text-4xl font-bold tracking-tighter text-white uppercase mb-6 block font-display">
              CRONO.
            </Link>
            <p className="text-gray-400 font-medium max-w-sm text-lg">
              Estética funcional. Código robusto.
            </p>
          </div>
          
          <div className="p-10 flex flex-col justify-between col-span-1">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6 font-heading">Contato</h4>
              <ul className="space-y-4">
                <li>
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-crono-accent font-medium transition-colors">
                    <Phone className="w-4 h-4" /> {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-white hover:text-crono-accent font-medium transition-colors">
                    <Mail className="w-4 h-4" /> {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a href={`https://instagram.com/${siteConfig.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-crono-accent font-medium transition-colors">
                    <Instagram className="w-4 h-4" /> {siteConfig.contact.instagram}
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
        
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-l-grid border-r-grid border-b-grid px-10">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} CRONO. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
