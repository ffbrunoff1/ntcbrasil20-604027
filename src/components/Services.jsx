import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Gem, Shield, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Inovação Constante',
      description:
        'Utilizamos as mais recentes tecnologias e métodos construtivos para otimizar processos e garantir resultados superiores.',
    },
    {
      icon: Gem,
      title: 'Qualidade Superior',
      description:
        'Nosso compromisso é com a excelência, desde a escolha dos materiais até o acabamento final de cada projeto.',
    },
    {
      icon: Shield,
      title: 'Compromisso e Segurança',
      description:
        'Priorizamos a segurança em nossos canteiros de obras e cumprimos rigorosamente os prazos acordados.',
    },
    {
      icon: BarChart,
      title: 'Gestão Eficiente',
      description:
        'Gerenciamento de projetos transparente e eficaz, assegurando controle de custos e cronograma para o cliente.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark">
            Nossos Pilares Fundamentais
          </h2>
          <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
            A base do nosso sucesso e da satisfação de nossos clientes está
            nestes quatro pilares essenciais que guiam cada projeto.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col border border-gray-100"
              variants={cardVariants}
            >
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-brand-blue text-white flex items-center justify-center mb-6 shadow-blue-glow">
                <service.icon size={32} />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="font-bold text-brand-blue hover:underline"
                >
                  Saiba Mais
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
