
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Michael Rodriguez',
      company: 'SunPower Solutions',
      role: 'Sales Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Hispanic%20male%20business%20executive%20in%20his%20forties%20wearing%20navy%20blue%20suit%20and%20tie%2C%20confident%20smile%2C%20modern%20office%20background%20with%20natural%20lighting%2C%20corporate%20headshot%20photography%20style%2C%20clean%20professional%20appearance%2C%20photorealistic%20quality%20with%20shallow%20depth%20of%20field&width=200&height=200&seq=testimonial-001&orientation=squarish',
      rating: 5,
      text: 'We went from closing 2-3 solar installations per month to 15+ after switching to SolarLeads AI. The quality difference is night and day. Every lead they send us is actually interested and financially qualified.'
    },
    {
      name: 'Sarah Chen',
      company: 'Bright Energy Systems',
      role: 'CEO',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20business%20executive%20in%20her%20thirties%20wearing%20elegant%20blazer%2C%20warm%20genuine%20smile%2C%20modern%20corporate%20office%20setting%20with%20soft%20natural%20window%20lighting%2C%20executive%20portrait%20photography%2C%20confident%20and%20approachable%20demeanor%2C%20photorealistic%20quality%20with%20professional%20styling&width=200&height=200&seq=testimonial-002&orientation=squarish',
      rating: 5,
      text: 'Finally, a lead generation service that actually delivers what they promise. No more wasting time on people who are just shopping around. Our conversion rate jumped from 8% to 27% in just two months.'
    },
    {
      name: 'David Thompson',
      company: 'Green Horizon Solar',
      role: 'VP of Sales',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Caucasian%20male%20business%20leader%20in%20his%20fifties%20with%20salt%20and%20pepper%20hair%2C%20wearing%20charcoal%20gray%20suit%2C%20confident%20professional%20expression%2C%20contemporary%20office%20environment%20with%20blurred%20background%2C%20executive%20headshot%20style%2C%20photorealistic%20quality%20with%20natural%20lighting&width=200&height=200&seq=testimonial-003&orientation=squarish',
      rating: 5,
      text: 'The AI qualification is incredible. We used to spend hours vetting leads ourselves. Now that work is done for us, and our sales team can focus purely on closing deals. ROI has been phenomenal.'
    },
    {
      name: 'Jennifer Martinez',
      company: 'Apex Solar Installations',
      role: 'Owner',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Hispanic%20female%20entrepreneur%20in%20her%20late%20thirties%20wearing%20professional%20business%20attire%2C%20confident%20warm%20smile%2C%20modern%20bright%20office%20space%20background%2C%20natural%20daylight%20photography%2C%20approachable%20yet%20professional%20demeanor%2C%20photorealistic%20quality%20with%20soft%20focus%20background&width=200&height=200&seq=testimonial-004&orientation=squarish',
      rating: 5,
      text: 'Best investment we\'ve made in our solar business. The leads are exclusive, qualified, and ready to move forward. We\'ve doubled our revenue in 6 months thanks to SolarLeads AI.'
    },
    {
      name: 'Robert Williams',
      company: 'Coastal Solar Group',
      role: 'Regional Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20American%20male%20business%20executive%20in%20his%20early%20forties%20wearing%20crisp%20white%20shirt%20and%20tie%2C%20genuine%20confident%20smile%2C%20contemporary%20corporate%20office%20setting%2C%20professional%20headshot%20photography%20with%20natural%20lighting%2C%20approachable%20leadership%20presence%2C%20photorealistic%20quality&width=200&height=200&seq=testimonial-005&orientation=squarish',
      rating: 5,
      text: 'We tried every lead generation company out there. SolarLeads AI is the only one that consistently delivers homeowners who actually close. The AI screening saves us countless hours.'
    },
    {
      name: 'Amanda Foster',
      company: 'Renewable Energy Partners',
      role: 'Marketing Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Caucasian%20female%20marketing%20executive%20in%20her%20thirties%20with%20blonde%20hair%2C%20wearing%20modern%20business%20casual%20attire%2C%20warm%20professional%20smile%2C%20bright%20contemporary%20office%20background%2C%20natural%20window%20lighting%2C%20confident%20and%20friendly%20demeanor%2C%20photorealistic%20quality%20with%20professional%20styling&width=200&height=200&seq=testimonial-006&orientation=squarish',
      rating: 5,
      text: 'The geographic targeting feature is a game-changer. We only get leads in our service areas, and the real-time delivery means we can reach out while they\'re still hot. Absolutely worth every penny.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider whitespace-nowrap">
            Success Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Trusted by Leading Solar Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how solar businesses across the country are crushing their sales goals with our AI-powered lead generation platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-xl text-amber-500"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover object-top"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-amber-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
