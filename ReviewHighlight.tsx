
export default function ReviewHighlight() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Average Rating */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">4.9</div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-xl text-amber-500"></i>
                ))}
              </div>
              <div className="text-sm text-gray-600">Based on 500+ reviews</div>
            </div>
            <div className="h-16 w-px bg-gray-200 hidden sm:block"></div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>

          {/* Featured Reviews */}
          <div className="grid sm:grid-cols-2 gap-6 flex-1 max-w-3xl">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-lg text-amber-500"></i>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                "Tripled our conversion rate in just 60 days. The AI qualification is spot-on every single time."
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20Hispanic%20male%20business%20executive%20in%20his%20forties%20wearing%20navy%20blue%20suit%20and%20tie%2C%20confident%20smile%2C%20modern%20office%20background%20with%20natural%20lighting%2C%20corporate%20headshot%20photography%20style%2C%20clean%20professional%20appearance%2C%20photorealistic%20quality%20with%20shallow%20depth%20of%20field&width=80&height=80&seq=review-mini-001&orientation=squarish"
                  alt="Michael Rodriguez"
                  className="w-10 h-10 rounded-full object-cover object-top"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Michael Rodriguez</div>
                  <div className="text-xs text-gray-600">SunPower Solutions</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-lg text-amber-500"></i>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                "Finally found a lead service that delivers what they promise. ROI has been phenomenal."
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20business%20executive%20in%20her%20thirties%20wearing%20elegant%20blazer%2C%20warm%20genuine%20smile%2C%20modern%20corporate%20office%20setting%20with%20soft%20natural%20window%20lighting%2C%20executive%20portrait%20photography%2C%20confident%20and%20approachable%20demeanor%2C%20photorealistic%20quality%20with%20professional%20styling&width=80&height=80&seq=review-mini-002&orientation=squarish"
                  alt="Sarah Chen"
                  className="w-10 h-10 rounded-full object-cover object-top"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Sarah Chen</div>
                  <div className="text-xs text-gray-600">Bright Energy Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
