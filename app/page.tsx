import Image from "next/image";
import Bookshelf from "./components/Bookshelf";
import TinyObservations from "./components/TinyObservations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#2A3D22]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F0]/90 backdrop-blur-md border-b border-[#D9D0B8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <a
            href="#home"
            className="text-[#2A3D22] text-lg hover:text-[#C97C45] transition-colors duration-300"
          >
            A Plant Named Zee
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-5 text-sm text-[#5C7A4E]">
            <a href="#about" className="hover:text-[#C97C45] transition-colors duration-300">
              About
            </a>
            <a href="#current-season" className="hover:text-[#C97C45] transition-colors duration-300">
              Current Season
            </a>
            <a href="#garden" className="hover:text-[#C97C45] transition-colors duration-300">
              Garden
            </a>
            <a href="#observations" className="hover:text-[#C97C45] transition-colors duration-300">
              Tiny Observations
            </a>
            <a href="#bookshelf" className="hover:text-[#C97C45] transition-colors duration-300">
              Bookshelf
            </a>
            <a href="#tea" className="hover:text-[#C97C45] transition-colors duration-300">
              Tea
            </a>
            <a href="#cocreation" className="hover:text-[#C97C45] transition-colors duration-300">
              Co-Creation
            </a>
          </div>

          {/* Mobile menu */}
          <a
            href="#mobile-menu"
            className="md:hidden rounded-full border border-[#D9D0B8] px-4 py-2 text-sm text-[#3E6B32]"
          >
            Menu
          </a>
        </div>
      </nav>

      {/* MOBILE MENU PAGE */}
      <section
        id="mobile-menu"
        className="fixed inset-0 z-[9999] hidden target:flex bg-[#5C7A4E] px-8 pt-10 pb-10 flex-col text-[#FAF7F0] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-16">
          <p className="text-[#FAF7F0] text-lg">
            A Plant Named Zee
          </p>

          <a
            href="#home"
            className="rounded-full border border-[#FAF7F0]/30 px-4 py-2 text-sm text-[#FAF7F0]"
          >
            Close
          </a>
        </div>

        <p className="text-sm tracking-[0.2em] uppercase text-[#C5D9A4] text-center">
          Wander through the garden
        </p>

        <div className="flex flex-col items-center text-center py-10">

          <div className="flex flex-col items-center justify-center flex-1 gap-5 text-[2.2rem] text-[#FAF7F0] text-center">
            <a href="#about">About</a>

            <a href="#current-season">
              Current Season
            </a>

            <a href="#garden">
              Garden
            </a>

            <a href="#observations">
              Tiny Observations
            </a>

            <a href="#bookshelf">
              Bookshelf
            </a>

            <a href="#tea">
              Tea
            </a>

            <a href="#cocreation">
              Co-Creation
            </a>
          </div>
        </div>
        <p className="mt-auto text-center text-[#C5D9A4]">
          tap a corner of the garden 🌱
        </p>
      </section>

      {/* HERO */}
      <section
        id="home"
        className="relative scroll-mt-24 min-h-screen overflow-hidden bg-[#FAF7F0]"
      >
        {/* Desktop background image */}
        <Image
          src="/hero_3.png"
          alt="Zee sitting in a warm digital garden"
          width={2400}
          height={1400}
          priority
          className="hidden lg:block absolute inset-0 h-full w-full object-cover object-[68%_center]"
        />

        {/* Desktop overlays */}
        <div className="hidden lg:block absolute inset-0 bg-[#FAF7F0]/25" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#FAF7F0]/95 via-[#FAF7F0]/65 to-transparent" />

        {/* Mobile content */}
        <div className="lg:hidden px-6 pt-28 pb-14 min-h-screen flex flex-col">
          <div>
            <p className="hidden sm:block mb-4 text-xl tracking-wide text-[#2A3D22]">
              A Plant Named Zee
            </p>

            <h1 className="text-[2.7rem] leading-[1.02] font-light text-[#2A3D22]">
              Building &
              <br />
              learning in public.
            </h1>

            <p className="mt-6 text-base text-[#5C7A4E] leading-relaxed">
              A messy, hopeful, unfinished garden for building communities and growing
              ideas.
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] overflow-hidden border border-[#D9D0B8] shadow-lg shadow-[#2A3D22]/10">
            <Image
              src="/hero_3.png"
              alt="Zee sitting in a warm digital garden"
              width={1200}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          <a
            href="#about"
            className="mt-8 mx-auto inline-flex items-center rounded-full bg-[#3E6B32] px-7 py-3 text-[#FAF7F0] shadow-md shadow-[#2A3D22]/10"
          >
            Enter the garden ↓
          </a>

          <p className="mt-4 text-center text-sm text-[#5C7A4E]">
            scroll to wander through the garden
          </p>
        </div>

        {/* Desktop content */}
        <div className="hidden lg:flex relative z-10 min-h-screen items-center px-20 pt-28 pb-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-2xl tracking-wide text-[#2A3D22]">
              A Plant Named Zee
            </p>

            <h1 className="text-7xl leading-[0.95] font-light text-[#2A3D22]">
              Building &
              <br />
              learning in public.
            </h1>

            <p className="mt-8 text-xl text-[#5C7A4E] leading-relaxed max-w-xl">
              A messy, hopeful, unfinished garden for building communities and growing ideas.
            </p>

            <a
              href="#about"
              className="inline-flex items-center mt-10 rounded-full border border-[#3E6B32] bg-[#FAF7F0]/60 backdrop-blur-sm px-7 py-3 text-[#3E6B32] hover:bg-[#3E6B32] hover:text-[#FAF7F0] transition-all duration-300"
            >
              Come into the garden →
            </a>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#FAF7F0]" />
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#FAF7F0]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[#5C7A4E] mb-4">
              About the Garden
            </p>

            <h2 className="text-3xl lg:text-4xl leading-tight text-[#2A3D22] mb-6">
              What’s growing here?
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-[#5C7A4E] border-l border-[#D9D0B8] pl-8">
              <p className="text-2xl leading-relaxed text-[#2A3D22]">
                A Plant Named Zee is my digital garden.
              </p>

              <p>
                A place for building communities, growing ideas, learning out loud,
                and documenting the messy middle of figuring things out.
              </p>

              <p>
                Here, you’ll find tiny observations, experiments, books, founder moments,
                and things I’m learning along the way.
              </p>

              <p className="text-[#3E6B32]">You’re welcome in the garden.</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] overflow-hidden">
            <Image
              src="/about_new0.png"
              alt="Zee working in a warm thoughtful room"
              width={1000}
              height={1000}
              className="w-[92%] mx-auto h-auto object-contain rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* CURRENT SEASON */}
      <section
        id="current-season"
        className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#2A3D22] text-[#FAF7F0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-[#C5D9A4] mb-4">
            Current Season
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            What I’m tending to these days
          </h2>

          <p className="text-[#FAF7F0]/80 max-w-2xl leading-relaxed mb-14 text-lg">
            Right now, I’m tending to two questions: how communities can create
            more value from within, and how non-technical builders can use AI to
            turn ideas into real things.
          </p>

          <div className="space-y-10">
            <div className="border-l-2 border-[#C5D9A4] pl-6">
              <p className="text-[#C5D9A4] text-sm uppercase tracking-[0.2em] mb-2">
                Growing
              </p>
              <h3 className="text-2xl mb-3">Science Factory & contribution systems</h3>
              <p className="text-[#FAF7F0]/80 leading-relaxed max-w-3xl">
                Exploring creator loops and SF.Creators — ways for members to move
                from consuming to contributing and creating value together.
              </p>
            </div>

            <div className="border-l-2 border-[#C5D9A4] pl-6">
              <p className="text-[#C5D9A4] text-sm uppercase tracking-[0.2em] mb-2">
                Learning
              </p>
              <h3 className="text-2xl mb-3">AI tools, entrepreneurship & leverage</h3>
              <p className="text-[#FAF7F0]/80 leading-relaxed max-w-3xl">
                Learning how to use AI tools effectively as a non-technical entrepreneur —
                not just vibe coding, but turning ideas into useful experiments faster.
              </p>
            </div>

            <div className="border-l-2 border-[#C5D9A4] pl-6">
              <p className="text-[#C5D9A4] text-sm uppercase tracking-[0.2em] mb-2">
                Planting
              </p>
              <h3 className="text-2xl mb-3">Communities for founders and builders</h3>
              <p className="text-[#FAF7F0]/80 leading-relaxed max-w-3xl">
                Slowly shaping ideas for spaces where founders, women builders,
                and solopreneurs can feel less alone while building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE GARDEN */}
      <section id="garden" className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#FAF7F0]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-[#5C7A4E] mb-4">
            The Garden
          </p>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#2A3D22] leading-tight">
              Communities I’m growing.
            </h2>

            <p className="text-lg leading-relaxed text-[#5C7A4E] max-w-xl">
              Communities I’m building,
              <br />
              nurturing, or quietly planting
              <br />
              the seeds for.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                status: "Growing · Year 3",
                title: "Science Factory",
                text: "An experimental community for Gen Z exploring curiosity, identity, soft skills, and life beyond traditional definitions of success.",
                detail: "Currently working on creator loops and SF.Creators to help members move from consuming to contributing.",
                color: "bg-[#EDF4E5] text-[#3E6B32] border-[#C5D9A4]",
                url: "#",
              },
              {
                status: "Seedling",
                title: "Women Founders",
                text: "A community in progress for women founders to build, learn, and feel less alone while navigating entrepreneurship.",
                detail: "Still shaping the first version and listening for what kind of space is truly needed.",
                color: "bg-[#FBF3E4] text-[#8A6020] border-[#E8CFA0]",
                url: "#",
              },
              {
                status: "Planting",
                title: "Solopreneurs",
                text: "Exploring the idea of a community for people building things mostly alone — founders, creators, and curious builders.",
                detail: "A future space for support, accountability, and thoughtful building without pretending everything is easy.",
                color: "bg-[#EEF2F0] text-[#3D5C50] border-[#B4CECC]",
                url: "#",
              },
            ].map((community) => (
              <div
                key={community.title}
                className="rounded-[1.5rem] sm:rounded-[2rem] bg-[#FAF7F0] border border-[#D9D0B8] p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2A3D22]/10 transition-all duration-300"
              >
                <span
                  className={`inline-block w-fit rounded-full border px-3 py-1 text-xs tracking-[0.12em] uppercase mb-5 ${community.color}`}
                >
                  {community.status}
                </span>

                <h3 className="text-xl sm:text-2xl text-[#2A3D22] mb-4">{community.title}</h3>

                <p className="text-[#5C7A4E] leading-relaxed mb-5">{community.text}</p>

                <p className="text-[#5C7A4E]/80 leading-relaxed text-sm mb-6">
                  {community.detail}
                </p>

                <a
                  href={community.url}
                  className="mt-auto text-[#3E6B32] border-b border-[#3E6B32] w-fit hover:text-[#C97C45] hover:border-[#C97C45] transition-colors duration-300"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TinyObservations />

      <Bookshelf />

      {/* TEA */}
      <section id="tea" className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#2A3D22] text-[#FAF7F0] overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[#C5D9A4] mb-4">
              Tea in the Garden
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
              A warm conversation for messy next steps.
            </h2>

            <p className="text-lg leading-relaxed text-[#FAF7F0]/85 max-w-2xl">
              If you’re building a community, exploring an idea, navigating founder
              uncertainty, or simply trying to make sense of a messy next step — I’d
              be happy to sit with you in the garden.
            </p>

            <p className="mt-6 text-[#C5D9A4]">
              First tea: 40 minutes, free. After that, we can decide what support looks like.
            </p>

            <a
              href="mailto:zahraa.latifii@gmail.com"
              className="inline-block mt-10 rounded-full bg-[#C97C45] text-[#FAF7F0] px-7 py-3 hover:scale-105 transition-transform duration-300"
            >
              Book Tea →
            </a>
          </div>

          <div className="relative flex justify-center items-center min-h-[250px] lg:min-h-[360px] scale-75 sm:scale-90 lg:scale-100 -mt-10 lg:mt-0">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-5 opacity-70">
              <div className="h-24 w-3 rounded-full border-l-2 border-[#C5D9A4] animate-pulse" />
              <div className="h-28 w-3 rounded-full border-l-2 border-[#FAF7F0] animate-pulse" />
              <div className="h-20 w-3 rounded-full border-l-2 border-[#C5D9A4] animate-pulse" />
            </div>

            <div className="absolute bottom-10 w-[340px] h-12 rounded-full bg-[#C5D9A4]/25" />

            <div className="relative mt-20 w-[300px] h-[190px] rounded-b-[5rem] rounded-t-[1.5rem] bg-[#FAF7F0] shadow-2xl shadow-black/20">
              <div className="absolute top-5 left-8 right-8 h-8 rounded-full bg-[#C97C45]/55" />
              <div className="absolute right-[-58px] top-[45px] w-24 h-24 rounded-full border-[18px] border-[#FAF7F0]" />

              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-[#2A3D22] text-2xl">Tea</p>
                <p className="text-[#5C7A4E] text-sm mt-1">in the garden</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CO-CREATION */}
      <section id="cocreation" className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#FAF7F0]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-[#5C7A4E] mb-4">
            Co-Creation
          </p>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#2A3D22] leading-tight">
              Ideas looking
              <br />
              for the right people.
            </h2>

            <p className="text-lg leading-relaxed text-[#5C7A4E] max-w-xl">
              Some ideas need more than motivation. They need the right mix of lived
              experience, technical skill, research, and care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                label: "Looking for co-founders",
                title: "AI companion for Alzheimer’s caregivers",
                text: "An AI assistant idea for supporting Alzheimer’s caregivers through emotional, practical, and daily caregiving challenges.",
                people: [
                  "Neuroscience / Alzheimer’s researcher",
                  "Caregiver psychologist or mental health expert",
                  "Technical co-founder interested in health-tech and AI",
                ],
                badge: "bg-[#EDF4E5] text-[#3E6B32] border-[#C5D9A4]",
              },
              {
                label: "Looking for collaborators",
                title: "AI companion for deaf people in emergencies",
                text: "A raw accessibility idea for helping deaf people communicate, understand, or respond faster in emergency situations.",
                people: [
                  "Technical builder interested in AI and accessibility",
                  "Someone familiar with sign language / translation systems",
                  "People with lived experience in the deaf community",
                ],
                badge: "bg-[#EEF2F0] text-[#3D5C50] border-[#B4CECC]",
              },
            ].map((idea) => (
              <div
                key={idea.title}
                className="rounded-[2rem] bg-[#FAF7F0] border border-[#D9D0B8] p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2A3D22]/10 transition-all duration-300"
              >
                <span className={`inline-block rounded-full border px-3 py-1 text-xs tracking-[0.12em] uppercase mb-5 ${idea.badge}`}>
                  {idea.label}
                </span>

                <h3 className="text-xl sm:text-2xl text-[#2A3D22] mb-4">{idea.title}</h3>

                <p className="text-[#5C7A4E] leading-relaxed mb-6">{idea.text}</p>

                <div className="space-y-2 text-sm text-[#5C7A4E] leading-relaxed mb-6">
                  <p>Looking for:</p>
                  {idea.people.map((person) => (
                    <p key={person}>• {person}</p>
                  ))}
                </div>

                <a
                  href="mailto:hello@example.com"
                  className="text-[#3E6B32] border-b border-[#3E6B32] hover:text-[#C97C45] hover:border-[#C97C45] transition-colors duration-300"
                >
                  Explore this idea →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BECOMING */}
      <section className="px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#5C7A4E] text-[#FAF7F0]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-[1.5rem] overflow-hidden border border-[#FAF7F0]/15">
            <Image
              src="/nietzsche.png"
              alt="Illustration inspired by Nietzsche's quote about chaos and dancing stars"
              width={1200}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>

          <div>
            <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#C5D9A4] mb-5">
              On Becoming
            </p>

            <blockquote className="text-[1.8rem] sm:text-[2.2rem] lg:text-4xl leading-[1.28] tracking-[-0.01em] max-w-[290px] sm:max-w-xl">
              “One must still have chaos in oneself to be able to give birth to a dancing star.”
            </blockquote>

            <p className="mt-4 text-base sm:text-lg text-[#C5D9A4]">— Friedrich Nietzsche</p>

            <p className="mt-8 text-base sm:text-lg leading-[1.9] text-[#FAF7F0]/85 max-w-md">
              There’s something beautiful about realizing how much you still don’t
              know. Especially now, when technology changes faster than certainty
              can keep up. Maybe chaos isn’t the problem. Maybe learning how to
              grow inside it is.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 lg:px-20 py-12 bg-[#FAF7F0] text-[#2A3D22]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <p>A Plant Named Zee</p>
          <p className="text-sm text-[#5C7A4E]">
            Messy. Hopeful. Unfinished. Come back soon — something might have grown.
          </p>
        </div>
      </footer>
    </main>
  );
}