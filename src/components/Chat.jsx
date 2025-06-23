import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Chat() {
  const { token, user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/chat").then(res => res.json()).then(setMessages);
  }, []);

  const sendMessage = async () => {
    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message: msg }),
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 sm:py-12 px-2 sm:px-4">
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <img src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" alt="Chat" className="h-12 w-12 sm:h-20 sm:w-20 mb-2 sm:mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-blue-700">Chat</h2>
        <p className="text-gray-600 text-center max-w-xl text-sm sm:text-base">Join the conversation and connect with our community in real time.</p>
      </div>
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {messages.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-3 sm:p-4 border border-gray-100 flex items-center gap-2 sm:gap-4"
          >
            <img src={`https://randomuser.me/api/portraits/men/${40 + i}.jpg`} alt="Avatar" className="h-7 w-7 sm:h-10 sm:w-10 rounded-full object-cover" />
            <div>
              <b className="text-blue-600 text-sm sm:text-base">{m.user}:</b> <span className="text-gray-700 text-sm sm:text-base">{m.message}</span>
            </div>
          </div>
        ))}
      </div>
      {user && (
        <div className="flex gap-2 items-center bg-white rounded-xl shadow p-3 sm:p-4 border border-gray-100">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="flex-1 px-3 sm:px-4 py-2 rounded border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message..."
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow transition"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}
