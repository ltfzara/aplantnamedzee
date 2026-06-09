import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#1f241f]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E8]/80 backdrop-blur-md border-b border-[#4F6B53]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <a
            href="#home"
            className="text-[#4F6B53] text-lg hover:text-[#B28D5A] transition-colors duration-300"
          >
            A Plant Named Zee
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm text-[#4F6B53]">
            <a href="#garden" className="hover:text-[#B28D5A] transition-colors duration-300">
              Garden
            </a>
            <a href="#observations" className="hover:text-[#B28D5A] transition-colors duration-300">
              Tiny Observations
            </a>
            <a href="#bookshelf" className="hover:text-[#B28D5A] transition-colors duration-300">
              Bookshelf
            </a>
            <a href="#tea" className="hover:text-[#B28D5A] transition-colors duration-300">
              Tea
            </a>
            <a href="#cocreation" className="hover:text-[#B28D5A] transition-colors duration-300">
              Co-Creation
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
<section
  id="home"
  className="scroll-mt-24 min-h-screen grid lg:grid-cols-[0.9fr_1.1fr] items-center px-8 lg:px-20 pt-28 pb-20 gap-14 bg-[#F5F1E8]"
>
  <div className="max-w-xl">
    <p className="mb-5 text-2xl tracking-wide text-[#4F6B53]">
      A Plant Named Zee
    </p>

    <h1 className="text-4xl lg:text-6xl leading-tight font-light text-[#4F6B53]">
      Building & learning
      <br />
      in public.
    </h1>

    <p className="mt-7 text-lg lg:text-xl text-neutral-700 leading-relaxed">
      A messy, hopeful, unfinished garden of communities, ideas, and becoming.
    </p>

    <a
      href="#about"
      className="inline-block mt-9 rounded-full border border-[#4F6B53] px-6 py-3 text-[#4F6B53] hover:bg-[#4F6B53] hover:text-white transition-all duration-300"
    >
      Come into the garden →
    </a>
  </div>

  <div className="rounded-[2rem] overflow-hidden shadow-xl shadow-[#4F6B53]/10">
    <Image
      src="/hero_new1.png"
      alt="Zee sitting in a warm digital garden"
      width={1400}
      height={900}
      className="w-full max-h-[560px] object-cover object-center"
      priority
    />
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 px-8 lg:px-20 py-28 bg-[#FFF8EE]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
              About the Garden
            </p>

            <h2 className="text-3xl lg:text-4xl leading-tight text-[#4F6B53] mb-8">
              A place for messy, hopeful, unfinished becoming.
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-neutral-700 border-l border-[#4F6B53]/20 pl-8">
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

              <p className="text-[#4F6B53]">You’re welcome in the garden.</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] overflow-hidden">
            <Image
              src="/about_new.png"
              alt="Zee working in a warm thoughtful room"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
            />
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
            {[
              [
                "Currently tending to",
                "Science Factory, a women founders community, a sustainable founder life, and my understanding of communities, systems, and ecosystems.",
              ],
              [
                "Currently learning",
                "How communities grow beyond one person — and how to build systems that don’t collapse when the founder gets tired.",
              ],
              [
                "Currently navigating",
                "The messy middle between uncertainty and possibility.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-t border-[#FFF8EE]/30 pt-6 hover:translate-y-[-4px] transition-transform duration-300"
              >
                <h3 className="text-xl mb-4 text-[#E8DCA8]">{title}</h3>
                <p className="leading-relaxed text-[#FFF8EE]/85">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE GARDEN */}
      <section id="garden" className="scroll-mt-24 px-8 lg:px-20 py-28 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
            The Garden
          </p>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#4F6B53] leading-tight">
              Things I’m actively growing.
            </h2>

            <p className="text-lg leading-relaxed text-neutral-700 max-w-xl">
              These are the communities, ideas, and offers I’m tending right now
              — some are already alive, some are still seedlings, and some are
              teaching me how to build better systems.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid lg:grid-cols-[0.35fr_1fr] gap-8 rounded-[2rem] bg-[#FFF8EE] border border-[#4F6B53]/10 p-8 lg:p-10 hover:shadow-xl hover:shadow-[#4F6B53]/10 transition-all duration-300">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#B28D5A] mb-3">
                  Growing · Year 3
                </p>
                <h3 className="text-3xl text-[#4F6B53]">Science Factory</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-neutral-700 leading-relaxed">
                <p>
                  A community experiment in curiosity, belonging, and collective
                  growth for Gen Z.
                </p>

                <p>
                  What I’m learning: how to make a community more consistent,
                  sustainable, and less dependent on one person.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-[2rem] bg-[#FFF8EE]/80 border border-[#4F6B53]/10 p-8 hover:-translate-y-1 transition-all duration-300">
                <p className="text-sm uppercase tracking-[0.2em] text-[#B28D5A] mb-3">
                  Seedling
                </p>

                <h3 className="text-2xl text-[#4F6B53] mb-4">
                  Women Founders Community
                </h3>

                <p className="text-neutral-700 leading-relaxed">
                  An early attempt to bring women startup founders together to
                  feel less alone, exchange honest lessons, and build alongside
                  one another.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#4F6B53] text-[#FFF8EE] p-8 hover:-translate-y-1 transition-all duration-300">
                <p className="text-sm uppercase tracking-[0.2em] text-[#E8DCA8] mb-3">
                  Sprouting
                </p>

                <h3 className="text-2xl mb-4">Tea in the Garden</h3>

                <p className="leading-relaxed text-[#FFF8EE]/85">
                  Thoughtful conversations for people building communities,
                  exploring ideas, or navigating founder uncertainty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TINY OBSERVATIONS */}
      <section id="observations" className="scroll-mt-24 px-8 lg:px-20 py-28 bg-[#FFF8EE]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
            Tiny Observations
          </p>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <h2 className="text-4xl lg:text-5xl text-[#4F6B53] leading-tight">
              Small notes from building, belonging, and becoming.
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Maybe people don’t leave communities loudly. Sometimes they just stop feeling seen.",
                "A system should not collapse every time the founder gets tired.",
                "Belonging is not the same as engagement.",
                "Some ideas need sunlight. Some need a cave first.",
              ].map((note) => (
                <div
                  key={note}
                  className="bg-[#F5F1E8] p-6 rounded-[1.5rem] border border-[#4F6B53]/10 hover:rotate-[-1deg] transition-transform duration-300"
                >
                  <p className="text-neutral-700 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKSHELF */}
      <section id="bookshelf" className="scroll-mt-24 px-8 lg:px-20 py-28 bg-[#E8DCA8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
            Bookshelf
          </p>

          <h2 className="text-4xl lg:text-5xl text-[#4F6B53] mb-12">
            Books and ideas I’m growing with.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["People Powered", "The Cold Start Problem", "The Art of Gathering"].map(
              (book) => (
                <div
                  key={book}
                  className="bg-[#FFF8EE]/80 p-7 rounded-[1.5rem] border border-[#4F6B53]/10"
                >
                  <p className="text-2xl text-[#4F6B53] mb-3">{book}</p>
                  <p className="text-neutral-700 leading-relaxed">
                    Notes, reflections, and community-building lessons coming
                    soon.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TEA */}
      <section id="tea" className="scroll-mt-24 px-8 lg:px-20 py-28 bg-[#4F6B53] text-[#FFF8EE]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-[#E8DCA8] mb-4">
            Tea in the Garden
          </p>

          <h2 className="text-4xl lg:text-5xl mb-8">
            Sometimes, we all need a thinking partner.
          </h2>

          <p className="text-lg leading-relaxed text-[#FFF8EE]/85 max-w-2xl mx-auto">
            If you’re building a community, exploring an idea, navigating
            founder uncertainty, or simply trying to make sense of a messy next
            step — I’d be happy to sit with you in the garden.
          </p>

          <p className="mt-6 text-[#E8DCA8]">
            First tea: 40 minutes, free. After that, we can decide what support
            looks like.
          </p>

          <a
            href="mailto:zahraaa.latifii@gmail.com"
            className="inline-block mt-10 rounded-full bg-[#FFF8EE] text-[#4F6B53] px-7 py-3 hover:scale-105 transition-transform duration-300"
          >
            Book Tea →
          </a>
        </div>
      </section>

      {/* CO-CREATION */}
      <section id="cocreation" className="scroll-mt-24 px-8 lg:px-20 py-28 bg-[#FFF8EE]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
              Co-Creation
            </p>

            <h2 className="text-4xl lg:text-5xl text-[#4F6B53] mb-6">
              Have an idea that needs a garden?
            </h2>

            <p className="text-lg leading-relaxed text-neutral-700">
              I’m open to thoughtful collaborations around communities, social
              entrepreneurship, ecosystem thinking, learning experiences, and
              spaces where people can grow without performing.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#4F6B53]/15 p-8 bg-[#F5F1E8]">
            <p className="text-neutral-700 leading-relaxed">
              Reach out if you want to build a community, design a meaningful
              gathering, map an ecosystem, invite me to a conversation, or plant
              a seed together.
            </p>

            <a
              href="mailto:zahraa.latifii@gmail.com"
              className="inline-block mt-8 text-[#4F6B53] border-b border-[#4F6B53]"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      {/* BECOMING */}
      <section className="px-8 lg:px-20 py-28 bg-[#1f241f] text-[#FFF8EE]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-[1.5rem] overflow-hidden border border-white/10">
            <Image
              src="/nietzsche.png"
              alt="Illustration inspired by Nietzsche's quote about chaos and dancing stars"
              width={1200}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>

          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[#E8DCA8] mb-6">
              On Becoming
            </p>

            <blockquote className="text-3xl lg:text-4xl leading-relaxed">
              “One must still have chaos in oneself to be able to give birth to
              a dancing star.”
            </blockquote>

            <p className="mt-4 text-[#E8DCA8]">— Friedrich Nietzsche</p>

            <p className="mt-8 text-lg leading-relaxed text-[#FFF8EE]/75">
              I used to think uncertainty meant I was failing. Lately, I’m
              wondering if uncertainty is simply what becoming feels like.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 lg:px-20 py-12 bg-[#F5F1E8] text-[#4F6B53]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <p>A Plant Named Zee</p>
          <p className="text-sm">
            Messy. Hopeful. Unfinished. Come back soon — something might have
            grown.
          </p>
        </div>
      </footer>
    </main>
  );
}