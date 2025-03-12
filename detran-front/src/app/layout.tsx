import type { Metadata } from "next";
import { geistSans, geistMono} from '@/app/ui/fonts';
import { Toaster } from "react-hot-toast";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.className} antialiased bg-[var(--background)]`}>
      <Toaster position="top-center" />
      {children}
      </body>
    </html>
  );
}
