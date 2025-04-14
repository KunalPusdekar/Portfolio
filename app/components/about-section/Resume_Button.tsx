"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function DownloadResumeButton() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const RESUME_URL =
    "https://drive.google.com/uc?export=download&id=1WWDBrrBBHzVnZot6ri7Mbf5Y6u1eRYZa";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "KunalPusdekar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      ref={ref}
      onClick={handleDownload}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-3 text-black bg-amber-50 text-lg font-medium rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] backdrop-blur-md border border-white/10 hover:scale-[1.03] transition-all duration-300"
    >
      Download Resume
    </motion.button>
  );
}
