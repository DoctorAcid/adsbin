import type { Metadata } from "next";
import { Outfit, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADSBIN",
  description: "Transform Your Space and Engage Your Audience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col ${outfit.variable} ${nunito.variable} antialiased`}
      >
        <Navbar />
        <div className="flex w-full">
          <SideBar />
          <div className="flex flex-col ml-[320px] p-8 pt-[124px] w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
