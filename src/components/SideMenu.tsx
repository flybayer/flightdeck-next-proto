"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const SideMenu = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <motion.div
      style={{ width: "inherit" }}
      animate={{ width: segment ? "100px" : "inherit" }}
      className={"flex "}
    >
      <div className="bg-blue-400 p-4 space-y-8 w-[20rem] min-w-[20rem]">
        <div>ProjectLayout</div>
        <Link
          href="environments/prod"
          className="block border rounded flex p-2 bg-blue-300"
        >
          Production
        </Link>
        <Link
          href="environments/staging"
          className="block border rounded flex p-2 bg-blue-300"
        >
          Staging
        </Link>
      </div>
    </motion.div>
  );
};
