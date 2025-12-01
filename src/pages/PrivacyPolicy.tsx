import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function PrivacyPolicy() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Privacy & Security" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Privacy <span className="text-primary-400">Policy</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              At Visionary Management Consultants, we are committed to protecting your privacy and ensuring the security of your data.
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
                  This policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our services.
                </p>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-400/10 text-primary-400 text-sm">1</span>
                  Information We Collect
                </h3>
                <p>
                  We may collect and process the following data about you:
                </p>
                <ul className="space-y-2 mb-8">
                  <li>Information you provide by filling in forms on our site (e.g., contact forms, newsletter signups).</li>
                  <li>Correspondence records if you contact us.</li>
                  <li>Details of your visits to our site and the resources you access.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-400/10 text-primary-400 text-sm">2</span>
                  How We Use Your Information
                </h3>
                <p>
                  We use information held about you in the following ways:
                </p>
                <ul className="space-y-2 mb-8">
                  <li>To ensure content from our site is presented in the most effective manner for you.</li>
                  <li>To provide you with information, products, or services that you request from us.</li>
                  <li>To notify you about changes to our service.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-400/10 text-primary-400 text-sm">3</span>
                  Disclosure of Your Information
                </h3>
                <p className="mb-8">
                  We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and advertisers.
                </p>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-400/10 text-primary-400 text-sm">4</span>
                  Your Rights
                </h3>
                <p className="mb-8">
                  You have the right to ask us not to process your personal data for marketing purposes. You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data.
                </p>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-400/10 text-primary-400 text-sm">5</span>
                  Changes to Our Policy
                </h3>
                <p className="mb-8">
                  Any changes we may make to our privacy policy in the future will be posted on this page. Please check back frequently to see any updates or changes.
                </p>

                <div className="bg-navy-950 rounded-xl p-6 border border-primary-400/20 mt-12">
                  <h4 className="text-lg font-bold text-primary-400 mb-2">Contact Us</h4>
                  <p className="text-sm mb-0">
                    Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to <a href="mailto:info@visionaryconsultancy.uk">info@visionaryconsultancy.uk</a>.
                  </p>
                </div>
                
                <p className="text-xs text-slate-500 mt-8 text-center">
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
