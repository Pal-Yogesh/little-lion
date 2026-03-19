"use client";
import { motion } from 'motion/react';
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap,
  ArrowRight,
  MapPin,
  Clock,
  ExternalLink,
  Navigation,
} from 'lucide-react';
import { BookTourButton } from '@/components/BookTourModal';

const AboutUsPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-brand-lt/30 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand bg-white px-5 py-2 rounded-full mb-6 shadow-sm"
            >
              Our Story
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-black text-dark leading-tight mb-8"
            >
              The Best <span className="text-brand italic">Childcare</span> in Wahroonga
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-mid text-xl leading-relaxed font-medium"
            >
              Little Lion Wahroonga was born from a simple vision: to create a space where every child is seen, heard, and empowered to explore the world with confidence. We are proud to be the leading kindergarten in Wahroonga.
            </motion.p>
          </div>
        </div>
        
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-brand/5 -skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-brand/5 skew-x-12 -translate-x-1/2" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden border-8 border-brand-lt shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/mission/800/1000" 
                  alt="Our mission" 
                  className="w-full h-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand p-8 rounded-[2rem] text-white shadow-2xl max-w-[240px] hidden md:block">
                <Heart className="w-10 h-10 mb-4 fill-white" />
                <p className="font-bold text-lg leading-tight">Every child deserves a champion.</p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <div className="w-16 h-16 bg-brand-lt rounded-2xl flex items-center justify-center text-brand mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="font-display text-4xl font-black text-dark mb-4">Our Mission</h2>
                <p className="text-mid text-lg leading-relaxed">
                  To provide a high-quality, inclusive early learning environment that fosters curiosity, resilience, and a lifelong love for learning through play-based discovery and meaningful relationships.
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-brand-lt rounded-2xl flex items-center justify-center text-brand mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h2 className="font-display text-4xl font-black text-dark mb-4">Our Vision</h2>
                <p className="text-mid text-lg leading-relaxed">
                  To be the leading early learning centre in the North Shore, recognized for our innovative educational practices, exceptional care, and strong partnership with families and the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-lt/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black text-dark mb-4">Our Core Values</h2>
            <p className="text-mid text-lg max-w-2xl mx-auto">These principles guide everything we do, from our curriculum design to our daily interactions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Nurturing Care",
                desc: "We provide a warm, secure environment where every child feels loved and safe."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community",
                desc: "We believe in strong partnerships between educators, families, and children."
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Integrity",
                desc: "We uphold the highest standards of ethics, safety, and professional conduct."
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "Excellence",
                desc: "We are committed to continuous improvement and educational innovation."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-brand/5 border border-brand-lt hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-brand-lt rounded-2xl flex items-center justify-center text-brand mb-6">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-black text-dark mb-3">{value.title}</h3>
                <p className="text-mid text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-dark mb-6">Meet Our Dedicated Educators</h2>
              <p className="text-mid text-lg leading-relaxed">
                Our team is comprised of highly qualified, passionate professionals who are dedicated to early childhood education. With over 100 years of combined experience, they bring a wealth of knowledge and heart to our centre.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-brand-lt p-8 rounded-3xl flex-1 text-center">
                <div className="text-4xl font-black text-brand mb-2">25+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-soft">Expert Staff</div>
              </div>
              <div className="bg-brand-lt p-8 rounded-3xl flex-1 text-center">
                <div className="text-4xl font-black text-brand mb-2">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-soft">First Aid Trained</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Centre Director", image: "educator-1" },
              { name: "Michael Chen", role: "Educational Leader", image: "educator-2" },
              { name: "Emma Wilson", role: "Nursery Room Leader", image: "educator-3" },
              { name: "David Brown", role: "Preschool Teacher", image: "educator-4" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    src={`https://picsum.photos/seed/${member.image}/600/800`} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-xl font-black text-dark">{member.name}</h3>
                <p className="text-brand font-bold text-sm uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 bg-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">Quality You Can Trust</h2>
            <p className="text-white/60 text-lg">We are proud to meet and exceed national standards for early childhood education.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Award className="w-10 h-10" />,
                title: "NQS Meeting",
                desc: "Meeting all National Quality Standards as assessed by ACECQA."
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "CCS Approved",
                desc: "Fully registered for the Child Care Subsidy to support our families."
              },
              {
                icon: <GraduationCap className="w-10 h-10" />,
                title: "Preschool Program",
                desc: "Approved provider of the NSW Start Strong Preschool program."
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-brand mx-auto mb-8">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand rounded-full blur-[100px]" />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-brand-lt/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-dark mb-6">Visit Our Centre</h2>
              <p className="text-mid text-lg leading-relaxed mb-10">
                Conveniently located in the heart of Wahroonga, our centre is easily accessible for families across the North Shore. If you're searching for a "preschool near me", we invite you to come and see our beautiful learning spaces for yourself.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-soft mb-1">Address</div>
                    <div className="text-dark font-bold text-lg">1558 Pacific Hwy, Wahroonga NSW 2076</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-soft mb-1">Opening Hours</div>
                    <div className="text-dark font-bold text-lg">Monday – Friday: 7:00am – 6:00pm</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-video lg:aspect-square relative group">
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
                  <a href="#" className="bg-white px-4 py-2 rounded shadow-md text-[13px] font-medium text-[#1a73e8] flex items-center gap-2 hover:bg-gray-50 transition-colors">
                    Open in Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <a href="#" className="bg-brand text-white px-8 py-3 rounded-xl text-[15px] font-bold flex items-center gap-2 shadow-xl hover:bg-brand-dk transition-all hover:scale-105">
                    <Navigation className="w-4 h-4 fill-white" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand/30">
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-black mb-8">Ready to Join Our Family?</h2>
              <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
                Experience the Little Lion difference firsthand. Book a tour today and see where your child's journey begins.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <BookTourButton className="bg-white text-brand font-display font-black px-12 py-5 rounded-2xl hover:bg-brand-lt transition-all hover:scale-105 text-lg">
                  Book a Tour
                </BookTourButton>
                <a href="tel:0299792752" className="bg-brand-dk text-white font-display font-black px-12 py-5 rounded-2xl hover:bg-brand-dk/80 transition-all border-2 border-white/20 text-lg flex items-center justify-center gap-3">
                  Call Us Now <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
