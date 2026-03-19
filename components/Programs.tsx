"use client";
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Brain, 
  Music, 
  Leaf,
} from 'lucide-react';
import { BookTourButton } from '@/components/BookTourModal';

const ProgramsPage = () => {
  const rooms = [
    {
      id: "cubs",
      age: "0 – 2 Years",
      title: "Cubs Room (Nursery)",
      subtitle: "Nurturing Childcare in Wahroonga for Infants",
      desc: "Our Cubs Room is a warm, gentle haven designed around each baby's individual rhythms. We provide a secure environment where infants can explore, play, and grow at their own pace.",
      img: "https://picsum.photos/seed/cubs-nursery/800/600",
      color: "bg-blue-600",
      lightColor: "bg-blue-50",
      programs: [
        { title: "Sensory Exploration", desc: "Engaging the five senses through soft play, textures, and gentle sounds." },
        { title: "Individual Care Routines", desc: "Personalised feeding and sleeping schedules that mirror home life." },
        { title: "Tummy Time & Motor Skills", desc: "Supporting physical milestones in a safe, carpeted environment." },
        { title: "Language Immersion", desc: "Daily reading, singing, and one-on-one interaction to spark early communication." }
      ]
    },
    {
      id: "simba",
      age: "2 – 3 Years",
      title: "Simba Room (Toddlers)",
      subtitle: "Active Early Learning & Toddler Care",
      desc: "Built for the language explosion years, the Simba Room encourages curiosity-led discovery and the formation of first friendships. It's the perfect step for those seeking a preschool near me.",
      img: "https://picsum.photos/seed/simba-toddler/800/600",
      color: "bg-orange-600",
      lightColor: "bg-orange-50",
      programs: [
        { title: "Social Development", desc: "Learning to share, take turns, and interact positively with peers." },
        { title: "Creative Expression", desc: "Hands-on art, messy play, and music sessions to build confidence." },
        { title: "Self-Help Skills", desc: "Encouraging independence through toilet training support and self-feeding." },
        { title: "Outdoor Discovery", desc: "Daily play in our secure garden to develop gross motor skills." }
      ]
    },
    {
      id: "leo",
      age: "3 – 4 Years",
      title: "Leo Room (Junior Preschool)",
      subtitle: "Foundational Kindergarten in Wahroonga",
      desc: "Imagination and intellect grow together in the Leo Room. We introduce more structured learning through creative arts, early STEM concepts, and literacy foundations.",
      img: "https://picsum.photos/seed/leo-preschool/800/600",
      color: "bg-purple-600",
      lightColor: "bg-purple-50",
      programs: [
        { title: "Early Literacy & Numeracy", desc: "Introduction to letter sounds, counting, and basic mathematical concepts." },
        { title: "STEM Projects", desc: "Simple experiments and building tasks to foster critical thinking." },
        { title: "Emotional Intelligence", desc: "Helping children identify and manage their feelings and empathise with others." },
        { title: "Group Projects", desc: "Collaborative activities that build teamwork and communication skills." }
      ]
    },
    {
      id: "lion",
      age: "4 – 6 Years",
      title: "Lion Room (Preschool & School Readiness)",
      subtitle: "Premier School Readiness Program",
      desc: "Our flagship Lion Room prepares children for the transition to primary school. This is the ultimate kindergarten in Wahroonga experience, focusing on academic and social readiness.",
      img: "https://picsum.photos/seed/lion-readiness/800/600",
      color: "bg-brand",
      lightColor: "bg-brand-lt/30",
      programs: [
        { title: "Phonics & Writing", desc: "Comprehensive literacy program to prepare for Kindergarten reading and writing." },
        { title: "Advanced Mathematics", desc: "Problem-solving, patterns, and logical reasoning through play." },
        { title: "Social Maturity", desc: "Developing the focus, resilience, and independence needed for big school." },
        { title: "Community Connection", desc: "Excursions and visits to local Wahroonga landmarks and schools." }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-brand-lt/30 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand bg-white px-5 py-2 rounded-full mb-6 shadow-sm"
            >
              Our Programs
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-black text-dark leading-tight mb-8"
            >
              Leading <span className="text-brand italic">Early Learning</span> in Wahroonga
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-mid text-xl leading-relaxed font-medium"
            >
              From nurturing nursery care to comprehensive school readiness, our programs are designed to give your child the best start in life.
            </motion.p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-brand/5 -skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-brand/5 skew-x-12 -translate-x-1/2" />
      </section>

      {/* Room Sections */}
      {rooms.map((room, index) => (
        <section 
          key={room.id} 
          id={room.id}
          className={`py-24 ${index % 2 === 1 ? 'bg-white' : 'bg-brand-lt/10'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className={`${room.color} text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest`}>
                    {room.age}
                  </span>
                  <div className="h-px flex-1 bg-brand-lt" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-black text-dark mb-4 leading-tight">
                  {room.title}
                </h2>
                <h3 className="text-brand font-bold text-xl mb-6 italic">{room.subtitle}</h3>
                <p className="text-mid text-lg leading-relaxed mb-10">
                  {room.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {room.programs.map((prog, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-lt hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-lg ${room.lightColor} flex items-center justify-center text-brand`}>
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-dark text-sm">{prog.title}</h4>
                      </div>
                      <p className="text-soft text-xs leading-relaxed">{prog.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/3]">
                  <img 
                    src={room.img} 
                    alt={room.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className={`absolute -top-10 ${index % 2 === 0 ? '-right-10' : '-left-10'} w-40 h-40 ${room.color} opacity-10 rounded-full blur-3xl`} />
                <div className={`absolute -bottom-10 ${index % 2 === 0 ? '-left-10' : '-right-10'} w-40 h-40 ${room.color} opacity-10 rounded-full blur-3xl`} />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Curriculum Highlights */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand mb-6">Our Approach</span>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-8">Holistic <span className="text-brand">Learning</span> Pillars</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">We go beyond standard childcare in Wahroonga by integrating these core pillars into every room's daily routine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "Cognitive Growth", desc: "Developing critical thinking and problem-solving skills through play." },
              { icon: Heart, title: "Social-Emotional", desc: "Building resilience, empathy, and strong interpersonal connections." },
              { icon: Music, title: "Creative Arts", desc: "Expressing individuality through music, movement, and visual arts." },
              { icon: Leaf, title: "Sustainability", desc: "Learning to care for our environment in our beautiful garden spaces." }
            ].map((pillar, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-brand/20 flex items-center justify-center text-brand mb-8 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-black mb-4">{pillar.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-lt/30 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-black text-dark mb-8 leading-tight">
                Ready to Start Your <br />
                <span className="text-brand italic">Little Lion</span> Journey?
              </h2>
              <p className="text-mid text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Experience the best kindergarten in Wahroonga first-hand. Book a tour today and meet our passionate educators.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <BookTourButton className="bg-brand text-white font-display font-black px-12 py-5 rounded-2xl hover:bg-brand-dk transition-all shadow-xl shadow-brand/20 text-lg">
                  Book a Tour
                </BookTourButton>
                <a href="tel:0299792752" className="bg-white text-dark border-2 border-brand-lt font-display font-black px-12 py-5 rounded-2xl hover:bg-brand-lt transition-all text-lg">
                  Call Us: (02) 9979 2752
                </a>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
