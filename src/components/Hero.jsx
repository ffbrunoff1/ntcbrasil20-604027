import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = e => {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-brand-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-black text-brand-dark leading-tight mb-6"
              variants={itemVariants}
            >
              Transformando sua visão em{' '}
              <span className="gradient-text animate-gradient-text">
                realidade
              </span>{' '}
              com excelência na construção.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-brand-gray mb-10"
              variants={itemVariants}
            >
              Qualidade, confiança e construção sólida para você. A inovação na
              construção começa com a NTC Brasil.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="btn btn-primary group"
              >
                Construa o futuro conosco
                <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-brand-blue rounded-full -translate-x-4 -translate-y-4"></div>
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-hero-image.jpg"
                alt="Engenheiro analisando planta de construção moderna"
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-8 border-white"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="font-bold text-brand-dark">Projetos Inovadores</p>
                <p className="text-sm text-brand-gray">Tecnologia e design</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
