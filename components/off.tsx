"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Off() {
  const [isOn, setIsOn] = useState(true); // Default to true to display the notification
  const handleClose = () => setIsOn(false);

  return (
    isOn && (
      <motion.div
        className="bg-[#ff4081] w-full h-6 flex justify-center items-center"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <h1 className="text-white text-xs md:text-sm lg:text-base line-clamp-1 md:line-clamp-none">
          🎉 Get $10 Off Your First Service! Find Your Authorized Service
          Location Today!
        </h1>
        <button className="ml-10" onClick={handleClose}>
          <X size={16} className="text-white" />
        </button>
      </motion.div>
    )
  );
}
