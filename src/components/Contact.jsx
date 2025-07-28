import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Phone,
  MapPin,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark">
            Vamos Construir Juntos
          </h2>
          <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
            Tem uma ideia ou um projeto em mente? Entre em contato conosco.
            Estamos prontos para transformar sua visão em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-brand-gray mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-2 border-transparent focus:border-brand-blue focus:bg-white focus:outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-brand-gray mb-2"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-2 border-transparent focus:border-brand-blue focus:bg-white focus:outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-brand-gray mb-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-2 border-transparent focus:border-brand-blue focus:bg-white focus:outline-none transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin mr-2" />
                  ) : (
                    <Send className="mr-2" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center p-4 text-sm text-green-700 bg-green-100 rounded-lg"
                  >
                    <CheckCircle className="mr-2" /> Mensagem enviada com
                    sucesso! Entraremos em contato em breve.
                  </motion.div>
                )}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center p-4 text-sm text-red-700 bg-red-100 rounded-lg"
                  >
                    <AlertTriangle className="mr-2" /> Erro: {submitError}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-brand-dark">Telefone</h4>
                <p className="text-brand-gray mt-1">
                  Precisa de uma resposta rápida? Ligue para nós.
                </p>
                <a
                  href="tel:+5544991040774"
                  className="text-brand-blue font-semibold text-lg mt-2 inline-block hover:underline"
                >
                  +55 44 99104-0774
                </a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-brand-dark">
                  Nosso Endereço
                </h4>
                <p className="text-brand-gray mt-1">
                  Venha nos visitar e discutir seu projeto pessoalmente.
                </p>
                <p className="text-brand-dark font-semibold text-lg mt-2">
                  Rua Padre Lebret, 801, G05 Bloco 03
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
