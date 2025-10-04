"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import { supabase } from "../lib/supabase";

type Poem = {
  id: number;
  title: string;
  text: string;
  created_at: string;
};

export default function Home() {
  const [poems, setPoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPoems = async () => {
      const { data, error } = await supabase
        .from("poems")
        .select("id, title, text, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setPoems(data || []);
      }
      setLoading(false);
    };

    fetchPoems();
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />

      {/* HERO SECTION */}
      <section className="text-center py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          A Quiet Space for Reflection & Creation
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.”
        </p>
      </section>

      {/* POETRY SECTION - HORIZONTAL SCROLL PREVIEW */}
      <section id="poetry" className="px-6 py-20 bg-gray-50 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Poetry</h3>

        {loading ? (
          <p>Loading poems...</p>
        ) : error ? (
          <p className="text-red-600">Error loading poems: {error}</p>
        ) : poems.length === 0 ? (
          <p>No poems found.</p>
        ) : (
          <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {poems.map((poem) => (
              <div
                key={poem.id}
                className="min-w-[280px] p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer flex-shrink-0"
              >
                <h4 className="text-xl font-semibold">{poem.title}</h4>
                <p className="text-gray-600 mt-2 whitespace-pre-line">
                  {poem.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* (rest of your sections unchanged) */}

      {/* PROJECTS SECTION */}
      {/* ABOUT SECTION */}
      {/* SUBSCRIBE SECTION */}
      {/* FOOTER */}
    </main>
  );
}
