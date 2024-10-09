import { Lato } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Kakushin",
  description: "Kakushin - Digital Solutions for Startups",
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${lato.variable} antialiased`}>
        {" "}
        {/* Check if this class is applied */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
