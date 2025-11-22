
export default function Features() {
  const features = [
    {
      icon: 'ri-brain-line',
      title: 'AI-Powered Qualification',
      description: 'Our advanced AI analyzes homeowner data, property details, and buying signals to identify prospects who are genuinely ready to invest in solar energy systems.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Pre-Verified Homeowners',
      description: 'Every lead is verified for property ownership, credit worthiness, and solar viability before reaching your sales team—eliminating wasted time on unqualified prospects.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Pay Per Qualified Lead',
      description: 'Only pay for leads that meet your specific criteria. No more burning budget on tire-kickers, renters, or people just browsing for information.'
    },
    {
      icon: 'ri-time-line',
      title: 'Real-Time Delivery',
      description: 'Leads are delivered instantly to your CRM or dashboard the moment they qualify, giving you first-mover advantage to close deals faster than competitors.'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Geographic Targeting',
      description: 'Focus on specific territories, zip codes, or service areas where your solar installation business operates for maximum efficiency and profitability.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Performance Analytics',
      description: 'Track conversion rates, ROI, and lead quality metrics in real-time with detailed analytics dashboards that help optimize your solar sales strategy.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider whitespace-nowrap">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            The Smartest Way to Grow Your Solar Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop chasing dead-end leads. Our AI-powered platform delivers only the most qualified solar prospects who are ready to make a decision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
