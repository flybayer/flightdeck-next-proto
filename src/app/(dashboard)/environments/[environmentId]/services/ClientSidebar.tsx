"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";

// Client wraps any client/rsc components with AnimatePresence
export default function ClientSidebar({ children }: { children: ReactNode }) {
  const segment = useSelectedLayoutSegment();
  return (
    <AnimatePresence mode="wait">
      {segment && (
        <motion.div
          className="shadow bg-gray-50 h-full w-full flex-1 p-10 min-w-[60rem]"
          initial={{ x: "100%" }} // Set initial x position to be off-screen on the right
          exit={{ x: "100%" }}
          animate={{ x: 0 }} // Animate x position to 0 (on-screen)
          transition={{ duration: 0.2 }} // Set duration of animation
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
