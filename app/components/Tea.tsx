import { tea } from "../data/updates";

export default function Tea() {
    return (
        <section
            id="tea"
            className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#2A3D22] text-[#FAF7F0] overflow-hidden"
        >
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
                <div>
                    <p className="text-sm tracking-[0.2em] uppercase text-[#C5D9A4] mb-4">
                        {tea.title}
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
                        {tea.availability}
                    </p>

                    <a
                        href="mailto:zahraa.latifii@gmail.com"
                        className="inline-block mt-10 rounded-full bg-[#C97C45] text-[#FAF7F0] px-7 py-3 hover:scale-105 transition-transform duration-300"
                    >
                        Book Tea →
                    </a>
                </div>

                <div className="relative flex justify-center items-center min-h-[250px] lg:min-h-[360px] scale-75 sm:scale-90 lg:scale-100 -mt-10 lg:mt-0">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-4 opacity-60 pointer-events-none">
                        <div className="steam steam-1" />
                        <div className="steam steam-2" />
                        <div className="steam steam-3" />
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
    );
}