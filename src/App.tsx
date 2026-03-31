/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Camera, 
  Video, 
  Phone, 
  Instagram, 
  MessageCircle, 
  MapPin, 
  CheckCircle2,
  ChevronRight,
  Star,
  Heart
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center">
              <span className="text-brand-cream font-serif text-xl font-bold italic">N</span>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight hidden sm:block">
              NIL <span className="text-brand-gold">PHOTOBOOTH</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
            <a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a>
            <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
            <a 
              href="https://wa.me/6281234567890" 
              className="bg-zinc-900 text-brand-cream px-6 py-2.5 rounded-full hover:bg-zinc-800 transition-all"
            >
              Book Now
            </a>
          </div>
          <button className="md:hidden text-zinc-900">
            <MessageCircle size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin size={14} />
              Based in Bali, Indonesia
            </div>
            <h1 className="text-6xl lg:text-8xl font-serif leading-[0.9] mb-8">
              Capture Your <br />
              <span className="italic text-brand-gold">Magic Moments</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-md mb-10 leading-relaxed">
              Premium Photobooth & 360 Videobooth services for weddings and events. 
              Hasil dijamin jernih, tajam, dan tak terlupakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-zinc-900 text-brand-cream px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                Get a Quote <ChevronRight size={18} />
              </button>
              <button className="border border-zinc-300 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 transition-colors">
                View Gallery
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
                alt="Wedding in Bali" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <div className="flex gap-1 text-brand-gold mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs font-bold text-zinc-900 italic">"The best photobooth experience in Bali! Highly recommended."</p>
              <p className="text-[10px] text-zinc-400 mt-2 uppercase tracking-widest">- Sarah & David</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif mb-6">Our Premium Services</h2>
            <p className="text-zinc-500">Pilih layanan terbaik untuk memeriahkan acara spesial Anda di Pulau Dewata.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Photobooth",
                desc: "High-quality prints with custom templates. Jernih dan tajam!",
                icon: <Camera className="text-brand-gold" size={32} />,
                price: "Starts from 1.5jt"
              },
              {
                title: "Videobooth 360",
                desc: "Capture every angle of the fun with our cinematic 360 experience.",
                icon: <Video className="text-brand-gold" size={32} />,
                price: "Best Seller"
              },
              {
                title: "Telephone Booth",
                desc: "Vintage audio guestbook for heartfelt messages from your guests.",
                icon: <Phone className="text-brand-gold" size={32} />,
                price: "Special Promo"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-brand-cream border border-zinc-100 hover:shadow-xl transition-all"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-zinc-600 mb-8 text-sm leading-relaxed">{service.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-zinc-200">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">{service.price}</span>
                  <ChevronRight size={16} className="text-zinc-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-24 bg-zinc-900 text-brand-cream overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-serif mb-8 leading-tight">
                Special Offer for <br />
                <span className="italic text-brand-gold">Bali Weddings</span>
              </h2>
              <ul className="space-y-4 mb-10">
                {[
                  "Free Telephone Booth (Audio Guestbook)",
                  "Unlimited High-Quality Prints",
                  "Professional Lighting & Props",
                  "Instant Digital Sharing",
                  "Customized Overlay Design"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 size={20} className="text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-brand-gold text-zinc-900 px-10 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Claim Your Discount
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl aspect-square object-cover" alt="Wedding" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl aspect-[3/4] object-cover" alt="Party" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl aspect-[3/4] object-cover" alt="Celebration" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl aspect-square object-cover" alt="Event" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section id="gallery" className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif mb-4">Our Recent Works</h2>
              <p className="text-zinc-500">Melihat kebahagiaan klien kami melalui lensa NIL Photobooth.</p>
            </div>
            <a href="#" className="text-brand-gold font-bold flex items-center gap-2 hover:underline">
              Follow us on Instagram <Instagram size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-zinc-200 rounded-2xl overflow-hidden group relative">
                <img 
                  src={`https://picsum.photos/seed/nil${i}/600/600`} 
                  alt="Gallery" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Heart className="text-white" fill="white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center">
                  <span className="text-brand-cream font-serif text-xl font-bold italic">N</span>
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight">
                  NIL <span className="text-brand-gold">PHOTOBOOTH</span>
                </span>
              </div>
              <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
                Penyedia jasa photobooth dan videobooth 360 terbaik di Bali. 
                Kami hadir untuk mengabadikan setiap senyum dan tawa di acara spesial Anda.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-brand-gold">Home</a></li>
                <li><a href="#services" className="hover:text-brand-gold">Services</a></li>
                <li><a href="#gallery" className="hover:text-brand-gold">Gallery</a></li>
                <li><a href="#" className="hover:text-brand-gold">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm text-zinc-600">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-gold shrink-0" />
                  <span>Denpasar, Bali, Indonesia</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-brand-gold shrink-0" />
                  <span>+62 812-3456-7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram size={18} className="text-brand-gold shrink-0" />
                  <span>@nil_entertain</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400 font-medium uppercase tracking-widest">
            <p>© 2026 NIL Photobooth Bali. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-zinc-900">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/6281234567890"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
}
