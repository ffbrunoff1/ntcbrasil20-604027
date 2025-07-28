import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.footer
      className="bg-brand-dark text-brand-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <a href="#home" onClick={scrollToTop}>
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753724479522_0.png"
                alt="NTC Brasil Logo"
                className="h-12 w-auto filter brightness-0 invert"
              />
            </a>
          </div>

          <div className="text-gray-400">
            <h4 className="font-bold text-white mb-3 text-lg">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-blue transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-blue transition-colors"
                >
                  Nossos Pilares
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-blue transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="text-gray-400">
            <h4 className="font-bold text-white mb-3 text-lg">Contato</h4>
            <p>Rua Padre Lebret, 801, G05 Bloco 03</p>
            <p>+55 44 99104-0774</p>
            <p>ffbrunoff@yahoo.com.br</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {currentYear} NTC Brasil. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            Desenvolvido com excelência para construir o seu futuro.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
