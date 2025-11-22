import { useEffect, useState } from 'react';

export default function Pricing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      url: 'https://readdy.ai/api/search-image?query=Modern%20mobile%20app%20interface%20showing%20solar%20panel%20monitoring%20dashboard%20with%20clean%20white%20background%2C%20smartphone%20screen%20displaying%20real-time%20energy%20production%20graphs%20and%20statistics%2C%20professional%20UI%20design%20with%20orange%20and%20amber%20accent%20colors%2C%20minimalist%20layout%20with%20clear%20typography%2C%20contemporary%20app%20design%20showcasing%20renewable%20energy%20data%20visualization%2C%20high-quality%20mobile%20interface%20with%20intuitive%20navigation%2C%20realistic%20phone%20mockup%20with%20solar%20analytics%2C%20bright%20and%20professional%20aesthetic&width=400&height=800&seq=phone-gallery-001&orientation=portrait',
      alt: 'Solar monitoring app interface'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Smartphone%20screen%20displaying%20lead%20management%20application%20with%20qualified%20solar%20leads%20list%2C%20clean%20mobile%20interface%20with%20white%20background%20and%20orange%20highlights%2C%20professional%20CRM%20app%20showing%20customer%20information%20cards%2C%20modern%20UI%20design%20with%20clear%20data%20presentation%2C%20mobile%20dashboard%20for%20solar%20installers%20with%20lead%20scoring%20indicators%2C%20contemporary%20app%20interface%20with%20organized%20layout%2C%20realistic%20phone%20display%20with%20business%20analytics&width=400&height=800&seq=phone-gallery-002&orientation=portrait',
      alt: 'Lead management dashboard'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Mobile%20application%20showing%20AI-powered%20qualification%20system%20interface%2C%20smartphone%20screen%20with%20white%20background%20displaying%20customer%20qualification%20criteria%2C%20professional%20app%20design%20with%20orange%20and%20amber%20color%20scheme%2C%20modern%20mobile%20UI%20showing%20automated%20lead%20filtering%20process%2C%20clean%20interface%20with%20checkmarks%20and%20status%20indicators%2C%20contemporary%20business%20app%20for%20solar%20industry%2C%20realistic%20phone%20mockup%20with%20AI%20technology%20visualization&width=400&height=800&seq=phone-gallery-003&orientation=portrait',
      alt: 'AI qualification system'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Phone%20screen%20displaying%20real-time%20notifications%20and%20alerts%20for%20new%20solar%20leads%2C%20mobile%20app%20interface%20with%20white%20background%20and%20orange%20notification%20badges%2C%20professional%20messaging%20system%20showing%20lead%20updates%2C%20modern%20UI%20design%20with%20clean%20typography%20and%20icons%2C%20smartphone%20display%20with%20instant%20alert%20system%2C%20contemporary%20app%20interface%20for%20solar%20business%20communication%2C%20realistic%20mobile%20mockup%20with%20notification%20center&width=400&height=800&seq=phone-gallery-004&orientation=portrait',
      alt: 'Real-time lead notifications'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Mobile%20analytics%20dashboard%20showing%20solar%20lead%20conversion%20rates%20and%20performance%20metrics%2C%20smartphone%20screen%20with%20white%20background%20displaying%20colorful%20charts%20and%20graphs%2C%20professional%20business%20intelligence%20app%20with%20orange%20accent%20colors%2C%20modern%20data%20visualization%20interface%20with%20clear%20statistics%2C%20contemporary%20mobile%20app%20for%20solar%20installers%20showing%20ROI%20metrics%2C%20clean%20UI%20design%20with%20interactive%20elements%2C%20realistic%20phone%20display%20with%20business%20analytics&width=400&height=800&seq=phone-gallery-005&orientation=portrait',
      alt: 'Performance analytics dashboard'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const plans = [
    {
      name: 'Starter',
      price: '299',
      period: 'per month',
      description: 'Perfect for small solar installers getting started',
      features: [
        '25 qualified leads per month',
        'Basic AI qualification',
        'Email delivery',
        'Geographic targeting',
        'Lead quality guarantee',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '699',
      period: 'per month',
      description: 'Ideal for growing solar businesses',
      features: [
        '75 qualified leads per month',
        'Advanced AI qualification',
        'Real-time CRM integration',
        'Priority lead delivery',
        'Custom qualification criteria',
        'Dedicated account manager',
        'Performance analytics dashboard',
        'Phone & email support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large solar companies with high volume needs',
      features: [
        'Unlimited qualified leads',
        'White-glove AI customization',
        'Multi-location support',
        'API access',
        'Custom integrations',
        'Dedicated success team',
        'Advanced analytics & reporting',
        '24/7 priority support'
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Gallery Section */}
        <div className="mb-24 overflow-hidden">
          <div className="relative h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-5xl">
              <div className="flex items-center justify-center gap-8">
                {galleryImages.map((image, index) => {
                  const position = (index - currentSlide + galleryImages.length) % galleryImages.length;
                  const isCenter = position === 0;
                  const isAdjacent = position === 1 || position === galleryImages.length - 1;
                  const isFarLeft = position === galleryImages.length - 2;
                  const isFarRight = position === 2;
                  
                  let translateX = 0;
                  let scale = 0.6;
                  let opacity = 0;
                  let zIndex = 0;

                  if (isCenter) {
                    translateX = 0;
                    scale = 1;
                    opacity = 1;
                    zIndex = 50;
                  } else if (position === 1) {
                    translateX = 280;
                    scale = 0.75;
                    opacity = 0.6;
                    zIndex = 40;
                  } else if (position === galleryImages.length - 1) {
                    translateX = -280;
                    scale = 0.75;
                    opacity = 0.6;
                    zIndex = 40;
                  } else if (isFarRight) {
                    translateX = 480;
                    scale = 0.6;
                    opacity = 0.3;
                    zIndex = 30;
                  } else if (isFarLeft) {
                    translateX = -480;
                    scale = 0.6;
                    opacity = 0.3;
                    zIndex = 30;
                  }

                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-700 ease-in-out"
                      style={{
                        transform: `translateX(${translateX}px) scale(${scale})`,
                        opacity,
                        zIndex
                      }}
                    >
                      <div className="w-[280px] h-[560px] rounded-[40px] overflow-hidden shadow-2xl bg-white">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider whitespace-nowrap">
            Pricing Plans
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Only pay for qualified leads that meet your exact criteria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-2xl transition-all ${
                plan.popular ? 'border-amber-500 shadow-xl' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price === 'Custom' ? '' : '$'}{plan.price}
                  </span>
                </div>
                <div className="text-gray-600">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="ri-check-line text-xl text-green-600 flex-shrink-0 mt-0.5"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`w-full py-4 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  plan.popular
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg'
                    : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include our lead quality guarantee. If a lead doesn't meet your criteria, we'll replace it for free.
          </p>
          <p className="text-sm text-gray-500">
            No long-term contracts required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
