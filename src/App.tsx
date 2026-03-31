import { motion } from "motion/react";
import { ShoppingBag, MapPin, Zap, Instagram, Twitter, Youtube, ArrowRight, Star, Play, Mail, Menu, X, Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-black/80 backdrop-blur-lg py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-extrabold tracking-tighter text-brand-neon"
        >
          VIBE
        </motion.div>
        
        <div className="hidden md:flex gap-8 items-center font-semibold text-sm uppercase tracking-widest">
          {["Flavors", "Experience", "Social", "Find Us"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-brand-neon transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-brand-blue px-6 py-2 rounded-full hover:bg-brand-neon hover:text-brand-black transition-all duration-300">
            Buy Now
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-black border-b border-white/10 p-6 flex flex-col gap-6 text-center uppercase font-bold"
        >
          {["Flavors", "Experience", "Social", "Find Us"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button className="bg-brand-blue py-4 rounded-xl">Buy Now</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Animation Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/20 via-brand-black to-brand-black z-10" />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-40"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-brand-accent text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.3em] mb-6">
            New Generation Energy
          </span>
          <h1 className="text-6xl md:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-8 italic">
            UNLEASH <br />
            <span className="text-brand-neon text-glow">THE VIBE</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-10 font-medium">
            The boldest flavors, the zero-sugar rush, and the limited editions you can't miss.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-black px-10 py-5 rounded-full font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-neon transition-all group">
              Explore Flavors <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-glass px-10 py-5 rounded-full font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
              <MapPin className="w-5 h-5" /> Find Near You
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-px h-20 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
        <span className="text-[10px] uppercase tracking-[0.5em] mt-4 block">Scroll</span>
      </motion.div>
    </section>
  );
};

const ProductShowcase = () => {
  const products = [
    { name: "VIBE Classic", color: "bg-brand-blue", img: "https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=800", desc: "The original bold rush." },
    { name: "VIBE Zero", color: "bg-zinc-900", img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&q=80&w=800", desc: "Maximum vibe, zero sugar." },
    { name: "Neon Punch", color: "bg-brand-neon", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80&w=800", desc: "Limited edition electric fruit." },
  ];

  return (
    <section id="flavors" className="py-24 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-black italic tracking-tighter">OUR LINEUP</h2>
            <p className="text-white/50 mt-4 max-w-md">Pick your poison. Every drop is engineered for maximum impact.</p>
          </div>
          <div className="flex gap-4">
            {["All", "Classic", "Zero", "Limited"].map((cat) => (
              <button key={cat} className="text-xs font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-brand-neon pb-1 transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-900"
            >
              <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className={`w-12 h-1 ${p.color} mb-4`} />
                <h3 className="text-3xl font-display font-black italic mb-2">{p.name}</h3>
                <p className="text-sm text-white/60 mb-6">{p.desc}</p>
                <button className="w-full py-4 bg-glass rounded-xl font-bold uppercase tracking-widest group-hover:bg-brand-neon group-hover:text-brand-black transition-all">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImmersiveSection = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-square rounded-full border border-brand-neon/30 flex items-center justify-center"
          >
            <div className="w-4/5 h-4/5 rounded-full border border-brand-neon/50 flex items-center justify-center animate-pulse">
              <div className="w-3/4 h-3/4 rounded-full bg-brand-blue/20 backdrop-blur-3xl" />
            </div>
          </motion.div>
          <img 
            src="https://images.unsplash.com/photo-1556740734-7f95834d0ff9?auto=format&fit=crop&q=80&w=800" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 rounded-2xl rotate-12 shadow-2xl shadow-brand-neon/20"
            alt="Lifestyle"
          />
        </div>

        <div>
          <h2 className="text-5xl md:text-7xl font-display font-black italic leading-none mb-8">MORE THAN <br /><span className="text-brand-neon">A DRINK.</span></h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            From the main stage to the late-night grind, VIBE is the fuel for your creative fire. We don't just follow culture; we create it.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-brand-accent font-black text-4xl mb-2">50+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-white/50">Festivals Sponsored</div>
            </div>
            <div>
              <div className="text-brand-neon font-black text-4xl mb-2">10M+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-white/50">Vibe Tribe Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section id="social" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black italic mb-4">#VIBETRIBE</h2>
          <p className="text-white/50">Join the movement. Tag us to get featured.</p>
        </div>

        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded-2xl overflow-hidden"
            >
              <img 
                src={`https://picsum.photos/seed/vibe${i}/600/800`} 
                alt="UGC" 
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-brand-blue/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StoreLocator = () => {
  return (
    <section id="find-us" className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-brand-blue rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/20 blur-3xl -mr-20 -mt-20" />
        
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black italic mb-8">THIRSTY YET?</h2>
          <div className="max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="Enter your zip code..." 
              className="w-full bg-white/10 border border-white/20 rounded-full py-5 px-8 outline-none focus:bg-white/20 transition-all text-white placeholder:text-white/50"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-white text-brand-blue px-6 rounded-full font-bold hover:bg-brand-neon transition-colors">
              Find
            </button>
          </div>
          <p className="mt-6 text-white/70 text-sm font-medium">Available in 50,000+ stores worldwide.</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="text-4xl font-display font-black tracking-tighter text-brand-neon mb-6">VIBE</div>
            <p className="text-white/50 max-w-sm mb-8">
              The next generation of refreshment. Bold, unapologetic, and always moving forward.
            </p>
            <div className="flex gap-6">
              <Instagram className="w-6 h-6 hover:text-brand-neon cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 hover:text-brand-neon cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 hover:text-brand-neon cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-white/30">Explore</h4>
            <ul className="space-y-4 font-semibold text-sm">
              <li><a href="#" className="hover:text-brand-neon">Flavors</a></li>
              <li><a href="#" className="hover:text-brand-neon">Zero Sugar</a></li>
              <li><a href="#" className="hover:text-brand-neon">Merch</a></li>
              <li><a href="#" className="hover:text-brand-neon">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-white/30">Support</h4>
            <ul className="space-y-4 font-semibold text-sm">
              <li><a href="#" className="hover:text-brand-neon">Contact</a></li>
              <li><a href="#" className="hover:text-brand-neon">Store Locator</a></li>
              <li><a href="#" className="hover:text-brand-neon">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-neon">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            © 2026 VIBE BEVERAGE CO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-white/30">
            <span>Made for the Tribe</span>
            <span>Global HQ: NYC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-neon selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <ImmersiveSection />
        <SocialProof />
        <StoreLocator />
      </main>
      <Footer />
    </div>
  );
}
