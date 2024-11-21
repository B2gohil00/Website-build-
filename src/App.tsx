import React from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import { Globe, Database, ShoppingCart, Code, Search, Smartphone, Server, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Expert web development, SEO optimization, and digital solutions to elevate your business in the digital age.
            </p>
            <a href="#contact" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Get Started
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500/30" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              Icon={Globe}
              title="Website Design"
              description="Custom, responsive websites that capture your brand's essence and engage your audience."
            />
            <ServiceCard
              Icon={Search}
              title="SEO Optimization"
              description="Data-driven SEO strategies to improve your visibility and drive organic traffic."
            />
            <ServiceCard
              Icon={Database}
              title="Database Management"
              description="Efficient database solutions for seamless data handling and management."
            />
            <ServiceCard
              Icon={ShoppingCart}
              title="E-Commerce Solutions"
              description="Full-featured online stores with secure payment processing and inventory management."
            />
            <ServiceCard
              Icon={Users}
              title="Student Portal"
              description="Online admission forms and student management systems for educational institutions."
            />
            <ServiceCard
              Icon={Smartphone}
              title="App Development"
              description="Native and cross-platform mobile applications for iOS and Android."
            />
            <ServiceCard
              Icon={Code}
              title="Custom Development"
              description="Tailored web applications and software solutions for your specific needs."
            />
            <ServiceCard
              Icon={Server}
              title="Website Plugins"
              description="Custom plugins and extensions to enhance your website's functionality."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder="Tell us about your project"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-white">WebMatrix</span>
          </div>
          <p>© {new Date().getFullYear()} WebMatrix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;