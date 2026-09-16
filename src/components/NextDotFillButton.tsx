import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonProps {
  label?: string;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
}

export function NextDotFillButton({ label = "Next", href, target, rel, className = "", onClick }: ButtonProps) {
  const classNames = `next-dot-fill-button ${className}`;
  
  const content = (
    <>
      <span className="next-dot-fill-button__fill" aria-hidden="true" />
      <span className="next-dot-fill-button__label">{label}</span>
      <span className="next-dot-fill-button__reveal" aria-hidden="true">
        {label}
        <ArrowRight size={19} strokeWidth={2.4} />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classNames} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} onClick={onClick}>
      {content}
    </button>
  );
}
