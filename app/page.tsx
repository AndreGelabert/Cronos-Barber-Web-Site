'use client';

import Image from 'next/image';
import {
  Sun, Accessibility, Scissors, Gamepad2, Coffee, Music, Wind, MapPin, 
  Clock, ArrowRight, Star, MessageSquare, Droplet, Sparkles, Brush
} from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Instagram, Facebook, Menu, X } from 'lucide-react';

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#131313] flex flex-col relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Branches />
      <Services />
      <Boxing />
      <Testimonials />
      <Footer />
    </main>
  );
}

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 pt-8 pb-4">
        {/* Logo */}
        <div className="font-montserrat font-black text-[#f2ca50] text-xl md:text-2xl tracking-wide uppercase">
          Cronos Bar-Ber
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-inter text-gray-800 dark:text-[#e5e2e1]">
          <a href="#" className="relative text-[#f2ca50] font-medium transition-colors">
            Inicio
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#f2ca50]"></span>
          </a>
          <a href="#branches" className="hover:text-[#f2ca50] transition-colors">Sucursales</a>
          <a href="#services" className="hover:text-[#f2ca50] transition-colors">Servicios</a>
          <a href="#boxing" className="hover:text-[#f2ca50] transition-colors">Boxeo</a>
          <a href="#reviews" className="hover:text-[#f2ca50] transition-colors">Reseñas</a>
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-[#f2ca50] hover:text-black dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5" aria-label="Toggle Theme">
            {mounted && theme === 'light' ? <Moon size={24} strokeWidth={1.5} /> : <Sun size={24} strokeWidth={1.5} />}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#f2ca50] hover:text-black dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 relative z-50" aria-label="Toggle Menu">
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 z-40 bg-white dark:bg-[#1c1b1b] border border-gray-200 dark:border-[#353534] shadow-2xl rounded-md flex flex-col py-6 lg:hidden"
        >
          <div className="flex flex-col items-center gap-6 text-sm font-montserrat font-bold uppercase tracking-widest text-gray-800 dark:text-[#e5e2e1]">
            <a href="#" onClick={() => setIsOpen(false)} className="text-[#f2ca50] transition-colors">Inicio</a>
            <a href="#branches" onClick={() => setIsOpen(false)} className="hover:text-[#f2ca50] transition-colors">Sucursales</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-[#f2ca50] transition-colors">Servicios</a>
            <a href="#boxing" onClick={() => setIsOpen(false)} className="hover:text-[#f2ca50] transition-colors">Boxeo</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="hover:text-[#f2ca50] transition-colors">Reseñas</a>
          </div>
        </motion.div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex-grow flex items-center justify-center pt-32 pb-24 top-0 overflow-hidden min-h-screen">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
          alt="Barber Shop Chair Interior"
          fill
          className="object-cover object-center opacity-40 brightness-75 mix-blend-luminosity"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Soft radial overlay to center focus, and linear dark edge fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#131313]/60 to-[#131313]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto px-6">
        
        {/* Center Logo Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-32 w-48 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md flex flex-col items-center justify-center mb-10 relative group"
        >
           <div className="flex items-center gap-2">
              <div className="w-[6px] h-[20px] bg-[#f2ca50] rounded-sm shadow-[0_0_8px_rgba(242,202,80,0.4)]"></div>
              <div className="flex flex-row items-center gap-1.5">
                 <span className="font-montserrat font-bold text-lg text-[#f2ca50] tracking-wider leading-none">CRONOS</span>
                 <span className="font-montserrat font-bold text-xs text-black/50 dark:text-white/50 tracking-widest leading-none mt-[2px]">BAR-BER</span>
              </div>
           </div>
        </motion.div>

        {/* Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl text-black dark:text-white text-center leading-[1.1] tracking-[-0.02em] mb-6 drop-shadow-xl"
        >
          Tu barbería, tu segundo hogar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-inter text-gray-700 dark:text-[#d0c5af] text-lg md:text-[19px] text-center max-w-3xl mb-12 leading-relaxed"
        >
          Sacá tu mejor versión con expertos en estética masculina. Precisión, estilo y una experiencia inigualable en Montecarlo.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <a href="#sucursal-central" className="w-full sm:w-auto text-center border border-[#00daf3] text-gray-800 dark:text-[#e5e2e1] hover:text-[#00daf3] hover:bg-[#00daf3]/5 font-montserrat font-bold text-[13px] tracking-widest uppercase px-10 py-4 rounded-[3px] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,218,243,0.1)] hover:shadow-[0_0_20px_rgba(0,218,243,0.25)] relative overflow-hidden group">
            Sucursal Central
          </a>
          
          <a href="#cronos-3" className="w-full sm:w-auto text-center bg-[#f2ca50] hover:bg-[#ffe088] text-[#3c2f00] font-montserrat font-bold text-[13px] tracking-widest uppercase px-10 py-4 rounded-[3px] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(242,202,80,0.3)] active:scale-95">
             Cronos 3
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Branches() {
  return (
    <section id="branches" className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-[#131313] relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-black dark:text-white tracking-tight uppercase mb-4">
            Nuestras <span className="text-[#f2ca50]">Sucursales</span>
          </h2>
          <div className="w-16 h-1 bg-[#f2ca50] rounded-sm"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Sucursal 1 (Central) */}
          <motion.div
            id="sucursal-central"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-white dark:bg-[#1c1b1b] rounded-md overflow-hidden border border-gray-200 dark:border-[#353534] hover:border-[#00daf3]/50 transition-all duration-300 scroll-mt-28"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00daf3]/10 via-[#00daf3] to-[#00daf3]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="h-64 relative overflow-hidden">
               <Image
                 src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=2070&auto=format&fit=crop"
                 alt="Sucursal Central Gamer"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity brightness-75"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] to-transparent"></div>
               <div className="absolute bottom-4 left-6 flex items-center gap-3">
                 <div className="bg-[#00daf3]/10 text-[#00daf3] border border-[#00daf3]/30 px-3 py-1 rounded-[3px] font-inter text-xs font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(0,218,243,0.2)]">
                   Urbano
                 </div>
               </div>
            </div>

            <div className="p-8">
              <h3 className="font-montserrat font-black text-2xl text-black dark:text-white tracking-wide uppercase mb-6 flex items-center gap-3">
                Sucursal Central
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00daf3] opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00daf3]"></span>
                </span>
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-8">
                 <div className="flex items-center gap-2 text-gray-600 dark:text-[#99907c] text-sm font-inter">
                   <Gamepad2 size={16} className="text-[#00daf3]" /> PlayStation
                 </div>
                 <div className="flex items-center gap-2 text-gray-600 dark:text-[#99907c] text-sm font-inter">
                   <Coffee size={16} className="text-[#00daf3]" /> Barcito
                 </div>
                 <div className="flex items-center gap-2 text-gray-600 dark:text-[#99907c] text-sm font-inter">
                   <Music size={16} className="text-[#00daf3]" /> Música Live
                 </div>
                 <div className="flex items-center gap-2 text-gray-600 dark:text-[#99907c] text-sm font-inter">
                   <Wind size={16} className="text-[#00daf3]" /> Climatizado
                 </div>
              </div>

              <div className="space-y-4 mb-8 text-[15px] text-gray-800 dark:text-[#e5e2e1] font-inter">
                 <div className="flex items-start gap-4">
                   <Clock className="w-5 h-5 text-gray-400 dark:text-[#4d4635] shrink-0 mt-0.5" />
                   <div>
                     <p className="font-bold text-black dark:text-white mb-1">Horarios</p>
                     <p className="text-gray-600 dark:text-[#99907c]">Lun a Sáb: 09:00 - 12:00 / 16:00 - 21:00</p>
                     <p className="text-gray-600 dark:text-[#99907c] text-sm">(Sáb tarde desde las 15:00 hs)</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <MapPin className="w-5 h-5 text-gray-400 dark:text-[#4d4635] shrink-0 mt-0.5" />
                   <div>
                     <p className="font-bold text-black dark:text-white mb-1">Dirección</p>
                     <p className="text-gray-600 dark:text-[#99907c]">Av. Libertador y 4 de Mayo<br/>Montecarlo, Misiones</p>
                   </div>
                 </div>
              </div>

              <div className="flex flex-col gap-3">
                <a href="https://maps.app.goo.gl/BKqXB4AgPY81qWyq6" target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 font-montserrat font-bold text-[12px] tracking-widest uppercase px-6 py-3 rounded-[3px] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
                  <MapPin size={16} /> Ver ubicación en Maps
                </a>
                <a href="https://wa.me/5493751570173" target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-[#00daf3]/50 text-[#00daf3] hover:bg-[#00daf3]/10 font-montserrat font-bold text-[13px] tracking-widest uppercase px-6 py-4 rounded-[3px] transition-all duration-300 shadow-[0_0_15px_rgba(0,218,243,0.05)] hover:shadow-[0_0_20px_rgba(0,218,243,0.15)] active:scale-95 flex items-center justify-center gap-2">
                  <WhatsappIcon className="w-5 h-5 -mt-0.5" /> Reservar Turno / Consultar
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sucursal 2 (Cronos 3 Premium) */}
          <motion.div
            id="cronos-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white dark:bg-[#1c1b1b] rounded-md overflow-hidden border border-gray-200 dark:border-[#353534] hover:border-[#f2ca50]/50 transition-all duration-300 scroll-mt-28"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f2ca50]/10 via-[#f2ca50] to-[#f2ca50]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="h-64 relative overflow-hidden">
               <Image
                 src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop"
                 alt="Sucursal Cronos 3 Premium"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity brightness-75"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] to-transparent"></div>
               <div className="absolute bottom-4 left-6 flex items-center gap-3">
                 <div className="bg-[#f2ca50]/10 text-[#f2ca50] border border-[#f2ca50]/30 px-3 py-1 rounded-[3px] font-inter text-xs font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(242,202,80,0.2)]">
                   Clásico
                 </div>
               </div>
            </div>

            <div className="p-8">
              <h3 className="font-montserrat font-black text-2xl text-black dark:text-white tracking-wide uppercase mb-6 flex justify-between items-start">
                Cronos 3
              </h3>

              <div className="mb-8 p-4 bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-[#353534] rounded-[3px] flex items-center gap-4">
                 <Clock className="w-8 h-8 text-[#f2ca50] shrink-0" />
                 <div>
                   <p className="font-montserrat font-bold text-[#f2ca50] uppercase tracking-wide text-sm mb-0.5">Atención Exclusiva</p>
                   <p className="font-inter text-black dark:text-white text-[15px] font-bold">Por orden de llegada</p>
                 </div>
              </div>

              <div className="space-y-4 mb-8 text-[15px] text-gray-800 dark:text-[#e5e2e1] font-inter">
                 <div className="flex items-start gap-4">
                   <Clock className="w-5 h-5 text-gray-400 dark:text-[#4d4635] shrink-0 mt-0.5" />
                   <div>
                     <p className="font-bold text-black dark:text-white mb-1">Horarios</p>
                     <p className="text-gray-600 dark:text-[#99907c]">Lun a Vie: 09:00 - 12:00 / 16:00 - 21:00</p>
                     <p className="text-gray-600 dark:text-[#99907c] text-sm">Sáb: 09:00 - 12:00 / <span className="text-[#f2ca50]">15:00</span> - 21:00</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <MapPin className="w-5 h-5 text-gray-400 dark:text-[#4d4635] shrink-0 mt-0.5" />
                   <div>
                     <p className="font-bold text-black dark:text-white mb-1">Dirección</p>
                     <p className="text-gray-600 dark:text-[#99907c]">Av. Libertador (Lado La Chiperita)<br/>Montecarlo, Misiones</p>
                   </div>
                 </div>
              </div>

              <div className="flex flex-col gap-3">
                <a href="https://maps.app.goo.gl/T55z2KzKBkFCRfa9A" target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 font-montserrat font-bold text-[12px] tracking-widest uppercase px-6 py-3 rounded-[3px] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
                  <MapPin size={16} /> Ver ubicación en Maps
                </a>
                <a href="https://wa.me/5493751237812" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#f2ca50] hover:bg-[#ffe088] text-[#3c2f00] font-montserrat font-bold text-[13px] tracking-widest uppercase px-6 py-4 rounded-[3px] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(242,202,80,0.15)] hover:shadow-[0_0_20px_rgba(242,202,80,0.3)] flex items-center justify-center gap-2">
                  <WhatsappIcon className="w-5 h-5 -mt-0.5" /> Consultar Espera / Ubicación
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const servicesList = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Cortes Premium",
      desc: "Tradicionales y de tendencia (Fade, Mullet, Taper). Asesoría de imagen."
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Diseño de Barba",
      desc: "Ritual clásico con toalla caliente premium, perfilado exacto e hidratación."
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Colorimetría",
      desc: "Tratamientos capilares, platinados precisos y tinturas de alta calidad."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Estética Facial",
      desc: "Perfilado y recorte de cejas, mascarillas Black Mask y cuidado de la piel."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white dark:bg-[#0e0e0e] relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-black dark:text-white tracking-tight uppercase mb-4">
            Catálogo de <span className="text-[#f2ca50]">Servicios</span>
          </h2>
          <div className="w-16 h-1 bg-[#f2ca50] rounded-sm mb-6"></div>
          <p className="text-gray-600 dark:text-[#99907c] font-inter max-w-2xl text-[17px]">
            La maestría del cuidado personal. Cada servicio está diseñado para elevar tu imagen con precisión quirúrgica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#1c1b1b] border border-gray-200 dark:border-[#2a2a2a] p-8 rounded-[3px] hover:bg-gray-50 dark:hover:bg-[#201f1f] hover:border-gray-300 dark:hover:border-[#4d4635] transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="text-gray-400 dark:text-[#4d4635] group-hover:text-[#f2ca50] transition-colors duration-300 mb-6 origin-left transform group-hover:scale-110">
                {srv.icon}
              </div>
              <h3 className="font-montserrat font-bold text-black dark:text-white text-lg uppercase tracking-wide mb-3">
                {srv.title}
              </h3>
              <p className="font-inter text-gray-600 dark:text-[#99907c] text-sm leading-relaxed">
                {srv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Boxing() {
  return (
    <section id="boxing" className="py-0 relative z-10 bg-gray-100 dark:bg-black">
      <div className="relative w-full overflow-hidden flex items-center justify-center min-h-[600px] bg-white dark:bg-[#0e0e0e]">
        {/* Deep Contrast Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
            alt="Boxing Training Dark"
            fill
            className="object-cover object-top opacity-30 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          {/* Subtle red glow accent for energy */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#93000a]/10 to-transparent mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start py-20">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="max-w-2xl"
           >
             <div className="inline-block bg-[#93000a] text-white px-4 py-1.5 font-montserrat font-black uppercase tracking-widest text-sm mb-6 rounded-[2px] transform -skew-x-12">
               Nivel Avanzado
             </div>
             <h2 className="font-montserrat font-black text-5xl md:text-7xl text-black dark:text-white uppercase leading-[0.9] tracking-tighter mb-8">
               Cronos<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb4ab] to-white">Boxing Club <span className="text-[#93000a]">🥊</span></span>
             </h2>

             <p className="font-inter text-gray-700 dark:text-[#d0c5af] text-lg md:text-xl leading-relaxed mb-6 border-l-2 border-[#93000a] pl-4">
               Boxeo recreativo con alto nivel técnico. Un espacio brutal ideal para descargar tensiones sin excusas.
             </p>

             <div className="flex items-center gap-2 mb-10">
               <MapPin className="text-[#ffb4ab] w-5 h-5" />
               <span className="font-inter text-gray-800 dark:text-[#e5e2e1] font-medium tracking-wide">Montecarlo, Misiones</span>
             </div>

             <div className="flex flex-col sm:flex-row items-center gap-6">
                <a href="https://wa.me/5493751570173?text=Hola,%20quiero%20reclamar%20mi%20primera%20clase%20gratis%20en%20Cronos%20Boxing!" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto relative group overflow-hidden bg-white text-black font-montserrat font-black text-sm tracking-[0.15em] uppercase px-8 py-5 rounded-[2px] transition-transform active:scale-95 text-center">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <WhatsappIcon className="w-5 h-5" /> Quiero mi clase Gratis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e9c349] to-[#ffb4ab] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <div className="font-inter text-[#ffb4ab] text-sm font-bold uppercase tracking-widest animate-pulse text-center sm:text-left">
                  ¡1ra Clase de Prueba<br/>Totalmente Gratis!
                </div>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Juan Ignacio",
      initials: "JI",
      text: "Excelente atención, un lugar muy cómodo con mucha gente buena!!! Tenés absolutamente de todo para que la espera sea totalmente agradable...",
      stars: 5
    },
    {
      name: "Martin C.",
      initials: "MC",
      text: "Muy amables y excelente servicio. Un barcito increíble que ofrece de todo mientras se espera. Ideal para niños y adultos.",
      stars: 5
    },
    {
      name: "Lucas R.",
      initials: "LR",
      text: "La mejor barbería de Montecarlo sin dudas. La sucursal premium tiene una onda tremenda y la atención es impecable.",
      stars: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-[#131313] relative z-10 border-t border-gray-200 dark:border-[#1c1b1b]">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16 flex flex-col items-center md:items-start text-center md:text-left"
        >
           <div className="flex items-center gap-3 mb-4">
             <MessageSquare className="text-[#f2ca50] w-6 h-6" />
             <h2 className="font-montserrat font-black text-3xl text-black dark:text-white tracking-tight uppercase">
               Reseñas Reales
             </h2>
           </div>
           <p className="font-inter text-gray-600 dark:text-[#99907c] max-w-xl">
             Lo que dicen nuestros clientes en Google Maps. Cada corte es una firma de calidad.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white dark:bg-[#1c1b1b] p-8 rounded-[3px] border border-gray-200 dark:border-[#2a2a2a] relative"
            >
              <div className="flex gap-1 mb-4">
                 {[...Array(rev.stars)].map((_, sIdx) => (
                   <Star key={sIdx} size={16} className="text-[#f2ca50] fill-[#f2ca50]" />
                 ))}
              </div>
              <p className="font-inter text-gray-800 dark:text-[#e5e2e1] text-[15px] leading-relaxed mb-8 italic">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-3 absolute bottom-8">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-[#353534] flex items-center justify-center font-montserrat font-bold text-black dark:text-white text-sm">
                  {rev.initials}
                </div>
                <div>
                  <div className="font-montserrat font-bold text-black dark:text-white text-sm uppercase">{rev.name}</div>
                  <div className="font-inter text-gray-600 dark:text-[#99907c] text-xs">Cliente Verificado</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0e0e0e] border-t border-gray-200 dark:border-[#1c1b1b] py-12 px-6 md:px-12 relative z-10 w-full shrink-0">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="font-montserrat font-black text-[#f2ca50] text-xl tracking-tight uppercase">
            Cronos Bar-Ber
          </div>
          <div className="font-inter text-xs text-gray-600 dark:text-[#99907c] font-bold tracking-[0.15em] uppercase mt-1">
            © 2026 Cronos Bar-Ber. Precision & Style.
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 md:gap-16 font-inter text-[13px] font-bold tracking-[0.1em] uppercase text-gray-700 dark:text-[#d0c5af]">
          <div className="flex flex-col items-center sm:items-start gap-3">
             <span className="text-black dark:text-white border-b-2 border-[#00daf3] pb-1 mb-1 font-montserrat tracking-widest">Central</span>
             <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cronos_barber1/" className="flex items-center gap-2 hover:text-[#00daf3] transition-colors duration-300 hover:-translate-y-0.5 transform inline-block"><Instagram size={16} /> Instagram</a>
             <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100063809239885" className="flex items-center gap-2 hover:text-[#00daf3] transition-colors duration-300 hover:-translate-y-0.5 transform inline-block"><Facebook size={16} /> Facebook</a>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-3">
             <span className="text-black dark:text-white border-b-2 border-[#f2ca50] pb-1 mb-1 font-montserrat tracking-widest">Cronos 3</span>
             <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cronos.barber3/" className="flex items-center gap-2 hover:text-[#f2ca50] transition-colors duration-300 hover:-translate-y-0.5 transform inline-block"><Instagram size={16} /> Instagram</a>
          </div>
        </div>

        {/* Accessibility Toggle */}
        <button className="flex items-center gap-3 text-gray-700 dark:text-[#d0c5af] hover:text-[#f2ca50] transition-colors duration-300 group">
          <div className="p-2 rounded-full border border-transparent transition-all group-hover:scale-110">
            <Accessibility size={22} strokeWidth={1.5} />
          </div>
          <span className="font-inter text-[13px] font-bold tracking-[0.1em] uppercase hidden md:block mt-0.5">Accessibility</span>
        </button>

      </div>
    </footer>
  );
}
