"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <div className=" bg-image h-screen w-full">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className="absolute h-full w-full object-cover"
      >
        <source src="./vastra.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
      <div>
        <Image src={require("@/app/assets/VASTORAGROUP_LOGO.png")} alt="logo" className=" z-40 h-[200px] left-[50%] translate-x-[-50%] w-[200px]  absolute top-0"  />
      </div>
      {
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <h1 className="mb-4 font-amst tracking-wider text-2xl font-bold sm:text-6xl md:text-5xl lg:text-6xl">
            Coming Soon
          </h1>
          <p className=" max-w-[800px] font-normal font-robo  sm:text-xl md:text-xl mt-[20px] px-4 md:mt-[80px] text-center">
            Bringing Dreams to Life – Discover Modern Architecture and Timeless
            Design in Bihar, Lucknow, and Beyond. Your future begins here.
          </p>
        </motion.div>
      }
    </div>
  );
}
