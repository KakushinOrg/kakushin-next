"use client";

import { useState } from "react";
import { useBlogs } from "@/app/context/blogContext";
import { MoreHorizontalIcon } from "lucide-react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

export default function ChatList() {
  const [menuOpen, setMenuOpen] = useState(null);
  const { blogs, loading } = useBlogs();
  const [searchTerm, setSearchTerm] = useState("");
  // const [chatItems, setChatItems] = useState([
  //   {
  //     id: 1,
  //     title: "Harnessing AI for Smarter Startup Decisions",
  //     description:
  //       "Explore how artificial intelligence can transform decision-making processes.",
  //     image: "../../icons/heart.svg",
  //   },
  //   {
  //     id: 2,
  //     title: "Innovations Shaping Remote Operations",
  //     description:
  //       "Delve into the technologies and trends redefining remote work.",
  //     image: "../../icons/heart.svg",
  //   },
  //   {
  //     id: 3,
  //     title: "Sustainable Practices for the Modern Enterprise",
  //     description:
  //       "Discuss the importance of integrating sustainability into business models.",
  //     image: "../../icons/heart.svg",
  //   },
  //   {
  //     id: 4,
  //     title: "Blockchain Beyond Bitcoin",
  //     description:
  //       "Examine the use of blockchain technology beyond cryptocurrency.",
  //     image: "../../icons/heart.svg",
  //   },
  //   {
  //     id: 1,
  //     title: "Harnessing AI for Smarter Startup Decisions",
  //     description:
  //       "Explore how artificial intelligence can transform decision-making processes.",
  //     image: "../../icons/heart.svg",
  //   },
  //   {
  //     id: 2,
  //     title: "Innovations Shaping Remote Operations",
  //     description:
  //       "Delve into the technologies and trends redefining remote work.",
  //     image: "../../icons/heart.svg",
  //   },
  //   {
  //     id: 3,
  //     title: "Sustainable Practices for the Modern Enterprise",
  //     description:
  //       "Discuss the importance of integrating sustainability into business models.",
  //     image: "../../icons/heart.svg",
  //   },
  //   {
  //     id: 4,
  //     title: "Blockchain Beyond Bitcoin",
  //     description:
  //       "Examine the use of blockchain technology beyond cryptocurrency.",
  //     image: "../../icons/heart.svg",
  //   },
  //   {
  //     id: 1,
  //     title: "Harnessing AI for Smarter Startup Decisions",
  //     description:
  //       "Explore how artificial intelligence can transform decision-making processes.",
  //     image: "../../icons/heart.svg",
  //   },
  //   {
  //     id: 2,
  //     title: "Innovations Shaping Remote Operations",
  //     description:
  //       "Delve into the technologies and trends redefining remote work.",
  //     image: "../../icons/heart.svg",
  //   },
  //   {
  //     id: 3,
  //     title: "Sustainable Practices for the Modern Enterprise",
  //     description:
  //       "Discuss the importance of integrating sustainability into business models.",
  //     image: "../../icons/heart.svg",
  //   },
  //   {
  //     id: 4,
  //     title: "Blockchain Beyond Bitcoin",
  //     description:
  //       "Examine the use of blockchain technology beyond cryptocurrency.",
  //     image: "../../icons/heart.svg",
  //   },
  // ]);

  // const [editModal, setEditModal] = useState({ open: false, chat: null });
  // const [deleteModal, setDeleteModal] = useState({ open: false, chat: null });

  // const filteredItems = chatItems.filter((item) =>
  //   item.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const handleEditSave = () => {
  //   setChatItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === editModal.chat.id
  //         ? { ...item, title: editModal.chat.title }
  //         : item
  //     )
  //   );
  //   setEditModal({ open: false, chat: null });
  // };

  // const handleDeleteConfirm = () => {
  //   setChatItems((prevItems) =>
  //     prevItems.filter((item) => item.id !== deleteModal.chat.id)
  //   );
  //   setDeleteModal({ open: false, chat: null });
  // };

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  const formattedBlogs = blogs.map((blog) => ({
    id: blog.blogID,
    title: blog.title,
    description: documentToPlainTextString(blog.blogBody).slice(0, 150) + "...",
    slug: blog.slug,
    image: blog.blogMedia.fields.file.url.startsWith("//")
      ? `https:${blog.blogMedia.fields.file.url}`
      : blog.blogMedia.fields.file.url,
  }));

  const filteredBlogs = formattedBlogs.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <h1 className="text-xl mb-3">Innovation Insights</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="space-y-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-3 bg-white border rounded-2xl shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.description || item.body}
                </p>
              </div>
              {/* <div className="relative">
                                <button
                                    onClick={() => setMenuOpen(menuOpen === index ? null : index)}
                                    className="p-2"
                                >
                                    <MoreHorizontalIcon size={20} className="text-gray-500" />
                                </button>
                                {menuOpen === index && (
                                    <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg border rounded-lg">
                                        <button
                                            className="w-full text-left px-3 py-1 text-sm hover:bg-gray-200"
                                            onClick={() => setEditModal({ open: true, chat: item })}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="w-full text-left px-3 py-1 text-sm hover:bg-gray-200"
                                            onClick={() => setDeleteModal({ open: true, chat: item })}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div> */}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>

      {/* {editModal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-2">Edit Chat Title</h2>
            <input
              type="text"
              value={editModal.chat.title}
              onChange={(e) =>
                setEditModal({
                  ...editModal,
                  chat: { ...editModal.chat, title: e.target.value },
                })
              }
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setEditModal({ open: false, chat: null })}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleEditSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* {deleteModal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-2">Confirm Delete</h2>
            <p className="mb-4">
              Are you sure you want to delete chat{" "}
              <strong>{deleteModal.chat.title}</strong>?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setDeleteModal({ open: false, chat: null })}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleDeleteConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}
