import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function TermsOfService() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Terms of Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Terms of <span className="text-primary-400">Service</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              Please read these terms carefully before using our services. They outline your rights and responsibilities when engaging with Visionary.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-24 -mt-20">
        <div className="container-custom max-w-4xl relative z-20">
          <AnimatedSection>
            <div className="bg-navy-900/50 backdrop-blur-md border border-primary-400/20 rounded-2xl p-8 md:p-12 shadow-[0_0_30px_rgba(255,201,205,0.05)]">
              <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-primary-400 prose-a:no-underline hover:prose-a:text-white prose-li:text-slate-300">
                <p className="lead text-xl font-light mb-12 border-b border-primary-400/20 pb-8">
                  By accessing and using the Visionary Management Consultants website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-400/10 text-primary-400 text-sm">1</span>
                  Acceptance of Terms
                </h3>
                <p className="mb-8">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                </p>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-400/10 text-primary-400 text-sm">2</span>
                  Intellectual Property
                </h3>
                <p className="mb-8">
                  The Site and its original content, features, and functionality are owned by Visionary Management Consultants and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-400/10 text-primary-400 text-sm">3</span>
                  Use License
                </h3>
                <p className="mb-8">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Visionary Management Consultants' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-400/10 text-primary-400 text-sm">4</span>
                  Disclaimer
                </h3>
                <p className="mb-8">
                  The materials on Visionary Management Consultants' website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-400/10 text-primary-400 text-sm">5</span>
                  Limitations
                </h3>
                <p className="mb-8">
                  In no event shall Visionary Management Consultants or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
                </p>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-400/10 text-primary-400 text-sm">6</span>
                  Governing Law
                </h3>
                <p className="mb-8">
                  These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
                
                <p className="text-xs text-slate-500 mt-12 text-center">
                  Last updated: December 2025
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
