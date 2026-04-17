'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-6">
            Fast Digital Services in Ghana
          </h1>
          <p className="text-xl mb-10">
            Buy mobile data instantly • Order food easily • Reliable delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="bg-white text-green-700 font-semibold px-10 py-4 rounded-2xl text-lg hover:bg-gray-100 transition"
            >
              Browse Services
            </a>
            <a 
              href="https://wa.me/233XXXXXXXXX" 
              target="_blank"
              className="border-2 border-white font-semibold px-10 py-4 rounded-2xl text-lg hover:bg-white/10 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">
            <div className="text-6xl mb-6">📱</div>
            <h3 className="text-2xl font-semibold mb-3">Mobile Data Bundles</h3>
            <p className="text-gray-600 mb-6">Instant MTN, Vodafone, AirtelTigo top-up</p>
            <div className="text-3xl font-bold text-green-600">From GH₵5</div>
            <button className="mt-8 w-full bg-green-600 text-white py-4 rounded-2xl font-semibold hover:bg-green-700">
              Buy Data Now
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">
            <div className="text-6xl mb-6">🍔</div>
            <h3 className="text-2xl font-semibold mb-3">Food Ordering</h3>
            <p className="text-gray-600 mb-6">Order from restaurants & get delivered</p>
            <div className="text-3xl font-bold text-green-600">From GH₵10</div>
            <button className="mt-8 w-full bg-green-600 text-white py-4 rounded-2xl font-semibold hover:bg-green-700">
              Order Food
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">
            <div className="text-6xl mb-6">💰</div>
            <h3 className="text-2xl font-semibold mb-3">Airtime & More</h3>
            <p className="text-gray-600 mb-6">Airtime top-up and other services</p>
            <div className="text-3xl font-bold text-green-600">Instant</div>
            <button className="mt-8 w-full bg-green-600 text-white py-4 rounded-2xl font-semibold hover:bg-green-700">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <p>blaajobs.net • Fast Digital Services in Accra</p>
        <p className="text-gray-400 mt-2">© 2026 • Contact us on WhatsApp for support</p>
      </footer>
    </div>
  );
}