import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

export const metadata = {
  title: "WIS-video",
  description: "A Next.js 13 Meta WIS-video Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="h-[100vh] items-center justify-center flex">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
