export default function VideoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              See How SolarLeads AI Works in Action
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Watch our platform in action and discover how our AI-powered lead generation system helps solar companies like yours close more deals faster. Learn how we qualify leads, deliver them in real-time, and help you maximize your conversion rates with exclusive, high-quality prospects ready to go solar.
            </p>
          </div>

          {/* Right Video */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="https://readdy.ai/api/search-image?query=Modern%20professional%20video%20thumbnail%20showing%20solar%20panel%20installation%20process%20on%20residential%20rooftop%2C%20bright%20sunny%20day%20with%20blue%20sky%2C%20clean%20contemporary%20design%2C%20high%20quality%20photorealistic%20style%20with%20professional%20cinematography%20look%2C%20vibrant%20colors%20and%20sharp%20details&width=1280&height=720&seq=video-poster-001&orientation=landscape"
                aria-label="SolarLeads AI platform demonstration video"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
