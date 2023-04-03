import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="space-y-4">
        <p>HOME</p>
        <div className={styles.description}>
          <p className="text-red-900">
            <Link href="/projects/1">PROJECT</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
