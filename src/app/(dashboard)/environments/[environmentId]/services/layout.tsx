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
    <>
      <div className="font-bold">SideLayout</div>
      <div>{children}</div>
    </>
  );
}
