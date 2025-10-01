import { poems } from "../poems";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-200 to-purple-50">
        <h1 className="text-5xl font-bold">Fisayo Ariyo</h1>
        <p className="mt-4 text-lg text-gray-700">
          Poet • Dreamer • Storyteller
        </p>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          Hi, I’m Fisayo. I write poems that speak about love, life, and
          everything in between. My words are fragments of my thoughts, stitched
          together to share with the world.
        </p>
      </section>

      {/* Poems */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">My Poems</h2>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {poems.map((poem, i) => (
            <article key={i} className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">{poem.title}</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {poem.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
