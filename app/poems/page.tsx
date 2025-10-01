import { supabase } from "../lib/supabase";

export default async function PoemsPage() {
  // fetch poems from supabase
  const { data: poems, error } = await supabase
    .from("poems")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-6 text-red-500">
        Error loading poems: {error.message}
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Poems</h1>
      {poems && poems.length > 0 ? (
        poems.map((poem) => (
          <div
            key={poem.id}
            className="mb-8 p-4 border rounded-lg shadow-sm bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{poem.title}</h2>
            <p className="whitespace-pre-line text-gray-700">{poem.text}</p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(poem.created_at).toLocaleDateString()}
            </p>
          </div>
        ))
      ) : (
        <p>No poems found.</p>
      )}
    </main>
  );
}
