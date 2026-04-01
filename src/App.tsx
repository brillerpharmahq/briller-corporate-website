import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  ShieldCheck, 
  Sparkles, 
  HeartPulse, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Star,
  Quote
} from 'lucide-react';

// Images - imported so they work in all environments (local, AI Studio, production)
import logoImg from './assets/images/briller-logo.png';
import minyakHeroImg from './assets/images/minyak-nur-hero.png';
import tmmHeroImg from './assets/images/tmm-hero.jpeg';
import minyakProductImg from './assets/images/minyak-nur-product.jpg';
import tmmProductImg from './assets/images/tmm-product.jpg';
import aboutus from './assets/images/aboutus.jpg';
import ourAmbassadorImg from './assets/images/ourambassador.jpg';
import ourambassador from './assets/images/IM_Hassan.jpg';
import cert1 from './assets/images/cert1.jpg';
import cert2 from './assets/images/cert2.jpg';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a href="/" aria-label="Go to homepage" className="inline-flex items-center">
              <img
                src={logoImg}
                alt="Briller Logo"
                className="h-15 w-auto object-contain"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#products"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-zinc-900' : 'text-white'
              } hover:text-brand-600`}
            >
              Products
            </a>
            <a
              href="#science"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-zinc-900' : 'text-white'
              } hover:text-brand-600`}
            >
              Our Science
            </a>
            <a
              href="#about"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-zinc-900' : 'text-white'
              } hover:text-brand-600`}
            >
              About Us
            </a>
            <a
              href="#testimonials"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-zinc-900' : 'text-white'
              } hover:text-brand-600`}
            >
              Reviews
            </a>
          </nav>

          

          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-zinc-600' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-zinc-100 p-4 md:hidden flex flex-col gap-4"
          >
            <a
              href="#products"
              className="text-base font-medium text-zinc-800 p-2 hover:bg-zinc-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#science"
              className="text-base font-medium text-zinc-800 p-2 hover:bg-zinc-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Science
            </a>
            <a
              href="#about"
              className="text-base font-medium text-zinc-800 p-2 hover:bg-zinc-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <div className="h-px bg-zinc-100 my-2"></div>
            <button className="w-full btn-wipe px-5 py-3 rounded-xl text-base font-medium">
              Shop Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [minyakHeroImg, tmmHeroImg];

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={slides[currentSlide]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover z-0"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>New: Advanced Cellular Hydration Formula</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Radiant health, <br/>
              <span className="text-brand-300 italic font-serif">naturally sourced.</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg font-sans">
              Briller blends time-honoured traditional healing with the latest advancements in scientific innovation to elevate your everyday wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={scrollToProducts}
                className="bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-full text-base font-medium transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </button>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProductSection = () => {
  const products = [
    {
      name: "Minyak Nur Aromaterapi",
      image: minyakProductImg,
      description:
        "Minyak Nur Aromatherapy is a herbal oil specially formulated to help relieve cough, joint pain, and wind-related discomfort. It is made from 23 natural forest herbs and has been laboratory tested for quality and safety.",
      // You can edit this extra text any time
      moreInfo:
        "Minyak Nur Aromatherapy is a herbal oil specially formulated to help relieve cough, joint pain, and wind-related discomfort. It is made from 23 natural forest herbs and has been laboratory tested for quality and safety.",
      labTestImage: null as string | null,
      certificates: [
        {subtitle: 'Microbiology Tested', image: cert1 as string},
        {subtitle: 'Heavy Metal Tested', image: cert2 as string},
      ],
    },
    {
      name: "ImmunoTiger",
      image: tmmProductImg,
      description:
        "ImmunoTiger is a health product specifically developed to support lung health. It is formulated using Tiger Milk Mushroom and Black Seed (Habbatus Sauda), developed by a herbal doctor from Universiti Putra Malaysia. The ingredients used are supported by clinical research to evaluate their effectiveness.",
      // You can edit this extra text any time
      moreInfo:
        "ImmunoTiger is a health product specifically developed to support lung health. It is formulated using Tiger Milk Mushroom and Black Seed (Habbatus Sauda), developed by a herbal doctor from Universiti Putra Malaysia. The ingredients used are supported by clinical research to evaluate their effectiveness.",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLabTestOpen, setIsLabTestOpen] = useState(false);
  const [lightboxImageSrc, setLightboxImageSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');

  const openModal = (product: (typeof products)[number]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setIsLabTestOpen(false);
    setLightboxImageSrc(null);
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Our Premium Products</h2>
          <p className="text-zinc-600 font-sans max-w-2xl mx-auto">Discover our range of scientifically-backed, naturally-sourced health solutions designed for your well-being.</p>
        </div>
        
        <div className="space-y-20">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-brand-100 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-1"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="relative z-10 w-full h-[500px] object-cover rounded-[2rem] shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 font-serif">{product.name}</h3>
                <div className="h-1 w-20 bg-brand-600 rounded-full"></div>
                <p className="text-lg text-zinc-600 leading-relaxed font-sans">
                  {product.description}
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => openModal(product)}
                    className="btn-wipe px-8 py-3 font-semibold"
                  >
                    <span>Learn More</span> <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {isModalOpen && selectedProduct && (
            <motion.div
              key="product-modal-backdrop"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                key="product-modal-panel"
                className="bg-white rounded-3xl max-w-3xl w-full p-6 md:p-8 relative"
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800 text-2xl leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 font-serif">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-zinc-600 font-sans leading-relaxed">
                      {selectedProduct.moreInfo}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-64 md:h-72 rounded-2xl object-cover shadow-lg"
                    />
                    {'labTestImage' in selectedProduct && (selectedProduct as any).labTestImage ? (
                      <button
                        type="button"
                        onClick={() => setIsLabTestOpen(true)}
                        className="block w-full text-left"
                        aria-label="Open lab test image"
                      >
                        <img
                          src={(selectedProduct as any).labTestImage}
                          alt={`${selectedProduct.name} lab test`}
                          className="w-full h-64 md:h-72 rounded-2xl object-cover shadow-lg border border-zinc-200 cursor-zoom-in"
                        />
                      </button>
                    ) : null}

                    {'certificates' in selectedProduct && Array.isArray((selectedProduct as any).certificates) ? (
                      <div className="grid grid-cols-2 gap-3">
                        {(selectedProduct as any).certificates.map(
                          (c: {subtitle?: string; image: string}, i: number) => (
                          <button
                            key={`${selectedProduct.name}-cert-${i}`}
                            type="button"
                            onClick={() => {
                              setLightboxAlt(c.subtitle || `${selectedProduct.name} certificate ${i + 1}`);
                              setLightboxImageSrc(c.image);
                            }}
                            className="block w-full text-left group"
                            aria-label={`Open ${c.subtitle || `${selectedProduct.name} certificate ${i + 1}`}`}
                          >
                            <div className="rounded-2xl border border-zinc-200 overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow">
                              <img
                                src={c.image}
                                alt={c.subtitle || `${selectedProduct.name} certificate ${i + 1}`}
                                className="w-full h-28 object-cover cursor-zoom-in transition-transform duration-200 group-hover:scale-[1.02]"
                              />
                            </div>
                            <div className="mt-2 text-xs font-semibold text-zinc-700 font-sans flex items-center gap-1">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                              <span>{c.subtitle || `Certificate ${i + 1}`}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lab test full-screen view */}
        <AnimatePresence>
          {isModalOpen &&
          selectedProduct &&
          isLabTestOpen &&
          'labTestImage' in selectedProduct &&
          (selectedProduct as any).labTestImage ? (
            <motion.div
              key="labtest-lightbox"
              className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center px-4"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setIsLabTestOpen(false)}
            >
              <motion.div
                key="labtest-lightbox-panel"
                className="relative w-full max-w-5xl"
                initial={{opacity: 0, scale: 0.98}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.98}}
                transition={{duration: 0.2, ease: 'easeOut'}}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsLabTestOpen(false)}
                  className="absolute -top-12 right-0 text-white/90 hover:text-white text-3xl leading-none"
                  aria-label="Close lab test image"
                >
                  ×
                </button>
                <img
                  src={(selectedProduct as any).labTestImage}
                  alt={`${selectedProduct.name} lab test full view`}
                  className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl bg-black"
                />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Certificate full-screen view */}
        <AnimatePresence>
          {isModalOpen && selectedProduct && lightboxImageSrc ? (
            <motion.div
              key="cert-lightbox"
              className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center px-4"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setLightboxImageSrc(null)}
            >
              <motion.div
                key="cert-lightbox-panel"
                className="relative w-full max-w-5xl"
                initial={{opacity: 0, scale: 0.98}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.98}}
                transition={{duration: 0.2, ease: 'easeOut'}}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setLightboxImageSrc(null)}
                  className="absolute -top-12 right-0 text-white/90 hover:text-white text-3xl leading-none"
                  aria-label="Close image"
                >
                  ×
                </button>
                <img
                  src={lightboxImageSrc}
                  alt={lightboxAlt || 'Certificate image'}
                  className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl bg-black"
                />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Pure Ingredients",
      description: "Sourced directly from organic farms, ensuring maximum potency without synthetic additives."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Clinically Proven",
      description: "Every formula is backed by rigorous double-blind clinical trials and peer-reviewed research."
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Holistic Wellness",
      description: "Designed to support your body's natural systems for sustained, long-term vitality."
    }
  ];

  return (
    <section id="science" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">The science of feeling better.</h2>
          <p className="text-lg text-zinc-600 font-sans">We don't believe in quick fixes. Briller products are formulated by leading naturopaths and scientists to address the root causes of fatigue, stress, and aging.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3 font-serif">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed font-sans">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">Our Story.</h2>
            <p className="text-lg text-zinc-600 mb-6 font-sans leading-relaxed">
              Briller was born out of a simple realization: true health isn't found in quick fixes or synthetic shortcuts. It's cultivated through daily, intentional choices that honor the body's natural wisdom.
            </p>
            <p className="text-lg text-zinc-600 mb-8 font-sans leading-relaxed">
              After years of navigating a confusing wellness industry, our founders set out to create a brand built on radical transparency, clinical efficacy, and uncompromising purity.
            </p>
            
            <div className="space-y-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3 font-serif flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  Our Mission
                </h3>
                <p className="text-zinc-600 font-sans leading-relaxed">
                  To empower individuals to take control of their health through scientifically backed, naturally sourced nutritional formulas that actually work.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3 font-serif flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4" />
                  </div>
                  Our Vision
                </h3>
                <p className="text-zinc-600 font-sans leading-relaxed">
                  A world where proactive, holistic wellness is accessible, understandable, and integrated seamlessly into everyday life.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-brand-50 rounded-[3rem] transform -rotate-3 scale-105 -z-10"></div>
            <img 
              src={aboutus}
              alt="About Briller" 
              className="w-full rounded-[3rem] shadow-xl object-cover aspect-[4/5]"
            />
          </motion.div>
        </div>

        {/* OUR AMBASSADOR */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-5/12">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-50 rounded-[2.5rem] transform rotate-2 -z-10"></div>
                <img
                  src={ourAmbassadorImg}
                  alt="Our Ambassador"
                  className="w-full aspect-[4/5] rounded-[2.5rem] object-cover shadow-xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-5">
                OUR AMBASSADOR
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 font-serif mb-4">
                Imam Muda Hassan
              </h3>
              <p className="text-lg text-zinc-600 font-sans leading-relaxed mb-6">
                Imam Muda Hassan (Hassan Adli) is a Malaysian Islamic preacher and television personality, best known as the champion of the second season of the reality show Imam Muda in 2011. He was chosen for his balanced knowledge of Shariah, Quranic recitation (tahfiz), and modern leadership skills, aimed at promoting progressive dakwah. 

              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#about" className="btn-wipe px-8 py-3 font-semibold">
                  <span>Explore our team</span> <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Don't just take our word for it.</h2>
          <p className="text-lg text-zinc-400 font-sans">Thousands have transformed their daily health with Briller.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "Alhamdulillah, sudah terima Minyak Nur. Minyak ni bagus, ada kesan selepas guna. Batuk dan kahak berkurangan. Sebelum ni beli dekat FB, ni kali kedua beli di Shopee, bagaus minyak ni dan akan repeat lagi nanti. Terima kasih.",
              author: "Sarah Ali.",
              role: "Minyak Nur buyer | Shopee"
            },
            {
              quote: "Dah sampai minyak ni, alhamdulilah memang menjadi. Batuk berkahak dah takda, alhamdulillah",
              author: "Wawa Nan.",
              role: "Minyak Nur buyer | FB "
            },
            {
              quote: "ImmunoTiger ni dah bantu hilangkan rasa susah bernafas saya. Alhamdulillah, rasa lebih sihat lepas guna. Terima kasih seller",
              author: "Muhammad Nasir",
              role: "ImmunoTiger | FB"
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-zinc-700" />
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-300 mb-8 leading-relaxed font-sans">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={`https://picsum.photos/seed/person${index}/100/100`} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-zinc-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-600 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-700 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">Ready to shine?</h2>
            <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto font-sans">
              Join the Briller community today and get 10% off your first order.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://linktr.ee/MinyakNur?utm_source=ig&utm_medium=social&utm_content=link_in_bio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-brand-700 px-8 py-4 rounded-full text-lg font-bold shadow-xl inline-block text-center relative z-20 cursor-pointer btn-float"
              >
                Join now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-50 pt-20 pb-10 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={logoImg}
                alt="Briller Logo" 
                className="h-15 w-auto object-contain"
              />
            </div>
            <p className="text-zinc-500 font-sans max-w-xs mb-6">
              Elevating human potential through pure, science-backed nutritional formulas.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-brand-100 hover:text-brand-600 cursor-pointer transition-colors">in</div>
              <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-brand-100 hover:text-brand-600 cursor-pointer transition-colors">tw</div>
              <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-brand-100 hover:text-brand-600 cursor-pointer transition-colors">ig</div>
            </div>
          </div>
          
        
          
          <div>
            <h4 className="font-bold text-zinc-900 mb-4">About</h4>
            <ul className="space-y-3 text-zinc-500 font-sans">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400 font-sans">
          <p>© {new Date().getFullYear()} Briller Sdn Bhd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <Features />
        <AboutUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
