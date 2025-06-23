import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Blog() {
  const { token, user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  useEffect(() => {
    fetch(`http://localhost:5000/blog`).then(res => res.json()).then(setBlogs);
  }, []);

  const addBlog = async () => {
    const res = await fetch(`http://localhost:5000/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newPost),
    });
    const result = await res.json();
    alert(result.message || result.error);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-12 px-2 sm:px-4">
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Blog" className="h-12 w-12 sm:h-20 sm:w-20 mb-2 sm:mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-blue-700">Blogs</h2>
        <p className="text-gray-600 text-center max-w-xl text-sm sm:text-base">Read the latest articles and updates from our team and community.</p>
      </div>
      <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
        {blogs.map((b, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 flex items-center gap-3 sm:gap-4"
          >
            <img src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`} alt="Avatar" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover" />
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-blue-600">{b.title}</h4>
              <p className="text-gray-700 text-sm sm:text-base">{b.content}</p>
            </div>
          </div>
        ))}
      </div>
      {user && (
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-blue-700">Add a Blog Post</h3>
          <input
            className="w-full mb-1 sm:mb-2 px-3 sm:px-4 py-2 rounded border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Title"
            onChange={e => setNewPost({ ...newPost, title: e.target.value })}
          />
          <textarea
            className="w-full mb-1 sm:mb-2 px-3 sm:px-4 py-2 rounded border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Content"
            onChange={e => setNewPost({ ...newPost, content: e.target.value })}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow transition"
            onClick={addBlog}
          >
            Add Blog
          </button>
        </div>
      )}
    </div>
  );
}
