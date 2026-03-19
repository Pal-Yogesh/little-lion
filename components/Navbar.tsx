"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'motion/react';
import Image from 'next/image';
import { BookTourButton } from '@/components/BookTourModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    setHidden(latest > 200 && latest > prev);
  });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Blog', path: '/blog' },
    { name: 'Experience', path: isHome ? '#experience' : '/#experience' },
    { name: 'FAQs', path: isHome ? '#faq' : '/#faq' },
  ];

  return (
    <motion.nav
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-brand/5 border-b border-brand-lt'
          : 'bg-white/80 backdrop-blur-md border-b border-brand-lt'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div whileHover={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 0.5 }}>
              <Image src="/logo.png"
              width={1000}
              height={1000}
              alt="logo"
              loading="eager"
              className='w-16 h-16'
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              link.path.startsWith('#') || link.path.includes('/#') ? (
                <motion.a
                  key={link.name}
                  href={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm font-bold text-mid hover:text-brand transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand rounded-full group-hover:w-full transition-all duration-300" />
                </motion.a>
              ) : (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={link.path} className={`text-sm font-bold transition-colors relative group ${pathname === link.path ? 'text-brand' : 'text-mid hover:text-brand'}`}>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand rounded-full transition-all duration-300 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </Link>
                </motion.div>
              )
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <BookTourButton className="bg-brand text-white font-display font-black text-sm px-8 py-3.5 rounded-full hover:bg-brand-dk transition-all hover:scale-105 shadow-lg shadow-brand/20">
                Book a Tour
              </BookTourButton>
            </motion.div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-lt text-brand">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-brand-lt shadow-2xl shadow-black/10 overflow-hidden z-50"
          >
            <div className="px-4 pt-3 pb-6 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                link.path.startsWith('#') || link.path.includes('/#') ? (
                  <a key={link.name} href={link.path} className="text-base font-bold text-mid p-3 rounded-xl hover:bg-brand-lt" onClick={() => setIsOpen(false)}>{link.name}</a>
                ) : (
                  <Link key={link.name} href={link.path} className={`text-base font-bold p-3 rounded-xl ${pathname === link.path ? 'bg-brand-lt text-brand' : 'text-mid hover:bg-brand-lt'}`} onClick={() => setIsOpen(false)}>{link.name}</Link>
                )
              ))}
              <BookTourButton className="bg-brand text-white font-display font-black text-lg p-4 rounded-xl text-center shadow-lg shadow-brand/20 w-full mt-2" onClick={() => setIsOpen(false)}>
                Book a Tour
              </BookTourButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;






//////////////////


// "use client";
// import { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';
// import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'motion/react';
// import Image from 'next/image';
// import { BookTourButton } from '@/components/BookTourModal';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const pathname = usePathname();
//   const isHome = pathname === '/';
//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const prev = scrollY.getPrevious() ?? 0;
//     setScrolled(latest > 20);
//     setHidden(latest > 200 && latest > prev);
//   });

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Programs', path: '/programs' },
//     { name: 'Blog', path: '/blog' },
//     { name: 'Experience', path: isHome ? '#experience' : '/#experience' },
//     { name: 'FAQs', path: isHome ? '#faq' : '/#faq' },
//   ];

//   return (
//     <motion.nav
//       animate={{ y: hidden ? -100 : 0 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-brand/5 border-b border-brand-lt'
//           : 'bg-white/80 backdrop-blur-md border-b border-brand-lt'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           <Link href="/" className="flex items-center gap-3 group">
//             <motion.div whileHover={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 0.5 }}>
//               <Image src="/logo.png"
//               width={1000}
//               height={1000}
//               alt="logo"
//               loading="eager"
//               className='w-16 h-16'
//               />
//             </motion.div>
//           </Link>

//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link, i) => (
//               link.path.startsWith('#') || link.path.includes('/#') ? (
//                 <motion.a
//                   key={link.name}
//                   href={link.path}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.05 }}
//                   className="text-sm font-bold text-mid hover:text-brand transition-colors relative group"
//                 >
//                   {link.name}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand rounded-full group-hover:w-full transition-all duration-300" />
//                 </motion.a>
//               ) : (
//                 <motion.div
//                   key={link.name}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.05 }}
//                 >
//                   <Link href={link.path} className={`text-sm font-bold transition-colors relative group ${pathname === link.path ? 'text-brand' : 'text-mid hover:text-brand'}`}>
//                     {link.name}
//                     <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand rounded-full transition-all duration-300 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
//                   </Link>
//                 </motion.div>
//               )
//             ))}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               <BookTourButton className="bg-brand text-white font-display font-black text-sm px-8 py-3.5 rounded-full hover:bg-brand-dk transition-all hover:scale-105 shadow-lg shadow-brand/20">
//                 Book a Tour
//               </BookTourButton>
//             </motion.div>
//           </div>

//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-lt text-brand">
//               {isOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25, ease: "easeInOut" }}
//             className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-brand-lt shadow-2xl shadow-black/10 overflow-hidden z-50"
//           >
//             <div className="px-4 pt-3 pb-6 space-y-1 flex flex-col">
//               {navLinks.map((link) => (
//                 link.path.startsWith('#') || link.path.includes('/#') ? (
//                   <a key={link.name} href={link.path} className="text-base font-bold text-mid p-3 rounded-xl hover:bg-brand-lt" onClick={() => setIsOpen(false)}>{link.name}</a>
//                 ) : (
//                   <Link key={link.name} href={link.path} className={`text-base font-bold p-3 rounded-xl ${pathname === link.path ? 'bg-brand-lt text-brand' : 'text-mid hover:bg-brand-lt'}`} onClick={() => setIsOpen(false)}>{link.name}</Link>
//                 )
//               ))}
//               <BookTourButton className="bg-brand text-white font-display font-black text-lg p-4 rounded-xl text-center shadow-lg shadow-brand/20 w-full mt-2" onClick={() => setIsOpen(false)}>
//                 Book a Tour
//               </BookTourButton>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;
