"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AmbientLogo() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: 99999 }}
    >
      <motion.div
        animate={{
          x: ["10vw", "80vw", "10vw", "50vw", "80vw", "20vw"],
          y: ["10vh", "30vh", "80vh", "50vh", "10vh", "70vh"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }}
        className="absolute"
      >
        <img 
          src="/logo.gif" 
          alt="Floating Logo" 
          className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_30px_rgba(45,87,144,0.4)]"
        />
      </motion.div>
    </div>
  );
}
