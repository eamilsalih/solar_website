import { useEffect } from 'react';

export default function CTA() {
  useEffect(() => {
    // Initialize Calendly widget
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/laurentbusiness305/30min?hide_gdpr_banner=1&primary_color=ffa500',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://readdy.ai/api/search-image?query=Abstract%20geometric%20pattern%20with%20solar%20panel%20grid%20texture%2C%20modern%20technology%20background%20with%20circuit%20board%20elements%20and%20energy%20flow%20lines%2C%20dark%20background%20with%20subtle%20blue%20and%20orange%20accent%20lighting%2C%20futuristic%20digital%20network%20visualization%2C%20high-tech%20atmosphere%20with%20clean%20minimalist%20design&width=1920&height=1080&seq=cta-bg-004&orientation=landscape"
          alt="Background"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider whitespace-nowrap">
              Get Started Today
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Ready to Stop Wasting Money on Bad Leads?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of solar companies already crushing their sales goals with our AI-powered lead generation platform. Get your first qualified leads within 48 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-2xl text-orange-500"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                  <p className="text-gray-300">Every lead is verified and qualified or we replace it free.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-2xl text-orange-500"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">No Long-Term Contracts</h3>
                  <p className="text-gray-300">Cancel anytime. We earn your business every month.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-customer-service-line text-2xl text-orange-500"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                  <p className="text-gray-300">Get help from real humans who understand solar sales.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule Your Free Consultation
            </h3>

            <div className="calendly-inline-widget" style={{minWidth: '320px', height: '700px'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
