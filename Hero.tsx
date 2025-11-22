export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-white pt-16">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top opacity-20"
          poster="https://readdy.ai/api/search-image?query=Modern%20solar%20panel%20installation%20on%20residential%20rooftop%20with%20bright%20blue%20sky%2C%20professional%20solar%20energy%20system%20with%20clean%20panels%20arranged%20in%20perfect%20rows%2C%20suburban%20neighborhood%20setting%20with%20green%20trees%20and%20well-maintained%20homes%2C%20warm%20sunlight%20creating%20natural%20highlights%20on%20photovoltaic%20cells%2C%20contemporary%20sustainable%20energy%20solution%20with%20high-quality%20craftsmanship%2C%20realistic%20photography%20style%20showing%20detailed%20solar%20technology%2C%20peaceful%20residential%20environment%20demonstrating%20clean%20energy%20adoption%2C%20professional%20installation%20showcasing%20renewable%20power%20generation&width=1920&height=1080&seq=hero-bg-solar-001&orientation=landscape"
          aria-label="Solar panel installation background video"
        >
          <source src="https://cdn.pixabay.com/video/2022/05/31/119026-716339767_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                AI-Powered Lead Generation
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Stop Wasting Money on
              <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Unqualified Leads
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Get high-quality, pre-qualified solar leads that actually convert. Our AI-powered system filters out tire-kickers and delivers homeowners ready to go solar—no BS, just results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all cursor-pointer whitespace-nowrap"
              >
                Get Qualified Leads Now
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                See How It Works
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Lead Quality Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">3x</div>
                <div className="text-sm text-gray-600">Higher Conversion</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/86326c846528229120801a4c6e78a90f/c848a5ee7a608c5e163d737b3ac4b1e6.jpeg"
                alt="AI Lead Generation Dashboard"
                className="rounded-2xl shadow-2xl object-cover object-top"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-3xl text-white font-bold" style={{ fontWeight: 900, strokeWidth: 2 }}></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">962</div>
                    <div className="text-sm text-gray-600">Qualified Leads in 2025 Q4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}