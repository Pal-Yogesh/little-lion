"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Script from "next/script";
import Image from "next/image";

const BookTourContext = createContext<{
  open: () => void;
  close: () => void;
  isOpen: boolean;
}>({ open: () => {}, close: () => {}, isOpen: false });

export const useBookTour = () => useContext(BookTourContext);

export function BookTourProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <BookTourContext.Provider value={{ open, close, isOpen }}>
      {children}

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
              onClick={close}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-brand-lt bg-brand-lt/30">
                <div className="flex items-center gap-3">
                   <Image src="/logo.png"
                              width={1000}
                              height={1000}
                              alt="logo"
                              loading="eager"
                              className='w-10 h-10'
                              />
                  <div>
                    <h3 className="font-display font-black text-dark text-lg leading-tight">
                      Book a Tour
                    </h3>
                    <p className="text-xs text-soft font-medium">
                      Little Lion Early Learning · Wahroonga
                    </p>
                  </div>
                </div>
                <button
                  onClick={close}
                  className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-mid hover:text-dark hover:bg-brand-lt transition-all"
                  aria-label="Close form"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form iframe */}
              <div className="h-[500px] overflow-y-auto">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/KwCN6nlnaYNrd1H4vVLK"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  id="inline-KwCN6nlnaYNrd1H4vVLK"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Book a Tour"
                  data-height="710"
                  data-layout-iframe-id="inline-KwCN6nlnaYNrd1H4vVLK"
                  data-form-id="KwCN6nlnaYNrd1H4vVLK"
                  title="Book a Tour"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookTourContext.Provider>
  );
}

/** Drop-in replacement for anchor/button — opens the tour modal on click */
export function BookTourButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { open } = useBookTour();
  return (
    <button
      onClick={() => {
        onClick?.();
        open();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
