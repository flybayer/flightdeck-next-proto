import Link from "next/link";

export default function AppLayout({
  children,
  params,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-full">
        <div className="bg-blue-400 p-4 space-y-8">
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
        <div>{children}</div>
      </div>
    </>
  );
}
