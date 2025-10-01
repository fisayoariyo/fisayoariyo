export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold">Fisayo Ariyo</h1>
          <p className="text-gray-600">Poet • Dreamer • Writer</p>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Welcome to my little corner of the internet. I write poems to capture
          feelings, memories, and thoughts that words sometimes struggle to
          hold. Here, I share them with you—simple, honest, and from the heart.
        </p>
      </section>

      {/* Poems Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">My Poems</h2>

        <div className="space-y-8">
          <article className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">The Dawn</h3>
            <p className="text-gray-700 leading-relaxed">
              The night folds gently, as whispers chase the sky, a new sun
              breathes its promise, and dreams refuse to die.
            </p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Unspoken</h3>
            <p className="text-gray-700 leading-relaxed">
              Between the lines we never say, silence builds a home, yet hearts
              in quiet rhythm, still find their way to roam.
            </p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Footsteps</h3>
            <p className="text-gray-700 leading-relaxed">
              On paths that twist and scatter, I leave a trace behind, not in
              stone or fleeting sand, but etched within the mind.
            </p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-12">
        <div className="max-w-4xl mx-auto px-6 py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Fisayo Ariyo. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
