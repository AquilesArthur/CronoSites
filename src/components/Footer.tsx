import { motion } from "motion/react";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 md:pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 border-b border-gray-100 pb-12 md:pb-16">
          <div className="sm:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tight text-crono-dark flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-8 h-8 rounded-lg bg-crono-dark text-crono-light flex items-center justify-center font-bold">C</div>
              Crono
            </a>
            <p className="text-gray-500 font-light max-w-xs leading-relaxed">
              Sites profissionais no tempo certo. Elevamos o padrão da sua presença digital.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-crono-dark uppercase mb-4 md:mb-6">Contato</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-crono-accent transition-colors">
                  <Phone className="w-4 h-4" /> (00) 00000-0000
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-crono-accent transition-colors">
                  <Mail className="w-4 h-4" /> ola@crono.com.br
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-crono-accent transition-colors">
                  <Instagram className="w-4 h-4" /> @agenciacrono
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-crono-dark uppercase mb-4 md:mb-6">Navegação</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#services" className="text-gray-500 hover:text-crono-dark transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="text-gray-500 hover:text-crono-dark transition-colors">Projetos</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-crono-dark transition-colors">Planos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Crono. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-crono-dark transition-colors">Privacidade</a>
            <a href="#" className="hover:text-crono-dark transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
