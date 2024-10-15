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
  openGraph: {
    type: "website",
    url: "https://www.kakushin.io",
    title: "Kakushin",
    description: "Kakushin - Digital Solutions for Startups",
  },
  additionalMetaTags: [
    {
      name: "application-name",
      content: "Kakushin",
    },
    {
      name: "description",
      content: "Kakushin - Digital Solutions for Startups",
    },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kakushin",
    url: "https://www.kakushin.io",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.kakushin.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${lato.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
