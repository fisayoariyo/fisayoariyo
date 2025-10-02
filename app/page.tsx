// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* NAVIGATION */}
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="text-xl font-semibold">Fisayo Ariyo</h1>
        <nav className="space-x-4">
          <a href="#poetry" className="hover:underline">
            Poetry
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#subscribe" className="hover:underline">
            Subscribe
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="text-center py-24 px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          A Quiet Space for Reflection & Creation
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.”
        </p>
      </section>

      {/* POETRY SECTION - HORIZONTAL SCROLL PREVIEW */}
      <section id="poetry" className="px-6 py-20 bg-gray-50">
        <h3 className="text-2xl font-bold mb-6">Poetry</h3>
        <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {[
            {
              id: 1,
              title: "Midnight Reverie",
              excerpt:
                "A whisper under pale light, shadows dance and memories take flight...",
            },
            {
              id: 2,
              title: "Echoes of Yesterday",
              excerpt:
                "Faint footsteps on old streets, where nostalgia and hope quietly meet...",
            },
            {
              id: 3,
              title: "Dawn’s First Light",
              excerpt:
                "Breaking dawn unveils new dreams, soft and bright with golden beams...",
            },
            {
              id: 4,
              title: "Silent Conversations",
              excerpt:
                "Between the stars and sleepless minds, words unsaid but hearts aligned...",
            },
            {
              id: 5,
              title: "Fragments of Time",
              excerpt:
                "Pieces scattered on a breeze, moments held with gentle ease...",
            },
            {
              id: 6,
              title: "The Last Ember",
              excerpt:
                "Fading glow of ember’s fire, echoes stir my deep desire...",
            },
          ].map((poem) => (
            <div
              key={poem.id}
              className="min-w-[280px] p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer flex-shrink-0"
            >
              <h4 className="text-xl font-semibold">{poem.title}</h4>
              <p className="text-gray-600 mt-2">{poem.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="px-6 py-20">
        <h3 className="text-2xl font-bold mb-6">Projects</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold">Web Design</h4>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Drumming</h4>
            <p className="text-gray-600 mt-2">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Gadget Store</h4>
            <p className="text-gray-600 mt-2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 py-20 bg-gray-50">
        <h3 className="text-2xl font-bold mb-6">About Me</h3>
        <p className="text-gray-700 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
          ante at lacus tempor ultricies. Integer posuere metus in lorem
          hendrerit, in tincidunt risus semper. Nunc at lectus eu turpis euismod
          suscipit.
        </p>
      </section>

      {/* SUBSCRIBE SECTION */}
      <section id="subscribe" className="px-6 py-20 text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
        <p className="text-gray-600 mb-6">
          Subscribe to receive new poems and updates:
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fisayo Ariyo. All rights reserved.
      </footer>
    </main>
  );
}
