import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#1f241f]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E8]/80 backdrop-blur-md border-b border-[#4F6B53]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <a href="#home" className="text-[#4F6B53] text-lg hover:text-[#B28D5A] transition-colors duration-300">
            A Plant Named Zee
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm text-[#4F6B53]">
            <a href="#garden" className="hover:text-[#B28D5A] transition-colors duration-300">Garden</a>
            <a href="#observations" className="hover:text-[#B28D5A] transition-colors duration-300">Tiny Observations</a>
            <a href="#bookshelf" className="hover:text-[#B28D5A] transition-colors duration-300">Bookshelf</a>
            <a href="#tea" className="hover:text-[#B28D5A] transition-colors duration-300">Tea</a>
            <a href="#cocreation" className="hover:text-[#B28D5A] transition-colors duration-300">Co-Creation</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative scroll-mt-24 min-h-screen overflow-hidden bg-[#F5F1E8]"
      >
        {/* Background image */}
        <Image
          src="/hero_3.png"
          alt="Zee sitting in a warm digital garden"
          width={2400}
          height={1400}
          priority
          className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
        />

        {/* Warm overlay for readability */}
        <div className="absolute inset-0 bg-[#F5F1E8]/25" />

        {/* Left fade so text can breathe */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1E8]/95 via-[#F5F1E8]/65 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center px-8 lg:px-20 pt-28 pb-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-2xl tracking-wide text-[#4F6B53]">
              A Plant Named Zee
            </p>

            <h1 className="text-5xl lg:text-7xl leading-[0.95] font-light text-[#4F6B53]">
              Building &
              <br />
              learning in public.
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-neutral-700 leading-relaxed max-w-xl">
              A messy, hopeful, unfinished garden for building communities
              and growing ideas.
            </p>

            <a
              href="#about"
              className="inline-flex items-center mt-10 rounded-full border border-[#4F6B53] bg-[#F5F1E8]/50 backdrop-blur-sm px-7 py-3 text-[#4F6B53] hover:bg-[#4F6B53] hover:text-white transition-all duration-300"
            >
              Come into the garden →
            </a>
          </div>
        </div>

        {/* Soft fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F5F1E8]" />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 px-8 lg:px-20 py-28 bg-gradient-to-b from-[#F5F1E8] via-[#F8F4EC] to-[#FFF8EE]"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
              About the Garden
            </p>

            <h2 className="text-3xl lg:text-4xl leading-tight text-[#4F6B53] mb-8">
              What’s growing here?
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-neutral-700 border-l border-[#4F6B53]/20 pl-8">
              <p className="text-2xl leading-relaxed text-[#4F6B53]">
                A Plant Named Zee is my digital garden.
              </p>

              <p>
                A place for building communities, growing ideas, learning out loud,
                and documenting the messy middle of figuring things out.
              </p>

              <p>
                Here, you’ll find tiny observations, experiments, books, founder
                moments, and things I’m learning along the way.
              </p>

              <p className="text-[#4F6B53]">
                You’re welcome in the garden.
              </p>
            </div>
          </div>

          <div className="rounded-[1.5rem] overflow-hidden">
            <Image
              src="/about_new.png"
              alt="Zee working in a warm thoughtful room"
              width={1000}
              height={1000}
              className="w-[92%] mx-auto h-auto object-contain rounded-[2rem]"
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

          <h2 className="text-4xl lg:text-5xl leading-tight mb-6">
            What I’m tending to these days
          </h2>

          <p className="text-[#FFF8EE]/75 max-w-2xl leading-relaxed mb-14 text-lg">
            Right now, I’m tending to two questions: how communities can create more
            value from within, and how non-technical builders can use AI to turn ideas
            into real things.
          </p>

          <div className="space-y-10">
            <div className="border-l-2 border-[#E8DCA8] pl-6">
              <p className="text-[#E8DCA8] text-sm uppercase tracking-[0.2em] mb-2">
                Growing
              </p>
              <h3 className="text-2xl mb-3">Science Factory & contribution systems</h3>
              <p className="text-[#FFF8EE]/80 leading-relaxed max-w-3xl">
                Exploring creator loops and SF.Creators — ways for members to move
                from consuming to contributing and creating value together.
              </p>
            </div>

            <div className="border-l-2 border-[#E8DCA8] pl-6">
              <p className="text-[#E8DCA8] text-sm uppercase tracking-[0.2em] mb-2">
                Learning
              </p>
              <h3 className="text-2xl mb-3">AI tools, entrepreneurship & leverage</h3>
              <p className="text-[#FFF8EE]/80 leading-relaxed max-w-3xl">
                Learning how to use AI tools effectively as a non-technical entrepreneur —
                not just vibe coding, but turning ideas into useful experiments faster.
              </p>
            </div>

            <div className="border-l-2 border-[#E8DCA8] pl-6">
              <p className="text-[#E8DCA8] text-sm uppercase tracking-[0.2em] mb-2">
                Planting
              </p>
              <h3 className="text-2xl mb-3">Communities for founders and builders</h3>
              <p className="text-[#FFF8EE]/80 leading-relaxed max-w-3xl">
                Slowly shaping ideas for spaces where founders, women builders,
                and solopreneurs can feel less alone while building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE GARDEN */}
      <section id="garden" className="scroll-mt-24 px-8 lg:px-20 py-28 bg-[#F4ECE2]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
            The Garden
          </p>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#4F6B53] leading-tight">
              Communities I’m growing.
            </h2>

            <p className="text-lg leading-relaxed text-neutral-700 max-w-xl">
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
                color: "bg-[#DCEFD9] text-[#4F6B53]",
                url: "#",
              },
              {
                status: "Seedling",
                title: "Women Founders",
                text: "A community in progress for women founders to build, learn, and feel less alone while navigating entrepreneurship.",
                detail: "Still shaping the first version and listening for what kind of space is truly needed.",
                color: "bg-[#F9E7E7] text-[#7A4E4E]",
                url: "#",
              },
              {
                status: "Planting",
                title: "Solopreneurs",
                text: "Exploring the idea of a community for people building things mostly alone — founders, creators, and curious builders.",
                detail: "A future space for support, accountability, and thoughtful building without pretending everything is easy.",
                color: "bg-[#FFF1BF] text-[#7A6230]",
                url: "#",
              },
            ].map((community) => (
              <div
                key={community.title}
                className="rounded-[2rem] bg-[#FFF8EE] border border-[#4F6B53]/10 p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4F6B53]/10 transition-all duration-300 flex flex-col"
              >
                <span
                  className={`inline-block w-fit rounded-full px-3 py-1 text-xs tracking-[0.12em] uppercase mb-5 ${community.color}`}
                >
                  {community.status}
                </span>

                <h3 className="text-2xl text-[#4F6B53] mb-4">
                  {community.title}
                </h3>

                <p className="text-neutral-700 leading-relaxed mb-5">
                  {community.text}
                </p>

                <p className="text-neutral-600 leading-relaxed text-sm mb-8">
                  {community.detail}
                </p>

                <a
                  href={community.url}
                  className="mt-auto text-[#4F6B53] border-b border-[#4F6B53] w-fit hover:text-[#B28D5A] hover:border-[#B28D5A] transition-colors duration-300"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TINY OBSERVATIONS */}
      <section id="observations" className="scroll-mt-24 px-8 lg:px-20 py-32 bg-[#F1E8DC] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
            Tiny Observations
          </p>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl text-[#4F6B53] leading-tight max-w-xl">
                Things I’m learning
                <br />
                along the way.
              </h2>

              <p className="mt-5 text-neutral-700 max-w-md leading-relaxed">
                Little lessons, founder thoughts, community realizations,
                and things I wish someone told me sooner.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              ["Belonging is not the same as engagement.", "bg-[#F9E7E7]", "rotate-[-2deg]"],
              ["Some ideas need a cave before they need sunlight.", "bg-[#FFF1BF]", "rotate-[1deg]"],
              ["A community should not collapse when the founder gets tired.", "bg-[#DCEFD9]", "rotate-[-1deg]"],
              ["People usually leave quietly before they leave loudly.", "bg-[#E8E1F7]", "rotate-[2deg]"],
              ["Sometimes contribution matters more than content.", "bg-[#FDE8C9]", "rotate-[-2deg]"],
              ["You don’t need to know code to build something meaningful anymore.", "bg-[#DDECF5]", "rotate-[1deg]"],
              ["Maybe consistency needs systems, not motivation.", "bg-[#F9E7E7]", "rotate-[-1deg]"],
              ["Some people don’t need answers. They need a place to think.", "bg-[#FFF1BF]", "rotate-[2deg]"],
            ].map(([text, color, rotate], index) => (
              <div
                key={index}
                className={`${color} ${rotate} min-h-[190px] rounded-[1.5rem] p-6 shadow-md hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-default flex items-center`}
              >
                <p className="text-[#2f352f] leading-relaxed text-[15px]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKSHELF */}
      <section
        id="bookshelf"
        className="scroll-mt-24 px-8 lg:px-20 py-28 bg-[#D8C2A4]"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
            Bookshelf
          </p>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl text-[#4F6B53] leading-tight">
                Things shaping
                <br />
                how I think.
              </h2>

              <p className="mt-5 text-neutral-700 leading-relaxed max-w-md">
                Books I’m currently reading, borrowing ideas from, arguing with,
                and slowly growing through.
              </p>
            </div>

            <div className="bg-[#A67C52] rounded-[2rem] p-8 shadow-xl shadow-black/10">
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    title: "The Hard Thing About Hard Things",
                    status: "Currently Reading",
                    note: "Learning how founders survive uncertainty, hard decisions, and messy realities.",
                  },
                  {
                    title: "People Powered",
                    status: "Currently Reading",
                    note: "Helping me rethink contribution, belonging, and community design.",
                  },
                  {
                    title: "The Mom Test",
                    status: "Currently Reading",
                    note: "Trying to ask better questions and stop falling in love with assumptions.",
                  },
                ].map((book) => (
                  <div
                    key={book.title}
                    className="bg-[#FFF8EE] rounded-[1.5rem] p-5 flex flex-col min-h-[320px] hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="bg-[#4F6B53] text-[#FFF8EE] rounded-xl p-5 mb-5 flex items-center justify-center min-h-[150px] text-center">
                      <p className="text-lg leading-snug">
                        {book.title}
                      </p>
                    </div>

                    <span className="text-xs uppercase tracking-[0.15em] text-[#B28D5A] mb-3">
                      {book.status}
                    </span>

                    <p className="text-neutral-700 text-sm leading-relaxed">
                      {book.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEA */}
      <section
        id="tea"
        className="scroll-mt-24 px-8 lg:px-20 py-28 bg-[#4F6B53] text-[#FFF8EE] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[#E8DCA8] mb-4">
              Tea in the Garden
            </p>

            <h2 className="text-4xl lg:text-5xl mb-8 leading-tight">
              A warm conversation for messy next steps.
            </h2>

            <p className="text-lg leading-relaxed text-[#FFF8EE]/85 max-w-2xl">
              If you’re building a community, exploring an idea, navigating founder
              uncertainty, or simply trying to make sense of a messy next step — I’d
              be happy to sit with you in the garden.
            </p>

            <p className="mt-6 text-[#E8DCA8]">
              First tea: 40 minutes, free. After that, we can decide what support
              looks like.
            </p>

            <a
              href="mailto:zahraa.latifii@gmail.com"
              className="inline-block mt-10 rounded-full bg-[#FFF8EE] text-[#4F6B53] px-7 py-3 hover:scale-105 transition-transform duration-300"
            >
              Book Tea →
            </a>
          </div>

          <div className="relative flex justify-center items-center min-h-[360px]">
            {/* steam */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-5 opacity-70">
              <div className="h-24 w-3 rounded-full border-l-2 border-[#E8DCA8] animate-pulse" />
              <div className="h-28 w-3 rounded-full border-l-2 border-[#FFF8EE] animate-pulse" />
              <div className="h-20 w-3 rounded-full border-l-2 border-[#E8DCA8] animate-pulse" />
            </div>

            {/* saucer */}
            <div className="absolute bottom-10 w-[340px] h-12 rounded-full bg-[#E8DCA8]/30" />

            {/* cup */}
            <div className="relative mt-20 w-[300px] h-[190px] rounded-b-[5rem] rounded-t-[1.5rem] bg-[#FFF8EE] shadow-2xl shadow-black/20">
              <div className="absolute top-5 left-8 right-8 h-8 rounded-full bg-[#B28D5A]/50" />

              {/* cup handle */}
              <div className="absolute right-[-58px] top-45px w-24 h-24 rounded-full border-[18px] border-[#FFF8EE]" />

              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-[#4F6B53] text-2xl">Tea</p>
                <p className="text-[#4F6B53]/70 text-sm mt-1">in the garden</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CO-CREATION */}
      <section
        id="cocreation"
        className="scroll-mt-24 px-8 lg:px-20 py-28 bg-[#F3ECE1]"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-[#4F6B53] mb-4">
            Co-Creation
          </p>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 mb-14">
            <h2 className="text-4xl lg:text-5xl text-[#4F6B53] leading-tight">
              Ideas looking
              <br />
              for the right people.
            </h2>

            <p className="text-lg leading-relaxed text-neutral-700 max-w-xl">
              Some ideas need more than motivation. They need the right mix of lived
              experience, technical skill, research, and care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-[2rem] bg-[#F5F1E8] border border-[#4F6B53]/10 p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4F6B53]/10 transition-all duration-300">
              <span className="inline-block rounded-full bg-[#DCEFD9] text-[#4F6B53] px-3 py-1 text-xs tracking-[0.12em] uppercase mb-5">
                Looking for co-founders
              </span>

              <h3 className="text-2xl text-[#4F6B53] mb-4">
                AI companion for Alzheimer’s caregivers
              </h3>

              <p className="text-neutral-700 leading-relaxed mb-6">
                An AI assistant idea for supporting Alzheimer’s caregivers through
                emotional, practical, and daily caregiving challenges.
              </p>

              <div className="space-y-2 text-sm text-neutral-600 leading-relaxed mb-8">
                <p>Looking for:</p>
                <p>• Neuroscience / Alzheimer’s researcher</p>
                <p>• Caregiver psychologist or mental health expert</p>
                <p>• Technical co-founder interested in health-tech and AI</p>
              </div>

              <a
                href="mailto:hello@example.com"
                className="text-[#4F6B53] border-b border-[#4F6B53] hover:text-[#B28D5A] hover:border-[#B28D5A] transition-colors duration-300"
              >
                Explore this idea →
              </a>
            </div>

            <div className="rounded-[2rem] bg-[#F5F1E8] border border-[#4F6B53]/10 p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4F6B53]/10 transition-all duration-300">
              <span className="inline-block rounded-full bg-[#E8E1F7] text-[#5E527A] px-3 py-1 text-xs tracking-[0.12em] uppercase mb-5">
                Looking for collaborators
              </span>

              <h3 className="text-2xl text-[#4F6B53] mb-4">
                AI companion for deaf mute people in emergencies
              </h3>

              <p className="text-neutral-700 leading-relaxed mb-6">
                A raw accessibility idea for helping deaf mute people communicate,
                understand, or respond faster in emergency situations.
              </p>

              <div className="space-y-2 text-sm text-neutral-600 leading-relaxed mb-8">
                <p>Looking for:</p>
                <p>• Technical builder interested in AI and accessibility</p>
                <p>• Someone familiar with sign language / translation systems</p>
                <p>• People with lived experience in the deaf community</p>
              </div>

              <a
                href="mailto:hello@example.com"
                className="text-[#4F6B53] border-b border-[#4F6B53] hover:text-[#B28D5A] hover:border-[#B28D5A] transition-colors duration-300"
              >
                Explore this idea →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BECOMING */}
      <section className="px-8 lg:px-20 py-28 bg-[#55614F] text-[#FFF8EE]">
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
              “One must still have chaos in oneself to be able to give birth to a dancing star.”
            </blockquote>

            <p className="mt-4 text-[#E8DCA8]">— Friedrich Nietzsche</p>

            <p className="mt-8 text-lg leading-relaxed text-[#FFF8EE]/75">
              There’s something beautiful about realizing how much you still don’t
              know. Especially now, when technology changes faster than certainty
              can keep up. Maybe chaos isn’t the problem. Maybe learning how to
              grow inside it is.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 lg:px-20 py-12 bg-[#F5F1E8] text-[#4F6B53]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <p>A Plant Named Zee</p>
          <p className="text-sm">
            Messy. Hopeful. Unfinished. Come back soon — something might have grown.
          </p>
        </div>
      </footer>
    </main >
  );
}