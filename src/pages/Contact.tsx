import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';
import { sendContactEmail } from '@/lib/emailService';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setError(null);
      // Send email via EmailJS
      await sendContactEmail(data);
      setSubmitted(true);
      reset();
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Contact form error:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to send message. Please try again later.'
      );
      // Hide error message after 5 seconds
      setTimeout(() => setError(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@visionary.com',
      link: 'mailto:hello@visionary.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+44 (0) 20 1234 5678',
      link: 'tel:+442012345678',
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 Business Street, London, UK',
      link: '#',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText>
              <h1 className="mb-6 text-balance">
                Get in <span className="gradient-text">Touch</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-xl text-white mb-8 text-balance">
                Ready to grow your organisation? Let's start a conversation about how our tailored consulting services can help you overcome challenges and achieve sustainable growth.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-green-600" size={20} />
                    <span className="text-green-700">
                      Thank you! We'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
                  >
                    <AlertCircle className="text-red-600" size={20} />
                    <span className="text-red-700">{error}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name')}
                        className="input"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="input"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...register('company')}
                        className="input"
                        placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        className="input"
                        placeholder="+44 20 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register('subject')}
                      className="input"
                      placeholder="How can we help?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={6}
                      className="input resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-white mb-8">
                    We'd love to hear from you. Reach out through any of these
                    channels, and we'll respond as soon as possible.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.title}
                        href={info.link}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-xl border border-navy-700 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                          <Icon className="text-primary-400 group-hover:text-navy-900 transition-colors" size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-white">{info.content}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-primary-500/20 to-primary-500/10 rounded-xl border border-primary-500/30">
                  <h3 className="font-bold mb-2">Business Hours</h3>
                  <p className="text-white mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-white">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

