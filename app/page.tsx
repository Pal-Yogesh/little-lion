"use client";
import { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ChevronDown, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Heart, 
  Leaf, 
  Sparkles,
  Calendar,
  ArrowRight,
  ExternalLink,
  Navigation,
  Maximize
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';
import { BookTourButton } from '@/components/BookTourModal';
import Image from 'next/image';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/images/1.JPG", "/images/2.JPG", "/images/3.JPG", "/images/4.JPG"];

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-lt/50 -skew-x-12 translate-x-1/4 hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ===== MOBILE HERO ===== */}
        <div className="lg:hidden py-8 sm:py-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand-lt border border-brand/20 text-brand text-[10px] font-extrabold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
          >
            <Sparkles className="w-3 h-3" />
            Enrolments Now Open for 2026
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-[2.1rem] sm:text-5xl font-black text-dark leading-[1.12] mb-4"
          >
            Where Little Learners <span className="text-brand">Grow, Play</span> & Shine
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-mid text-[15px] sm:text-base leading-relaxed mb-6 max-w-md"
          >
            We provide nurturing childcare services and play-based early learning in Wahroonga to help your child feel safe, confident, and excited to explore the world.
          </motion.p>

          {/* CTA row */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex items-center gap-5 mb-6"
          >
            <BookTourButton className="bg-brand text-white font-display font-black px-7 py-4 rounded-2xl shadow-xl shadow-brand/30 text-base shrink-0">
              Book a Tour
            </BookTourButton>
            <span className="text-sm font-bold text-dark leading-snug">
              <span className="text-brand font-black">CCS 3-Day Guarantee</span><br />for Families
            </span>
          </motion.div>

      
          {/* Divider */}
          <div className="h-px bg-brand-lt mb-5" />

          {/* Trust badges */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-y-4 gap-x-4 mb-5"
          >
            {[
              { icon: <Star className="w-5 h-5 fill-gold" />, bg: "bg-gold/10", color: "text-gold", label: <><div className="flex gap-0.5 mb-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-gold text-gold" />)}</div><div className="text-[11px] font-black text-dark">5.0 Google Rating</div></> },
              { icon: <Clock className="w-5 h-5" />, bg: "bg-brand-lt", color: "text-brand", label: <><div className="text-[10px] text-soft">Experience</div><div className="text-[12px] font-black text-dark">10+ Years</div></> },
              { icon: <ShieldCheck className="w-5 h-5" />, bg: "bg-brand/10", color: "text-brand", label: <><div className="text-[10px] text-soft">Approved</div><div className="text-[12px] font-black text-dark">CCS</div></> },
              { icon: <GraduationCap className="w-5 h-5" />, bg: "bg-brand-lt", color: "text-brand", label: <><div className="text-[10px] text-soft">Focus</div><div className="text-[12px] font-black text-dark">Quality</div></> },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-10 h-10 ${b.bg} rounded-full flex items-center justify-center ${b.color} shrink-0`}>{b.icon}</div>
                <div>{b.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="h-px bg-gray-300 mb-5" />

          {/* Government logos */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            <p className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-soft mb-4 text-center">
              Government Approved & Accredited
            </p>
            <div className="flex justify-center items-center gap-5">
              <Image src="/images1.png" width={200} height={80} alt="NSW Government" className="h-12 w-14" />
              <div className="w-px h-12 bg-gray-300" />
              <Image src="/image2.webp" width={200} height={80} alt="National Quality Standard" className="h-12 w-14" />
            </div>
          </motion.div>

              {/* Mobile image slider - after CTA like reference */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="relative -mx-4 sm:mx-0 mb-6 py-8 px-2"
          >
            <div className="relative sm:rounded-2xl overflow-hidden aspect-[16/9]">
              <AnimatePresence mode="wait">
                <motion.img key={`m-${currentSlide}`} src={slides[currentSlide]}
                  alt={`Little Lion centre ${currentSlide + 1}`}
                  className="w-full h-full object-cover absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }} referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
                  />
                ))}
              </div>
              {/* CCS offer floating badge */}
              <div className="absolute bottom-3 right-3 bg-white rounded-xl px-3 py-2 shadow-lg z-20 text-center">
                <Heart className="w-4 h-4 text-brand mx-auto mb-0.5" />
                <div className="font-display text-xs font-black text-brand leading-tight">CCS 3-Day</div>
                <div className="font-display text-[10px] font-black text-dark leading-tight">GUARANTEE</div>
                <div className="text-[8px] text-soft italic">*T&Cs Apply</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== DESKTOP HERO ===== */}
        <div className="hidden lg:grid grid-cols-2 gap-20 py-20 items-center">
          <div className="flex flex-col">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-brand-lt border border-brand/20 text-brand text-[11px] font-extrabold tracking-[0.2em] uppercase px-5 py-2 rounded-full w-fit mb-8"
            >
              <Sparkles className="w-3 h-3" />
              Enrolments Now Open for 2026
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-display text-7xl font-black text-dark leading-[1.05] mb-6"
            >
              Where Little Learners{" "}
              <span className="text-brand">Grow, Play</span> &{" "}
              <span className="relative inline-block">
                Shine
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-mid text-xl mb-8 max-w-lg leading-relaxed"
            >
              We provide nurturing childcare services and play-based early learning in Wahroonga to help your child feel safe, confident, and excited to explore the world.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex items-center gap-5 mb-10"
            >
              <BookTourButton className="bg-brand text-white font-display font-black px-10 py-5 rounded-2xl hover:bg-brand-dk transition-all hover:scale-105 shadow-xl shadow-brand/30 text-lg">
                Book a Tour
              </BookTourButton>
              <span className="text-base font-bold text-dark">
                <span className="text-brand font-black">CCS 3-Day Guarantee</span><br />for Families
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2"
            >
              {[
                { icon: <Star className="w-5 h-5 fill-gold" />, bg: "bg-gold/10", color: "text-gold", top: "5.0 Google Rating", bottom: <div className="flex gap-0.5 text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-gold" />)}</div> },
                { icon: <Clock className="w-5 h-5" />, bg: "bg-brand-lt", color: "text-brand", top: "Experience", bottom: "10+ Years" },
                { icon: <ShieldCheck className="w-5 h-5" />, bg: "bg-brand/10", color: "text-brand", top: "CCS Approved", bottom: "Govt. Subsidy" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-brand-lt px-4 py-2.5 rounded-xl shadow-sm shrink-0">
                  <div className={`w-8 h-8 ${b.bg} rounded-lg flex items-center justify-center ${b.color}`}>{b.icon}</div>
                  <div>
                    <div className="text-[10px] font-black text-dark leading-none mb-0.5">{b.top}</div>
                    <div className="text-[9px] font-bold text-soft uppercase tracking-widest leading-none">{b.bottom}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="pt-8 mt-8 border-t border-brand-lt"
            >
              <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-soft mb-5">
                Government Approved & Accredited
              </p>
              <div className="flex items-center gap-6">
                <Image src="/images1.png" width={200} height={80} alt="NSW Government" className="h-20 w-auto object-contain" />
                <div className="w-px h-10 bg-brand-lt" />
                <Image src="/image2.webp" width={200} height={80} alt="National Quality Standard" className="h-20 w-auto object-contain" />
              </div>
            </motion.div>
          </div>

          {/* Desktop slider */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }} className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand/10 border-4 border-brand-lt aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.img key={currentSlide} src={slides[currentSlide]}
                  alt={`Little Lion centre ${currentSlide + 1}`}
                  className="w-full h-full object-cover absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }} transition={{ duration: 0.7 }} referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${currentSlide === i ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -top-6 -right-6 z-20 bg-brand p-5 rounded-2xl shadow-2xl text-white border-4 border-white">
              <div className="font-display text-3xl font-black mb-0.5">10+</div>
              <div className="text-[9px] font-bold uppercase tracking-widest leading-tight opacity-90">Years of<br />Excellence</div>
            </div>
            {/* CCS floating badge */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-white rounded-2xl p-4 shadow-2xl border-4 border-brand-lt text-center">
              <Heart className="w-5 h-5 text-brand mx-auto mb-1" />
              <div className="font-display text-sm font-black text-brand leading-tight">CCS 3-Day</div>
              <div className="font-display text-xs font-black text-dark leading-tight">GUARANTEE</div>
              <div className="text-[8px] text-soft italic">*T&Cs Apply</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};





const Philosophy = () => {
  return (
    <section className="bg-white section-padding relative overflow-hidden" id="philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-[13px] font-black tracking-[0.1em] uppercase text-brand mb-4">Little Lion Early Learning Centre | Wahroonga</span>
            <h2 className="font-display text-5xl md:text-6xl font-black text-brand leading-tight mb-8">
              Childcare in Wahroonga
            </h2>

            <div className="inline-flex items-center gap-3 bg-brand-lt px-6 py-3 rounded-2xl mb-10 border border-brand/10">
              <span className="text-brand font-bold text-sm">Google Reviews</span>
              <span className="text-dark font-black text-lg">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                ))}
              </div>
            </div>
            
            <ul className="space-y-6 mb-12">
              {[
                "Keeping children safe always comes first. All of our team are committed to uphold the highest standards of child safety in our Wahroonga childcare centre.",
                "From the moment you step inside, you\u2019ll be part of a community where children feel safe, happy, and you will feel connected every day at the best preschool near me.",
                "Discover our centre that feels like home and where each day is exciting, from our nurturing nursery to our leading 2 year Preschool program. Your child deserves the best childcare in Wahroonga.",
                "Our experienced and passionate Educators are dedicated to helping children learn and grow in a welcoming and supportive environment. We are so proud of them and the amazing centre they have created."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand mt-2 shrink-0 shadow-lg shadow-brand/20 group-hover:scale-125 transition-transform" />
                  <p className="text-mid text-[15px] leading-relaxed font-medium">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mb-10">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.577907406213!2d151.1147683!3d-33.719875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a6088888888b%3A0x8888888888888888!2s1558%20Pacific%20Hwy%2C%20Wahroonga%20NSW%202076!5e1!3m2!1sen!2sau!4v1710150000000!5m2!1sen!2sau" 
                  width="100%" 
                  height="100%" 
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Little Lion Wahroonga Location"
                ></iframe>
                
                <div className="absolute top-4 left-4">
                  <a href="https://maps.app.goo.gl/XRdstVE3fLPopDrX8" target="_blank" rel="noopener noreferrer" className="bg-white px-4 py-2 rounded shadow-md text-[13px] font-medium text-[#1a73e8] flex items-center gap-2 hover:bg-gray-50 transition-colors">
                    Open in Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="absolute bottom-12 left-4 w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-lg hidden sm:block">
                  <img 
                    src="https://picsum.photos/seed/map-thumb/200/200" 
                    alt="Map view" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                  <a href="https://maps.app.goo.gl/XRdstVE3fLPopDrX8" target="_blank" rel="noopener noreferrer" className="bg-brand text-white px-8 py-3 rounded-xl text-[15px] font-bold flex items-center gap-2 shadow-xl hover:bg-brand-dk transition-all hover:scale-105">
                    <Navigation className="w-4 h-4 fill-white" />
                    Get Directions
                  </a>
                </div>

                <div className="absolute bottom-12 right-4">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors text-dark">
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-3 py-1 flex justify-end items-center gap-4 text-[10px] text-dark/60 border-t border-black/5">
                  <span>Keyboard shortcuts</span>
                  <span>Map Data</span>
                  <span>Terms</span>
                  <span>Report a map error</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 pl-4">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-brand-lt flex items-center justify-center text-brand shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-dark font-bold text-base">1558 Pacific Hwy, Wahroonga NSW 2076, Australia</span>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-brand-lt flex items-center justify-center text-brand shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-dark font-bold text-base">Mon to Fri 7am to 6pm</span>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-brand-lt flex items-center justify-center text-brand shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-brand font-black text-base">Limited Spaces Available</span>
              </div>

              <div className="pt-4">
                <BookTourButton className="inline-block bg-brand text-white font-display font-black px-12 py-5 rounded-2xl hover:bg-brand-dk transition-all shadow-xl shadow-brand/20 text-lg uppercase tracking-wider">
                  Book a Tour
                </BookTourButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const [aboutSlide, setAboutSlide] = useState(0);
  const aboutImages = ["/images/1.JPG", "/images/2.JPG", "/images/3.JPG", "/images/4.JPG"];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setAboutSlide((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [aboutImages.length]);

  return (
    <section className="bg-brand-lt/30 section-padding relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand bg-white px-5 py-2 rounded-full mb-6 shadow-sm">Little Lion Early Learning Centre | Wahroonga</span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-dark leading-[1.1] mb-8">
              A Place Where <span className="text-brand italic">Magic</span> Happens Every Day
            </h2>
            <div className="space-y-6 text-mid text-lg leading-relaxed">
              <p>
                Founded on the belief that early childhood is the most critical period for development, Little Lion Wahroonga provides a sanctuary for learning, discovery, and growth. As a premier provider of childcare in Wahroonga, we focus on holistic development.
              </p>
              <p>
                Our state-of-the-art centre is designed to stimulate young minds while providing the warmth and security of a second home. We don&apos;t just &quot;watch&quot; children; we partner with families to nurture the unique potential within every child, making us the top choice for a preschool near me.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8 mb-10">
              <div>
                <div className="text-3xl font-black text-brand mb-1">150+</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-soft">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand mb-1">25+</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-soft">Expert Staff</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand mb-1">12</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-soft">Learning Zones</div>
              </div>
            </div>

            <BookTourButton className="inline-block bg-brand text-white font-display font-black px-10 py-4 rounded-xl hover:bg-brand-dk transition-all shadow-lg shadow-brand/20">
              Book a Tour
            </BookTourButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={aboutSlide}
                  src={aboutImages[aboutSlide]}
                  alt={`Little Lion centre ${aboutSlide + 1}`}
                  className="w-full h-full object-cover absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Slide dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {aboutImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setAboutSlide(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${aboutSlide === i ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-lt rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Blogs = () => {
  const posts = [
    {
      title: "The Importance of Sensory Play in Early Development",
      category: "Learning",
      date: "March 10, 2024",
      image: "/images/sensory.JPG",
      excerpt: "Discover how sensory activities help build nerve connections in the brain\u2019s pathways..."
    },
    {
      title: "Transitioning Your Child to Preschool: A Parent's Guide",
      category: "Parenting",
      date: "March 05, 2024",
      image: "/images/guide.jpeg",
      excerpt: "Tips and tricks to make the first week at Little Lion a smooth and happy experience for everyone."
    },
    {
      title: "Healthy Lunchbox Ideas Your Kids Will Actually Love",
      category: "Nutrition",
      date: "February 28, 2024",
      image: "/images/food.JPG",
      excerpt: "Nutritious, easy-to-prep meals that satisfy even the pickiest eaters while fueling their day."
    }
  ];

  return (
    <section className="bg-white section-padding" id="blogs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand bg-brand-lt px-5 py-2 rounded-full mb-6">News & Insights</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-dark leading-tight">
              Latest from the <span className="text-brand">Little Lion</span> Blog
            </h2>
          </div>
          <button className="flex items-center gap-2 text-brand font-bold hover:gap-4 transition-all group">
            View All Posts <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-[2rem] overflow-hidden mb-6 relative aspect-[3/2]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-brand">
                  {post.category}
                </div>
              </div>
              <div className="px-2">
                <div className="text-soft text-xs font-bold uppercase tracking-widest mb-3">{post.date}</div>
                <h3 className="font-display text-xl font-black text-dark mb-4 group-hover:text-brand transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-mid text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-brand text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const [activeRoom, setActiveRoom] = useState(0);
  const rooms = [
    {
      id: "cubs",
      age: "0 – 2 Years",
      title: "Cubs Room",
      desc: "A warm, gentle haven designed around each baby's individual rhythms. Soft lighting and sensory materials nurture every milestone.",
      img: "/images/cubs.JPG",
      gradient: "from-sky-600/90 to-blue-900/90"
    },
    {
      id: "simba",
      age: "2 – 3 Years",
      title: "Simba Room",
      desc: "Built for the language explosion years — curiosity-led discovery, emerging friendships, and boundless imagination.",
      img: "/images/simba.jpeg",
      gradient: "from-amber-500/90 to-orange-800/90"
    },
    {
      id: "leo",
      age: "3 – 4 Years",
      title: "Leo Room",
      desc: "Imagination and intellect grow together through creative arts, early STEM, and literacy adventures.",
      img: "/images/lio.JPG",
      gradient: "from-violet-500/90 to-purple-900/90"
    },
    {
      id: "lion",
      age: "5 – 6 Years",
      title: "Lion Room",
      desc: "School-readiness in a joyful, structured setting. Literacy, numeracy, leadership, and confidence.",
      img: "/images/lion.JPG",
      gradient: "from-brand/90 to-brand-dk/90"
    }
  ];

  return (
    <section id="programs" className="bg-alt section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand bg-brand-lt px-5 py-2 rounded-full mb-6">
            Our Learning Rooms
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-dark mb-6">
            Tailored for Every{" "}
            <span className="text-brand">Developmental Stage</span>
          </h2>
          <p className="text-mid text-lg max-w-2xl mx-auto leading-relaxed">
            Four specialist rooms, each designed to inspire curiosity and support the unique needs of your child&apos;s age group.
          </p>
        </motion.div>

        {/* Desktop: Expanding accordion panels */}
        <div className="hidden lg:block">
          <div className="flex gap-3 h-[520px]">
            {rooms.map((room, i) => (
              <motion.div
                key={room.id}
                className="relative rounded-3xl overflow-hidden cursor-pointer"
                animate={{ flex: activeRoom === i ? 4 : 1 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                onHoverStart={() => setActiveRoom(i)}
                onClick={() => setActiveRoom(i)}
              >
                <img
                  src={room.img}
                  alt={room.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${room.gradient} transition-opacity duration-500 ${activeRoom === i ? "opacity-60" : "opacity-80"}`} />

                {/* Collapsed state */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeRoom === i ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                  <span className="font-display text-xl font-black text-white -rotate-90 whitespace-nowrap tracking-wide">
                    {room.title}
                  </span>
                </div>

                {/* Expanded state */}
                <AnimatePresence>
                  {activeRoom === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="absolute bottom-0 left-0 right-0 p-8"
                    >
                      <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] bg-white/20 text-white backdrop-blur-md border border-white/20 mb-4">
                        {room.age}
                      </span>
                      <h3 className="font-display text-3xl font-black text-white mb-3">
                        {room.title}
                      </h3>
                      <p className="text-white/85 text-sm leading-relaxed max-w-md mb-5">
                        {room.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {rooms.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveRoom(i)}
                className={`h-2 rounded-full transition-all duration-500 ${activeRoom === i ? "w-8 bg-brand" : "w-2 bg-brand/25 hover:bg-brand/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Stacked image cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-5">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative rounded-3xl overflow-hidden h-80 group"
            >
              <img
                src={room.img}
                alt={room.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${room.gradient} opacity-70`} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.15em] bg-white/20 text-white backdrop-blur-md border border-white/20 mb-3">
                  {room.age}
                </span>
                <h3 className="font-display text-2xl font-black text-white mb-2">{room.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{room.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const MarqueeRow: React.FC<{ images: { id: number; src: string; title: string; desc: string }[], reverse?: boolean, speed?: number }> = ({ images, reverse = false, speed = 40 }) => {
  if (images.length === 0) return null;
  const repeatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="flex overflow-hidden group py-2">
      <motion.div
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-nowrap gap-4 md:gap-6"
      >
        {repeatedImages.map((img, idx) => (
          <div
            key={`${img.id}-${idx}`}
            className="relative flex-none w-[260px] md:w-[400px] aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-white shadow-xl shadow-brand/5 group/item"
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 className="text-white font-display font-black text-lg mb-1">{img.title}</h4>
              <p className="text-white/80 text-[10px] leading-relaxed font-medium">{img.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const CentreExperience = () => {
  const [activeZone, setActiveZone] = useState('all');

  const zones = [
    { id: 'all', label: 'Full Tour' },
    { id: 'indoor', label: 'Indoor Discovery' },
    { id: 'outdoor', label: 'Outdoor Exploration' },
    { id: 'nurturing', label: 'Nurturing Spaces' },
    { id: 'social', label: 'Social & Dining' }
  ];

  const images = [
    { id: 1, zone: 'indoor', src: '/zones/1.JPG', title: 'STEM Discovery Lab', desc: 'Where early science and math concepts come to life through hands-on play.' },
    { id: 2, zone: 'outdoor', src: '/zones/2.JPG', title: 'Sustainable Garden', desc: 'Children learn to plant, grow, and care for our vegetable patch.' },
    { id: 3, zone: 'nurturing', src: '/zones/3.jpeg', title: 'Reading Nook', desc: 'A quiet, cozy space for storytelling and emotional reflection.' },
    { id: 4, zone: 'social', src: '/zones/4.JPG', title: 'Shared Dining', desc: 'Nutritious meals enjoyed together to build social bonds.' },
    { id: 5, zone: 'indoor', src: '/zones/5.JPG', title: 'Creative Arts Studio', desc: 'Expressing imagination through paint, clay, and mixed media.' },
    { id: 6, zone: 'outdoor', src: '/zones/6.JPG', title: 'Adventure Playground', desc: 'Building gross motor skills and confidence in a safe outdoor setting.' },
    { id: 7, zone: 'nurturing', src: '/zones/7.jpg', title: 'Restful Sleep Room', desc: 'Individual sleep rhythms respected in a calm, monitored environment.' },
    { id: 8, zone: 'indoor', src: '/zones/8.JPG', title: 'Construction Zone', desc: 'Engineering and spatial awareness through block play.' },
    { id: 9, zone: 'social', src: '/zones/9.jpeg', title: 'Community Circle', desc: 'Daily morning meetings to build a sense of belonging.' },
    { id: 10, zone: 'outdoor', src: '/zones/10.JPG', title: 'Water Play Station', desc: 'Sensory exploration and early physics with our water features.' },
    { id: 11, zone: 'indoor', src: '/zones/11.JPG', title: 'Literacy Corner', desc: 'Building a love for language and phonics through interactive play.' },
    { id: 12, zone: 'nurturing', src: '/zones/12.JPG', title: 'Sensory Room', desc: 'Calming lights and textures for emotional regulation.' },
  ];

  const filteredImages = activeZone === 'all' ? images : images.filter(img => img.zone === activeZone);
  const row1 = filteredImages.filter((_, i) => i % 2 === 0);
  const row2 = filteredImages.filter((_, i) => i % 2 !== 0);

  return (
    <section id="experience" className="bg-white section-padding overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand bg-brand-lt px-5 py-2 rounded-full mb-6"
          >
            Centre Experience
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-black text-dark mb-8"
          >
            Where Little Moments Become <span className="text-brand">Big Milestones</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-mid max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Gentle, nurturing childcare in Wahroonga — a calm and welcoming space where curiosity is encouraged, confidence grows naturally, and every child is supported with warmth, care, and genuine connection each day.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone.id)}
              className={`px-8 py-3.5 rounded-2xl text-xs font-black tracking-widest uppercase transition-all duration-300 border-2 ${
                activeZone === zone.id 
                  ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20' 
                  : 'bg-white border-brand-lt text-soft hover:border-brand/30 hover:text-brand'
              }`}
            >
              {zone.label}
            </button>
          ))}
        </div>

        <div className="space-y-2 md:space-y-6 -mx-4 sm:-mx-6 lg:-mx-8">
          <MarqueeRow key={`row1-${activeZone}`} images={row1} speed={50} />
          <MarqueeRow key={`row2-${activeZone}`} images={row2} speed={60} reverse />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <BookTourButton className="inline-flex items-center gap-3 bg-brand text-white px-10 py-5 rounded-2xl font-display font-black text-lg hover:bg-brand-dk transition-all hover:scale-105 shadow-xl shadow-brand/20 group">
            <Sparkles className="w-6 h-6" />
            <span>Experience it in person</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </BookTourButton>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: <GraduationCap className="w-7 h-7" />, title: "Qualified Educators", desc: "Cert III minimum across all staff — experienced, genuinely passionate, and dedicated.", accent: "from-brand/20 to-brand-lt" },
    { icon: <BookOpen className="w-7 h-7" />, title: "School Readiness", desc: "We prepare children with the skills and independence needed for a smooth transition.", accent: "from-brand-lt to-brand/10" },
    { icon: <Heart className="w-7 h-7" />, title: "Quality Care", desc: "Our CCS 3-Day Guarantee and full CCS approval make exceptional learning accessible.", accent: "from-brand/20 to-brand-lt" },
    { icon: <Sparkles className="w-7 h-7" />, title: "Parent App", desc: "Real-time photos, meal logs, and daily observations via the Xplor parent app.", accent: "from-brand-lt to-brand/10" },
    { icon: <Users className="w-7 h-7" />, title: "Familiar Faces", desc: "Low staff turnover means your child bonds with the same caring educators every day.", accent: "from-brand/20 to-brand-lt" },
    { icon: <Leaf className="w-7 h-7" />, title: "Outdoor Spaces", desc: "Spacious sustainable gardens where children explore nature and move freely.", accent: "from-brand-lt to-brand/10" }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-brand-lt/30 to-white section-padding relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand bg-brand-lt px-5 py-2 rounded-full mb-6">
            Why Little Lion
          </span>
          <h2 className="font-display text-4xl md:text-5xl  font-black text-dark mb-6">
            Why Parents{" "}
            <span className="text-brand relative">
              Trust Us
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-brand/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
            </span>
          </h2>
          <p className="text-mid text-lg max-w-2xl mx-auto leading-relaxed">
            We believe every North Shore family deserves an early learning experience that is purposeful, personal, and exceptional.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group cursor-default"
            >
              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-brand/10 rounded-3xl p-8 lg:p-10 h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand/10 hover:border-brand/25">
                {/* Gradient accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`} />

                {/* Floating number */}
                <span className="absolute top-6 right-8 font-display text-7xl font-black text-brand/[0.04] group-hover:text-brand/[0.08] transition-colors duration-500 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-lt to-brand/10 group-hover:opacity-0 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <span className="relative z-10 text-brand group-hover:text-white transition-colors duration-500">
                    {f.icon}
                  </span>
                </div>

                {/* Content */}
                <h4 className="font-display text-xl lg:text-2xl font-black text-dark mb-3 group-hover:text-brand-dk transition-colors duration-300">
                  {f.title}
                </h4>
                <p className="text-soft leading-relaxed text-[15px]">{f.desc}</p>

                {/* Bottom decorative line */}
                <div className="mt-6 h-0.5 w-12 bg-brand/20 rounded-full group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const OffersSection = () => {
  return (
    <section id="offers" className="bg-white section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand bg-brand-lt px-5 py-2 rounded-full mb-6">Limited Time</span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-dark leading-tight">
            Exclusive <span className="text-brand">Enrolment Offers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10">
              <span className="inline-block text-[10px] font-extrabold tracking-[0.2em] uppercase bg-white/20 px-4 py-1.5 rounded-full mb-6">Financial Support</span>
              <h3 className="font-display text-3xl font-black mb-6">Exceptional Care Made Affordable</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                The Child Care Subsidy (CCS) can significantly reduce your out-of-pocket costs. Most families qualify for 50\u201390% off.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { t: "Check Eligibility", d: "Log into MyGov for your CCS entitlement." },
                  { t: "Enrol with Us", d: "Confirm your spot and provide CRN details." },
                  { t: "Automatic Savings", d: "Subsidy applied directly to your account." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">{i+1}</div>
                    <div>
                      <h4 className="text-white font-bold text-sm leading-tight">{step.t}</h4>
                      <p className="text-white/60 text-xs mt-1">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-dark relative z-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-soft font-bold text-xs uppercase tracking-wider">CCS Subsidy</span>
                <span className="text-brand font-black text-xl">Up to 90% Off</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-soft font-bold text-xs uppercase tracking-wider">Bonus</span>
                <span className="text-gold font-black text-xl">CCS 3-Day Guarantee</span>
              </div>
              <BookTourButton className="block w-full bg-brand text-white font-display font-black text-center py-4 rounded-xl hover:bg-brand-dk transition-all text-sm">
                Claim CCS Offer
              </BookTourButton>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-lt rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between border-2 border-brand/5"
          >
            <div className="relative z-10">
              <span className="inline-block text-[10px] font-extrabold tracking-[0.2em] uppercase text-brand bg-white px-4 py-1.5 rounded-full mb-6 shadow-sm">Enrolment Bonus</span>
              <h3 className="font-display text-3xl font-black text-dark mb-6">Get a $600 Credit Towards Fees</h3>
              <p className="text-soft text-sm mb-8 leading-relaxed">
                Secure your 2026 enrolment today and receive a $600 credit applied to your account.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Available for all new 2026 enrolments",
                  "Released after your first 12 weeks",
                  "Applied as $100 per fortnight credit",
                  "Combinable with all other offers"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-dark font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center relative z-10 shadow-xl shadow-brand/5 border border-brand/10">
              <div className="text-brand font-display font-black text-6xl mb-2">$600</div>
              <div className="text-dark font-display font-black text-sm uppercase tracking-widest mb-6">Enrolment Credit</div>
              <BookTourButton className="block w-full bg-brand text-white font-display font-black text-center py-4 rounded-xl hover:bg-brand-dk transition-all text-sm">
                Secure $600 Credit
              </BookTourButton>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white font-display font-black text-[10px] rotate-12 shadow-lg border-2 border-white">
                Limited!
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FlexibleFamilies = () => {
  return (
    <section className="bg-white section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img src="/images/modern-family.JPG" alt="Happy family" className="w-full h-full object-cover aspect-[4/5]" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-brand-lt hidden md:flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-lt rounded-2xl flex items-center justify-center text-brand">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-black text-dark">7am – 6pm</div>
                <div className="text-[10px] font-bold text-soft uppercase tracking-widest">Extended Hours</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand bg-brand-lt px-5 py-2 rounded-full mb-6">For Busy Parents</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-dark leading-tight mb-8">
              Designed for the <span className="text-brand">Modern Family</span>
            </h2>
            <p className="text-mid text-lg mb-10 leading-relaxed">
              We know that balancing work and family is a juggle. Our centre is built to make your life easier, providing complete peace of mind while you&apos;re at work.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { t: "Extended Hours", d: "7:00am to 6:00pm to suit your commute.", icon: <Clock className="w-5 h-5" /> },
                { t: "All-Inclusive", d: "Nutritious meals, nappies, and wipes provided.", icon: <Heart className="w-5 h-5" /> },
                { t: "Xplor App", d: "Real-time updates and photos throughout the day.", icon: <Sparkles className="w-5 h-5" /> },
                { t: "Onsite Parking", d: "Easy, stress-free drop-offs and pick-ups.", icon: <MapPin className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-lt flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg mb-1">{item.t}</h4>
                    <p className="text-soft text-sm leading-relaxed font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <BookTourButton className="inline-block bg-brand text-white font-display font-black px-10 py-5 rounded-2xl hover:bg-brand-dk transition-all shadow-xl shadow-brand/20 text-lg">
              Secure Your Spot
            </BookTourButton>
          </div>
        </div>
      </div>
    </section>
  );
};

const Safety = () => {
  return (
    <section className="bg-dark section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-3xl overflow-hidden h-[500px]">
            <img src="/images/safesecure.JPG" alt="Safety at Little Lion" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand bg-brand/10 border border-brand/25 px-4 py-1.5 rounded-full mb-4">Safe & Secure</span>
            <h2 className="font-display text-4xl font-black text-white mb-6">A <span className="text-brand">Safe & Secure</span> Environment</h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Your child&apos;s wellbeing is our highest priority at Little Lion Wahroonga. Every system, every person, and every space has been designed with child safety at the centre.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Secure gated entry and CCTV-monitored premises",
                "Strict hygiene and cleanliness standards",
                "Qualified, police-checked, first-aid trained educators",
                "Child-safe indoor and outdoor play environments",
                "Close supervision maintained at all times",
                "Emergency protocols and safety drills practiced"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-6 h-6 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center text-brand shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="bg-brand/10 border border-brand/20 rounded-2xl p-6">
              <p className="text-white/70 italic text-sm leading-relaxed">
                &quot;Because nothing matters more than your child&apos;s safety \u2014 and your peace of mind.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name:"Sreenesh S Nambiar",
      initial: "S",
      location: "Wahroonga",
      text: "My son tried several childcare and I would say this one is the best childcare in and around Hornsby area . They take proper care  and have proper safety protocols in place.  First day itself my child got settled . They even gave my son a quick shower in warm water when he was not settled and made him feel relaxed . I do really appreciate it . A great shout out to Yeene , Noor and team at Little Lion."
    },
    {
      name: "Du Ethan",
      initial: "D",
      location: "Turramurra",
      text: "My son is having a great time at Little Lion Wahroonga center. The center manager Sam is very responsible, the educators Cathy and Karen are very friendly, toys are new and clean, and he is happy every time when we pick up him. He even starts eating and brush teeth by himself after going to the center.."
    },
    {
      name: "Maggie Wei",
      initial: "M",
      location: "Hornsby",
      text: "Very happy with the experience so far! We have a 10 month old going two days a week and he is having so much fun and comes home happy and rested. Great staff who are attentive, constantly updates us and really cares about their well-being."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand bg-brand-lt px-4 py-1.5 rounded-full mb-4">What Parents Say</span>
          <h2 className="font-display text-4xl font-black text-dark mb-4">Real Stories from the <span className="text-brand">Wahroonga Community</span></h2>
          <p className="text-mid max-w-2xl mx-auto">Don&apos;t just take our word for it hear from the families who trust us with their most precious people every day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-8 shadow-brand">
              <div className="flex gap-1 text-gold mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold" />)}
              </div>
              <p className="text-mid text-sm italic leading-relaxed mb-8">&quot;{r.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center font-display font-black text-white">
                  {r.initial}
                </div>
                <div>
                  <div className="font-display font-extrabold text-dark text-sm">{r.name}</div>
                  <div className="text-[11px] text-soft">Google Review {r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookTour = () => {
  return (
    <section id="tour" className="bg-alt section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand bg-brand-lt px-4 py-1.5 rounded-full mb-4">Book a Tour</span>
            <h2 className="font-display text-4xl font-black text-dark mb-4">Ready to Give Your Child a <span className="text-brand">Joyful Start?</span></h2>
            <p className="text-mid text-lg mb-10 leading-relaxed">
              Join a childcare centre where children learn, explore, and grow every day. Book your private tour and experience the warmth of Little Lion Wahroonga for yourself.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { n: 1, t: "Choose a preferred time", d: "Pick a morning or afternoon that suits your schedule" },
                { n: 2, t: "Meet our Team", d: "Ask every question \u2014 our team will personally show you around" },
                { n: 3, t: "Explore our spaces", d: "See the rooms, the garden, and picture your child thriving here" }
              ].map((step) => (
                <div key={step.n} className="bg-white border border-border rounded-2xl p-5 flex gap-5 items-start shadow-brand">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center font-display font-black text-white shrink-0">
                    {step.n}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-dark text-base mb-1">{step.t}</h4>
                    <p className="text-mid text-sm">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:0299792752" className="bg-brand text-white font-display font-bold px-8 py-4 rounded-lg hover:bg-brand-dk transition-colors">
                 Book a Tour
              </a>
              <button className="border-2 border-brand text-brand font-display font-bold px-8 py-4 rounded-lg hover:bg-brand hover:text-white transition-all">
                Join the Waitlist
              </button>
            </div>
            <p className="text-xs text-soft mt-6">Mon - Fri (7:00am - 6:00pm)</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border-2 border-border shadow-brand h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.356!2d151.11138!3d-33.72714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a3b9c4a0b0e5%3A0xe3c6f5e2a4d8b7f1!2s1558%20Pacific%20Hwy%2C%20Wahroonga%20NSW%202076!5e0!3m2!1sen!2sau!4v1700000000000"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Little Lion location map"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <MapPin className="w-5 h-5" />, label: "Address", val: "1558 Pacific Highway, Wahroonga NSW 2076" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", val: "(02) 9979 2752" },
                { icon: <Mail className="w-5 h-5" />, label: "Email", val: "wahroonga@littlelioneducation.com.au" },
                { icon: <Clock className="w-5 h-5" />, label: "Hours", val: "Mon \u2013 Fri \u00B7 7:00am \u2013 6:00pm" },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-border rounded-2xl p-5 shadow-brand">
                  <div className="w-10 h-10 rounded-xl bg-brand-lt flex items-center justify-center text-brand mb-4">
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-brand mb-1">{item.label}</div>
                  <div className="text-[12px] text-mid font-semibold leading-snug">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What are your operating hours?", a: "We are open Monday to Friday from 7:00am to 6:00pm, accommodating early starts and late finishes for working North Shore families." },
    { q: "Do you offer the Child Care Subsidy (CCS)?", a: "Yes — Little Lion Wahroonga is a fully CCS-approved childcare centre. Most eligible families can receive 50–90% off their daily fee through MyGov. We also offer a CCS 3-Day Guarantee for families." },
    { q: "What ages do you cater for?", a: "We care for children from 6 weeks to 6 years across four dedicated rooms: Cubs (0\u20132), Simba (2\u20133), Leo (3\u20134), and Lion (5\u20136 years)." },
    { q: "What is your staff-to-child ratio?", a: "We strictly adhere to and often exceed the National Quality Standard ratios to ensure every child receives personalised attention, care, and safety throughout the day." },
    { q: "Are meals provided?", a: "Yes \u2014 we provide 5 freshly prepared, nutritious meals throughout the day including breakfast, morning tea, lunch, afternoon tea, and a late snack. All dietary requirements and allergies are fully catered for." },
    { q: "How do I stay updated on my child\u2019s day?", a: "Through the Xplor parent app, you\u2019ll receive real-time photos, meal logs, sleep updates, and learning observations throughout the day \u2014 so you\u2019re always connected." },
    { q: "Is there parking at the centre?", a: "Yes, we have onsite parking available for drop-off and pick-up. The centre is also approximately 6 minutes from Warrawee Station on the T1 North Shore Line." }
  ];

  return (
    <section id="faq" className="bg-white section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand bg-brand-lt px-4 py-1.5 rounded-full mb-4">FAQ</span>
          <h2 className="font-display text-4xl font-black text-dark mb-4">Everything You Need to <span className="text-brand">Know</span></h2>
          <p className="text-mid max-w-md mx-auto">Everything you need to know about joining the Little Lion family in Wahroonga.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-alt transition-colors"
              >
                <span className="font-display font-bold text-dark text-base">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-mid leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-sm text-mid">
          Still have questions? <a href="tel:0299792752" className="text-brand font-bold hover:underline">Give us a call at (02) 9979 2752</a>
        </p>
      </div>
    </section>
  );
};

const StickyCTA = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60]"
    >
      <BookTourButton
        className="bg-brand text-white px-4 md:px-10 py-3 md:py-5 rounded-full font-display font-black shadow-2xl flex items-center gap-2 md:gap-3 hover:bg-brand-dk transition-all hover:scale-105 group border-4 border-white"
      >
        <Calendar className="w-4 h-4 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
        <span>Book a Tour</span>
      </BookTourButton>
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Programs />
      <AboutUs />
      <CentreExperience />
      <WhyChooseUs />
      <OffersSection />
      <FlexibleFamilies />
      <StickyCTA />
      <Safety />
      <Testimonials />
      <BookTour />
      {/* <Blogs /> */}
      <FAQ />
    </>
  );
}
