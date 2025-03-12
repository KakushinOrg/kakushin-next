import { useState } from "react";
import "./boxMorph.css";
import AsideAboutus from "@/app/components/AsideComponents/asideAboutus";

export default function ChatList({ selectedCategory }) {
  const [searchTerm, setSearchTerm] = useState("");

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
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
        {selectedCategory === "aboutus" ? (
          <AsideAboutus />
        ) : (
          <>
            {filteredSocialMediaPosts.length > 0 ? (
              <div className="space-y-4 md:px-20 px-5">
                {filteredSocialMediaPosts.map((item) => (
                  <div
                    key={item.id}
                    className="boxWhiteMorph relative flex flex-col bg-white border rounded-[27px] shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto mx-auto object-contain rounded-[25px] transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </>
        )}
      </div>
    </>
  );
}
