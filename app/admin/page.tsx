"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { error } = await supabase.from("poems").insert([{ title, text }]);

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Poem submitted successfully!");
      setTitle("");
      setText("");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 font-sans text-gray-900">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center font-serif text-gray-800">
          Post a New Poem ✍🏽
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Poem title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            placeholder="Write your poem here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            rows={8}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {error && (
            <p className="text-red-600 font-medium text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-600 font-medium text-center">{success}</p>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md shadow-md transition-all duration-300"
          >
            Submit Poem
          </button>
        </form>
      </div>
    </main>
  );
}
