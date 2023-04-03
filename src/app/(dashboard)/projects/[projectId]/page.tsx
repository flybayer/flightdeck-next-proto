import styles from "@/app/(dashboard)/page.module.css";
import Link from "next/link";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className={styles.main}>
      <div className="space-y-4">
        <div>Project {params.projectId}</div>
        <div className={styles.description}>
          <p className="text-red-900">
            <Link href="/">HOME</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
