import { useState } from "react";
import "./boxMorph.css";
import AsideAboutus from "@/app/components/AsideComponents/asideAboutus";
import BlogPostCarousel from "@/app/components/BlogsCarousel/EmblaCarousel";
import OurServices from "@/app/landing_page/OurServices";

export default function ChatList({ selectedCategory }) {
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  const categoryMap = {
    innovation: "Innovation insights",
    about: "About us",
    services: "Our Services",
    industry: "Industry Vertical",
    blogs: "Blogs",
  };

  const socialMediaImages = shuffleArray(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Social Media Post ${i + 1}`,
      image: `/images/socialMediaPosts/Social_Media-${i + 1}.jpg`,
    }))
  );

  const filteredSocialMediaPosts = socialMediaImages.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const leftColumn = [];
  const rightColumn = [];
  filteredBlogs.forEach((item, index) => {
    if (index % 2 === 0) {
      leftColumn.push(item);
    } else {
      rightColumn.push(item);
    }
  });

  // Define Social Media images for innovation category
  const socialMediaImages = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Social Media Post ${i + 1}`,
    image: `/images/socialMediaPosts/Social_Media-${i + 1}.jpg`,
  }));

  const OPTIONS = { slidesToScroll: "auto" };

  return (
    <>
      <h1 className="titleTextLG text-center mb-5">Social Media Posts</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="space-y-4">
        {selectedCategory === "industry" && (
          <BlogPostCarousel projects={projects} options={OPTIONS} />
        )}
        {selectedCategory === "services" && <OurServices />}
        {selectedCategory === "about" && <AsideAboutus />}

        {selectedCategory === "innovation" ? (
          /** Only Show Social Media Images Here */
          <div className="flex flex-col px-10 gap-4">
            {socialMediaImages.map((item) => (
              <div
                key={item.id}
                className="boxWhiteMorph relative flex flex-col bg-white border rounded-2xl shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto mx-auto object-contain rounded-2xl transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          (selectedCategory === "blogs" || selectedCategory === "innovation") &&
          filteredBlogs.length > 0 && (
            <div className="flex gap-4 flex-col w-full md:flex-row">
              {/* Left Column */}
              <div className="flex-1 w-full space-y-4">
                {leftColumn.map((item) => (
                  <div
                    key={item.id}
                    className="boxWhiteMorph relative flex flex-col p-3 bg-white border rounded-2xl shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-lg transition-transform duration-300 mb-3"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 blog-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Right Column */}
              <div className="flex-1 w-full space-y-4">
                {rightColumn.map((item) => (
                  <div
                    key={item.id}
                    className="boxWhiteMorph relative flex flex-col p-3 bg-white border rounded-2xl shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-lg transition-transform duration-300 mb-3"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 blog-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
