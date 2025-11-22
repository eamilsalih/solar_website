
export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://static.readdy.ai/image/86326c846528229120801a4c6e78a90f/28699988130c2d4cfc8ee37c0f922185.png"
              alt="Solar Success"
              className="rounded-2xl shadow-2xl object-cover object-top"
            />
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider whitespace-nowrap">
                Real Results
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Transform Your Solar Sales Pipeline
              </h2>
              <p className="text-xl text-gray-600">
                Stop wasting time and money on leads that go nowhere. Our AI-powered qualification ensures every lead has genuine interest and financial capability.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-2xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Higher Conversion Rates
                  </h3>
                  <p className="text-gray-600">
                    Our clients see 3x higher conversion rates compared to traditional lead sources because every prospect is pre-qualified and ready to buy solar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-money-dollar-circle-line text-2xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Lower Cost Per Acquisition
                  </h3>
                  <p className="text-gray-600">
                    Reduce your customer acquisition costs by up to 50% by eliminating wasted effort on unqualified prospects and focusing on ready-to-buy homeowners.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-2xl text-purple-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Faster Sales Cycles
                  </h3>
                  <p className="text-gray-600">
                    Close deals faster with leads who have already been educated about solar benefits and are actively seeking installation quotes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-team-line text-2xl text-orange-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Happier Sales Teams
                  </h3>
                  <p className="text-gray-600">
                    Your sales reps will love working with qualified leads instead of cold calling or chasing tire-kickers who waste their valuable time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
