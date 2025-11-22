
export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Define Your Ideal Customer',
      description: 'Tell us your target criteria: location, property type, income level, roof condition, and any other qualifications that matter to your solar business.',
      icon: 'ri-settings-3-line'
    },
    {
      number: '02',
      title: 'AI Finds & Qualifies Leads',
      description: 'Our AI scans millions of data points, identifies homeowners matching your criteria, and verifies their readiness to invest in solar energy solutions.',
      icon: 'ri-search-eye-line'
    },
    {
      number: '03',
      title: 'Receive Hot Leads Instantly',
      description: 'Qualified leads are delivered to your dashboard or CRM in real-time with complete contact information and detailed qualification scores.',
      icon: 'ri-notification-3-line'
    },
    {
      number: '04',
      title: 'Close More Solar Deals',
      description: 'Focus your energy on selling to pre-qualified prospects who are ready to buy, dramatically increasing your conversion rates and revenue.',
      icon: 'ri-trophy-line'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider whitespace-nowrap">
            Simple Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From setup to closing deals, our streamlined process makes it easy to get high-quality solar leads flowing to your sales team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all h-full">
                <div className="text-6xl font-bold text-amber-100 mb-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${step.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <i className="ri-arrow-right-line text-3xl text-amber-400"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
