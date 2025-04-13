"use client";
import React, { useEffect, useState } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTitle from "../ui/AnimatedTitle";
import Link from "next/link";
import { Icon } from "@iconify/react";

const syne = Syne({ subsets: ["latin"] });

export default function Contact() {
  const { setSectionInView } = useView();
  const [viewCount, setViewCount] = useState<number>(0);
  const [showContactDetails, setShowContactDetails] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  useEffect(() => {
    if (inView) {
      setViewCount((c) => c + 1);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        transform: `${
          showContactDetails
            ? "perspective(300px) rotateY(-180deg)"
            : "perspective(300px) rotateY(-360deg)"
        }`,
      }}
      className={`overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 pb-4 md:pb-10 lg:pb-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-linear-to-r from-[#d9d9d91f] to-[#7373731f]`}
    >
      {!showContactDetails ? (
        <div
          className={` ${
            syne.className
          } flex justify-between items-center w-full duration-1000 ${
            showContactDetails && "opacity-0"
          }`}
        >
          <div className="inline w-full">
            <AnimatedTitle
              wordSpace={"mr-2 md:mr-[12px]"}
              charSpace={"mr-[0.001em]"}
              className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold pt-4 md:pt-10 lg:pt-12 "
            >
              LET’S CONNECT & CREATE
            </AnimatedTitle>
            <Link href="#footer" data-no-blobity>
              <span
                data-blobity
                onClick={() => {
                  setShowContactDetails(true);
                }}
                className="text-xl sm:text-2xl md:text-[32px] w-fit underline lg:text-[40px] font-bold leading-tight hidden sm:block lg:hidden"
              >
                CONTACT ME
              </span>
            </Link>
          </div>
          <Link href="#footer">
            <button
              className={`text-base ml-auto mt-6 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 lg:mt-12 rounded-xl border-2 border-white leading-none ${
                viewCount <= 1 && "duration-500 delay-[1500ms]"
              } ${
                inView ? " opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              data-blobity-radius="12"
              onClick={() => {
                setShowContactDetails(true);
              }}
            >
              CONTACT&nbsp;ME
            </button>
          </Link>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            exit={{ opacity: 0 }}
            style={{
              transform: `${
                showContactDetails
                  ? "perspective(300px) rotateY(-180deg)"
                  : "perspective(300px) rotateY(0deg)"
              }`,
            }}
            className="w-full"
          >
            <div className="flex items-center justify-between py-4 md:py-5 lg:py-6">
              <span className={`font-bold uppercase ${syne.className} opacity-50`}>
                contact info
              </span>
              <Icon
                icon="gg:close"
                data-blobity
                onClick={() => {
                  setShowContactDetails(false);
                }}
                className="text-2xl opacity-50 cursor-pointer"
              />
            </div>

            <div className="flex flex-col gap-6 text-white text-base sm:text-lg mt-4">
              <div className="flex items-center gap-3">
                <Icon icon="mdi:map-marker" className="text-2xl text-[#d9d9d9]" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon="mdi:phone" className="text-2xl text-[#d9d9d9]" />
                <a href="tel:+1234567890" className="hover:underline">
                  +91 86687 48821
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon="mdi:email" className="text-2xl text-[#d9d9d9]" />
                <a href="mailto:your@email.com" className="hover:underline">
                  kunalpusdekar16@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}