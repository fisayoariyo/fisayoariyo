"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Database } from "@/types/supabase";

type Poem = Database["public"]["Tables"]["poems"]["Row"];

export default function PoemCarousel() {
  const [poems, setPoems] = useState<Poem[]>([]);

  useEffect(() => {
    const fetchPoems = async () => {
      const { data, error } = await supabase
        .from("poems")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching poems:", error.message);
      } else {
        setPoems(data || []);
      }
    };

    fetchPoems();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" id="poems">
        Latest Poems
      </h2>

      {poems.length === 0 ? (
        <p className="text-gray-500">No poems found.</p>
      ) : (
        <div className="overflow-x-auto flex space-x-4 pb-4">
          {poems.map((poem) => (
            <div
              key={poem.id}
              className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] bg-gray-50 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{poem.title}</h3>
              <p className="text-gray-700 text-sm max-h-40 overflow-hidden whitespace-pre-wrap">
                {poem.text.length > 300
                  ? `${poem.text.slice(0, 300)}...`
                  : poem.text}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(poem.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
