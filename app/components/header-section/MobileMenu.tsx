"use client";

import { useView } from "@/contexts/ViewContext";
import React, { SetStateAction } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function MobileMenu({
  onMenuOpen,
}: {
  onMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { sectionInView } = useView();

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#resume", label: "Resume" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid z-30 items-center grid-cols-2 md:hidden px-6 py-5 fixed top-12 rounded-2xl bg-linear-to-r from-[#d9d9d91f] max-w-[90%] w-full to-[#7373731f] mt-12 std-backdrop-blur"
    >
      <ul
        className="flex flex-col gap-4 text-white/25"
        onClick={() => onMenuOpen(false)}
      >
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`w-fit ${
              sectionInView === item.label.toLowerCase() ? "text-white" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </ul>

      <div className="flex flex-col gap-3 z-20 items-center justify-center">
        <Link
          className="p-4 flex-1 flex justify-center w-full rounded-xl h-fit text-4xl bg-linear-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
          target="_blank"
          href="https://linkedin.com/in/kunal-pusdekar"
          data-blobity-radius="10"
        >
          <Icon icon="hugeicons:linkedin-01" />
        </Link>

        <div className="flex gap-3 w-full">
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-linear-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
            target="_blank"
            href="https://github.com/KunalPusdekar"
            data-blobity-radius="10"
          >
            <Icon icon="hugeicons:github" />
          </Link>
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-linear-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
            target="_blank"
            href="https://x.com/Kunal160403"
            data-blobity-radius="10"
          >
            <Icon icon="akar-icons:x-fill" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}