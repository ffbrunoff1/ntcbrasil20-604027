import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={imageVariants}>
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-about-us.jpg"
              alt="Equipe de construção colaborando em um projeto"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div variants={textVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-black text-brand-dark mb-6"
              variants={itemVariants}
            >
              Construindo Mais Que Edifícios,{' '}
              <span className="gradient-text">Construindo Confiança</span>
            </motion.h2>
            <motion.p
              className="text-lg text-brand-gray mb-8"
              variants={itemVariants}
            >
              Na NTC Brasil, cada projeto é um compromisso com a excelência.
              Combinamos inovação, materiais de alta qualidade e uma equipe
              dedicada para entregar resultados que superam as expectativas.
              Nossa missão é transformar sua visão em uma estrutura sólida e
              duradoura.
            </motion.p>
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg">
                  <Building size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-brand-dark">
                    Excelência em Execução
                  </h4>
                  <p className="text-brand-gray mt-1">
                    Processos rigorosos para garantir a mais alta qualidade em
                    cada etapa da obra.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg">
                  <Target size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-brand-dark">
                    Foco no Cliente
                  </h4>
                  <p className="text-brand-gray mt-1">
                    Entendemos suas necessidades para entregar projetos que são
                    verdadeiramente seus.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg">
                  <ShieldCheck size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-brand-dark">
                    Segurança e Confiança
                  </h4>
                  <p className="text-brand-gray mt-1">
                    Compromisso total com a segurança e o cumprimento de prazos.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
