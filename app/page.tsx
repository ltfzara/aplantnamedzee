import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#1a1a1a]">
      
      {/* HERO */}
      <section className="min-h-screen grid lg:grid-cols-2 items-center px-8 lg:px-20 py-20 gap-14 bg-[#F5F1E8]">
        <div className="max-w-2xl">
          <p className="mb-6 text-2xl tracking-wide text-[#4F6B53]">
            A Plant Named Zee
          </p>

          <h1 className="text-4xl lg:text-6xl leading-tight font-light text-[#4F6B53]">
            Building and learning
            <br />
            in public.
          </h1>

          <p className="mt-8 text-xl text-neutral-700 max-w-xl leading-relaxed">
            A messy, hopeful, unfinished garden of communities, ideas, and
            becoming.
          </p>

          <button className="mt-10 rounded-full border border-[#4F6B53] px-6 py-3 text-[#4F6B53] hover:bg-[#4F6B53] hover:text-white transition-all duration-300">
            Come into the garden →
          </button>
        </div>

        <div className="rounded-[1.5rem] overflow-hidden">
          <Image
            src="/hero_new.png"
            alt="Zee sitting in a warm digital garden"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* ABOUT THE GARDEN */}
      <section className="px-8 lg:px-20 py-28 bg-[#FFF8EE]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.7fr_1.3fr] gap-12 items-start">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
              About the Garden
            </p>

            <h2 className="text-3xl lg:text-4xl leading-tight text-[#4F6B53]">
              A place for messy, hopeful, unfinished becoming.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700 border-l border-[#4F6B53]/20 pl-8">
            <p className="text-2xl leading-relaxed text-[#4F6B53]">
              A Plant Named Zee is my digital garden for building and learning
              in public.
            </p>

            <p>
              Here, you’ll find experiments, tiny observations, books,
              community insights, messy founder moments, and the systems I’m
              learning to build along the way.
            </p>

            <p>I don’t have everything figured out yet.</p>

            <p>
              I’m learning how to build communities, design systems that
              outgrow me, and become the kind of person I haven’t fully met
              yet.
            </p>

            <p className="text-[#4F6B53]">
              You’re welcome in the garden.
            </p>
          </div>
        </div>
      </section>

      {/* CURRENT SEASON */}
      <section className="px-8 lg:px-20 py-28 bg-[#4F6B53] text-[#FFF8EE]">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-[#E8DCA8] mb-4">
            Current Season
          </p>

          <h2 className="text-4xl lg:text-5xl leading-tight mb-12">
            Becoming
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="border-t border-[#FFF8EE]/30 pt-6">
              <h3 className="text-xl mb-4 text-[#E8DCA8]">
                Currently tending to
              </h3>

              <p className="leading-relaxed text-[#FFF8EE]/85">
                Science Factory, a women founders community, a sustainable
                founder life, and my understanding of communities, systems, and
                ecosystems.
              </p>
            </div>

            <div className="border-t border-[#FFF8EE]/30 pt-6">
              <h3 className="text-xl mb-4 text-[#E8DCA8]">
                Currently learning
              </h3>

              <p className="leading-relaxed text-[#FFF8EE]/85">
                How communities grow beyond one person — and how to build
                systems that don’t collapse when the founder gets tired.
              </p>
            </div>

            <div className="border-t border-[#FFF8EE]/30 pt-6">
              <h3 className="text-xl mb-4 text-[#E8DCA8]">
                Currently navigating
              </h3>

              <p className="leading-relaxed text-[#FFF8EE]/85">
                The messy middle between uncertainty and possibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE GARDEN */}
      <section className="px-8 lg:px-20 py-28 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
            The Garden
          </p>

          <h2 className="text-4xl lg:text-5xl text-[#4F6B53] mb-14 max-w-2xl">
            Things I’m actively growing.
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* SCIENCE FACTORY Community */}
            <div className="bg-[#FFF8EE] p-8 rounded-[2rem] border border-[#4F6B53]/10">
              <p className="text-sm uppercase tracking-[0.2em] text-[#B28D5A] mb-4">
                Growing
              </p>

              <h3 className="text-2xl text-[#4F6B53] mb-4">
                Science Factory Community
              </h3>

              <p className="text-neutral-700 leading-relaxed">
                A 3-year experiment in curiosity, belonging, and collective
                growth for Gen Z.
              </p>
            </div>

            {/* WOMEN FOUNDERS */}
            <div className="bg-[#FFF8EE] p-8 rounded-[2rem] border border-[#4F6B53]/10">
              <p className="text-sm uppercase tracking-[0.2em] text-[#B28D5A] mb-4">
                Seedling
              </p>

              <h3 className="text-2xl text-[#4F6B53] mb-4">
                Women Founders Community
              </h3>

              <p className="text-neutral-700 leading-relaxed">
                An early experiment in bringing women startup founders together
                to grow, support, and build alongside one another.
              </p>
            </div>

            {/* TEA */}
            <div className="bg-[#FFF8EE] p-8 rounded-[2rem] border border-[#4F6B53]/10">
              <p className="text-sm uppercase tracking-[0.2em] text-[#B28D5A] mb-4">
                Sprouting
              </p>

              <h3 className="text-2xl text-[#4F6B53] mb-4">
                Tea in the Garden
              </h3>

              <p className="text-neutral-700 leading-relaxed">
                Thoughtful conversations for people building communities,
                exploring ideas, or navigating founder uncertainty.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}