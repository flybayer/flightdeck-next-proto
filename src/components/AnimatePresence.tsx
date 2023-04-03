"use client";
import { AnimatePresence as FNAnimatePresence } from "framer-motion";

export const AnimatePresence = ({ children }) => {
  return <FNAnimatePresence>{children}</FNAnimatePresence>;
};
