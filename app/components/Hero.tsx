import Image from "next/image";

export default function Hero() {
    return (
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
                        A messy, hopeful, unfinished garden for building communities and
                        growing ideas.
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
                        A messy, hopeful, unfinished garden for building communities and
                        growing ideas.
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
    );
}