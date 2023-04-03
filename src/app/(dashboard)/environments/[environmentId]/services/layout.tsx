"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SideLayout({
  children,
  params,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      id="side-service"
      layoutId="side-service"
      className="shadow bg-gray-50 h-full w-full flex-1 p-10 min-w-[60rem]"
      initial={{ x: "100%" }} // Set initial x position to be off-screen on the right
      exit={{ x: "100%" }}
      animate={{ x: 0 }} // Animate x position to 0 (on-screen)
      transition={{ duration: 0.2 }} // Set duration of animation
    >
      <div className="font-bold">SideLayout</div>
      <div>{children}</div>
    </motion.div>
  );
}
