export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full h-14 bg-blue-300 flex items-center p-4">
        AppLayout
      </div>
      {children}
    </>
  );
}
