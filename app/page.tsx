import Header from "@/components/Header";
import PoemCarousel from "@/components/PoemCarousel";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />

      <div className="pt-28 px-4 max-w-6xl mx-auto space-y-16">
        <section className="h-[80vh] flex flex-col justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My Creative Space
          </h1>
          <p className="text-lg text-gray-600">Reflection. Nostalgia. Hope.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <PoemCarousel />
        </section>

        <section id="hobbies">
          <h2 className="text-2xl font-bold mb-4">Other Hobbies</h2>
          <p>Drumming, web design, and running a gadget store...</p>
        </section>
      </div>
    </main>
  );
}
