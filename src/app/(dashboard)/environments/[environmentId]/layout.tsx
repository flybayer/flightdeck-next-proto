"use client";
import Link from "next/link";
import styles from "@/app/(dashboard)/page.module.css";
import { Client } from "@/components/Client";
import { AnimatePresence } from "@/components/AnimatePresence";
import { SideMenu } from "@/components/SideMenu";
import { motion } from "framer-motion";

export default function EnvLayout({
  children,
  params,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Client className="flex h-full">
        <SideMenu />
        <motion.div
          animate
          layout
          className={styles.main + " bg-gray-200 flex-1"}
        >
          <div className="space-y-4">
            <div>Environment {params.environmentId}</div>
            <div className="space-x-4 flex">
              <Link
                href={`/environments/${params.environmentId}/services/server`}
                className="block h-32 w-32 bg-blue-50 rounded p-4 shadow"
              >
                Server
              </Link>
              <Link
                href={`/environments/${params.environmentId}/services/database`}
                className="block h-32 w-32 bg-blue-50 rounded p-4 shadow"
              >
                Database
              </Link>
            </div>
            <div className={styles.description}>
              <p className="text-red-900">
                <Link href="/">HOME</Link>
              </p>
            </div>
          </div>
        </motion.div>
        <AnimatePresence>{children}</AnimatePresence>
      </Client>
    </>
  );
}
