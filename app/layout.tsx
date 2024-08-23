import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import Modal from "./components/modals/Modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences",
  description: "James Harris - NextJS - Airbnb Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal actionLabel="Submit" isOpen title="Hello World" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
