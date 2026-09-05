import { motion } from "motion/react";
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
    <footer className="bg-white pt-16 md:pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 border-b border-gray-100 pb-12 md:pb-16">
          <div className="sm:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tight text-crono-dark flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-8 h-8 rounded-lg bg-crono-dark text-crono-light flex items-center justify-center font-bold">C</div>
              Crono
            </Link>
            <p className="text-gray-500 font-light max-w-xs leading-relaxed">
              Sites profissionais no tempo certo. Elevamos o padrão da sua presença digital.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-crono-dark uppercase mb-4 md:mb-6">Contato</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-crono-accent transition-colors">
                  <Phone className="w-4 h-4" /> {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-gray-500 hover:text-crono-accent transition-colors">
                  <Mail className="w-4 h-4" /> {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`https://instagram.com/${siteConfig.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-crono-accent transition-colors">
                  <Instagram className="w-4 h-4" /> {siteConfig.contact.instagram}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-crono-dark uppercase mb-4 md:mb-6">Navegação</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><button onClick={() => scrollTo('services')} className="text-gray-500 hover:text-crono-dark transition-colors">Serviços</button></li>
              <li><button onClick={() => scrollTo('portfolio')} className="text-gray-500 hover:text-crono-dark transition-colors">Projetos</button></li>
              <li><button onClick={() => scrollTo('pricing')} className="text-gray-500 hover:text-crono-dark transition-colors">Planos</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Crono. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/privacidade" className="hover:text-crono-dark transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-crono-dark transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
