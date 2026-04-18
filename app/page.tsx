'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState(null); // { name, email, balance }
  const [referralCode, setReferralCode] = useState('');
  const [newService, setNewService] = useState({ name: '', desc: '', price: '' });

  // Load user from localStorage on start
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = {
      name: formData.get('name'),
      email: formData.get('email'),
      balance: 10, // 10 GH₵ welcome + referral bonus
      referralCode: Math.random().toString(36).substring(2, 8).toUpperCase()
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setShowSignUp(false);
    alert(`Welcome ${newUser.name}! You received GH₵10 bonus 🎉 Your referral code: ${newUser.referralCode}`);
  };

  const claimReferralBonus = () => {
    if (!referralCode) return alert("Enter a referral code");
    // Fake bonus for demo (in real app you'd verify code)
    if (user) {
      const updatedUser = { ...user, balance: user.balance + 10 };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      alert("GH₵10 referral bonus added! 🎉");
    } else {
      alert("Please create an account first");
    }
  };

  // Example services (you can add more easily)
  const [services, setServices] = useState([
    {
      icon: "📱",
      title: "Mobile Data Bundles",
      desc: "MTN • Vodafone • AirtelTigo",
      price: "From GH₵30",
      button: "Buy Data Now"
    },
    {
      icon: "🍔",
      title: "Food Ordering Help",
      desc: "Fast delivery from restaurants",
      price: "From GH₵15",
      button: "Order Food"
    },
    {
      icon: "💰",
      title: "Airtime & More",
      desc: "Instant top-up",
      price: "Any amount",
      button: "Buy Airtime"
    }
  ]);

  const addNewService = () => {
    if (!newService.name || !newService.desc) return alert("Fill name and description");
    setServices([...services, {
      icon: "⭐",
      title: newService.name,
      desc: newService.desc,
      price: newService.price || "Coming soon",
      button: "Get Started"
    }]);
    setNewService({ name: '', desc: '', price: '' });
    alert("New service added! Refresh to see it.");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="bg-zinc-950 border-b border-yellow-400 py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-yellow-400">blaajobs.net</h1>
          <div className="flex gap-6 items-center">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-yellow-400">Welcome, {user.name} • Balance: GH₵{user.balance}</span>
                <button onClick={() => setUser(null)} className="text-sm text-gray-400 hover:text-white">Logout</button>
              </div>
            ) : (
              <button onClick={() => setShowSignUp(true)} className="bg-yellow-400 text-black px-6 py-2 rounded-2xl font-semibold hover:bg-yellow-300">
                Create Account
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-black py-28 border-b-4 border-yellow-400">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-yellow-400">Fast Digital Services</h1>
          <p className="text-3xl mb-4">in Ghana</p>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300">Instant data • Food help • Airtime • 10 GH₵ referral bonus</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#services" className="bg-yellow-400 text-black font-semibold px-12 py-5 rounded-3xl text-xl hover:bg-yellow-300 transition">Browse Services</a>
            <a href="https://wa.me/233YOURNUMBER" target="_blank" className="border-2 border-yellow-400 font-semibold px-12 py-5 rounded-3xl text-xl hover:bg-yellow-400 hover:text-black transition">Chat on WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-10 rounded-3xl max-w-md w-full">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Create Your Account</h2>
            <form onSubmit={handleSignUp} className="space-y-6">
              <input type="text" name="name" placeholder="Your Full Name" required className="w-full bg-zinc-800 border border-yellow-400 rounded-2xl px-6 py-4 text-white" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full bg-zinc-800 border border-yellow-400 rounded-2xl px-6 py-4 text-white" />
              <button type="submit" className="w-full bg-yellow-400 text-black py-5 rounded-3xl font-bold text-xl hover:bg-yellow-300">Create Account & Get GH₵10 Bonus</button>
            </form>
            <button onClick={() => setShowSignUp(false)} className="mt-6 text-gray-400 w-full">Close</button>
          </div>
        </div>
      )}

      {/* Referral Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Refer & Earn GH₵10 Bonus</h2>
        <p className="text-xl text-gray-300 mb-8">Share your referral code with friends. They get GH₵10 when they sign up.</p>
        
        {user && <p className="text-2xl mb-6">Your Referral Code: <span className="font-mono bg-yellow-400 text-black px-4 py-2 rounded-xl">{user.referralCode}</span></p>}
        
        <div className="flex gap-4 max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Enter referral code" 
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            className="flex-1 bg-zinc-800 border border-yellow-400 rounded-2xl px-6 py-4 text-white"
          />
          <button onClick={claimReferralBonus} className="bg-yellow-400 text-black px-10 rounded-2xl font-semibold hover:bg-yellow-300">Claim Bonus</button>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-zinc-950 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 text-yellow-400">Our Services</h2>
          <p className="text-center text-xl text-gray-400 mb-16">Instant • Reliable • Best rates in Accra</p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-900 rounded-3xl p-10 hover:border-yellow-400 border border-transparent transition-all">
                <div className="text-7xl mb-6">{service.icon}</div>
                <h3 className="text-3xl font-bold mb-4 text-yellow-400">{service.title}</h3>
                <p className="text-gray-400 mb-8">{service.desc}</p>
                <p className="text-2xl font-bold text-yellow-400 mb-10">{service.price}</p>
                <button className="w-full bg-yellow-400 text-black py-5 rounded-2xl font-semibold text-lg hover:bg-yellow-300 transition">
                  {service.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add New Service (for you - the owner) */}
      <div className="max-w-5xl mx-auto px-6 py-16 bg-zinc-900">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">Add a New Service (Owner Only)</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <input 
            type="text" 
            placeholder="Service Name" 
            value={newService.name}
            onChange={(e) => setNewService({...newService, name: e.target.value})}
            className="bg-zinc-800 border border-yellow-400 rounded-2xl px-6 py-4"
          />
          <input 
            type="text" 
            placeholder="Short Description" 
            value={newService.desc}
            onChange={(e) => setNewService({...newService, desc: e.target.value})}
            className="bg-zinc-800 border border-yellow-400 rounded-2xl px-6 py-4"
          />
          <input 
            type="text" 
            placeholder="Price (optional)" 
            value={newService.price}
            onChange={(e) => setNewService({...newService, price: e.target.value})}
            className="bg-zinc-800 border border-yellow-400 rounded-2xl px-6 py-4"
          />
        </div>
        <button onClick={addNewService} className="mt-8 mx-auto block bg-yellow-400 text-black px-12 py-5 rounded-3xl font-bold text-xl hover:bg-yellow-300">
          Add New Service to List
        </button>
        <p className="text-center text-gray-500 mt-4 text-sm">Changes save in your browser only for now. Later we can make it permanent.</p>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-400 py-16 text-center">
        <p className="text-3xl font-bold text-yellow-400 mb-2">blaajobs.net</p>
        <p className="text-gray-400">Fast Digital Services • Accra, Ghana</p>
        <p className="mt-8 text-gray-500">© 2026 • WhatsApp for instant support</p>
      </footer>
    </div>
  );
}