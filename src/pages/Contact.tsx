import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
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
      await sendContactEmail(data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Contact form error:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to send message. Please try again later.'
      );
      setTimeout(() => setError(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@visionaryconsultancy.uk',
      link: 'mailto:info@visionaryconsultancy.uk'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+44 (0) 20 8150 1689',
      link: 'tel:+442081501689'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Unit 9, 4 Creek Road, Barking, England, IG11 0JH',
      link: 'https://maps.google.com/?q=Unit+9,+4+Creek+Road,+Barking,+England,+IG11+0JH',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section - Simple Text */}
      <section className="pt-32 pb-16 text-center container-custom">
        <AnimatedText>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h1>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to transform your business? Our team is ready to help you navigate your toughest challenges.
          </p>
        </AnimatedText>
      </section>

      {/* Split Form Section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="bg-navy-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl grid lg:grid-cols-5">
            
            {/* Left Side: Info */}
            <div className="lg:col-span-2 bg-gradient-to-b from-primary-400/20 to-navy-950 p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                <div className="space-y-8">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary-400/20 flex items-center justify-center flex-shrink-0 text-primary-400">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm font-medium mb-1">{info.title}</p>
                          {info.link ? (
                            <a href={info.link} className="text-white font-semibold hover:text-primary-400 transition-colors">
                              {info.content}
                            </a>
                          ) : (
                             <p className="text-white font-semibold">{info.content}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative z-10 mt-12">
                 <div className="p-6 bg-navy-950/50 rounded-xl border border-white/5 backdrop-blur-sm">
                   <h4 className="text-white font-bold mb-2">Business Hours</h4>
                   <p className="text-slate-400 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                 </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-3 p-10 lg:p-12 bg-navy-900">
               <div className="mb-8">
                 <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
                 <p className="text-slate-400">Fill out the form below and we'll get back to you within 24 hours.</p>
               </div>

               {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/20 p-8 rounded-2xl text-center py-16"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-300">Thank you for reaching out. We'll be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Name</label>
                        <input
                          {...register('name')}
                          className="w-full bg-navy-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Email</label>
                        <input
                          {...register('email')}
                          className="w-full bg-navy-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all"
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Company (Optional)</label>
                        <input
                          {...register('company')}
                          className="w-full bg-navy-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all"
                          placeholder="Company Ltd"
                        />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-300">Phone (Optional)</label>
                         <input
                          {...register('phone')}
                          className="w-full bg-navy-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all"
                          placeholder="+44..."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Subject</label>
                      <input
                        {...register('subject')}
                        className="w-full bg-navy-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all"
                        placeholder="How can we help?"
                      />
                      {errors.subject && <p className="text-red-400 text-xs">{errors.subject.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Message</label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        className="w-full bg-navy-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 text-red-400 bg-red-500/10 p-3 rounded-lg">
                        <AlertCircle size={16} />
                        <span className="text-sm">{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-400 text-navy-950 font-bold rounded-lg py-4 hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>Send Message <Send size={18} /></>
                      )}
                    </button>
                  </form>
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
