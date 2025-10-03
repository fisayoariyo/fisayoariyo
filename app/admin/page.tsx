"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation"; 

export default function AdminPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Check auth
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
      }
    };

    getUser();
  }, [router]);

  // Handle submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("poems").insert([{ title, text }]);

    if (error) {
      console.error(error);
    } else {
      setSuccess("Poem submitted!");
      setTitle("");
      setText("");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8">Submit a New Poem</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-6 rounded shadow space-y-4"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your poem..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows={8}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
        >
          {loading ? "Submitting..." : "Submit Poem"}
        </button>
        {success && (
          <p className="text-green-600 text-center font-medium">{success}</p>
        )}
      </form>
    </main>
  );
}
