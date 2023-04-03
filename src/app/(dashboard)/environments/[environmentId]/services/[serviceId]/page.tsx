export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <h2 className="text-xl">Service {params.serviceId}</h2>
    </div>
  );
}
