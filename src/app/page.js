import MainLandingPage from "./landing_page/MainLandingPage";
import { BlogProvider } from "@/app/context/blogContext";

export const metadata = {
  title: "Welcome to Kakushin",
  description: "Your trusted partner for digital transformation.",
  other: {
    "application/ld+json": {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Kakushin",
      description: "Your trusted partner for digital transformation.",
      url: "https://kakushin.io/",
      mainEntity: {
        "@type": "Organization",
        name: "Kakushin",
        url: "https://kakushin.io",
        logo: "https://kakushin.io/logo.png",
        sameAs: [
          "https://www.linkedin.com/company/kakushin",
          "https://twitter.com/kakushin",
        ],
      },
    },
  },
};

export default function Home() {
  return (
    <BlogProvider>
      <div className="overflow-x-hidden">
        <MainLandingPage />
      </div>
    </BlogProvider>
  );
}
