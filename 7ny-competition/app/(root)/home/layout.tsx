import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <LeftSidebar />
      <div className="top-[80px] left-[180px] relative">{children}</div>
    </div>
  );
}
