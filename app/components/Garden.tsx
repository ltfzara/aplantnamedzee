import { gardenCommunities } from "../data/updates";

export default function Garden() {
    return (
        <section
            id="garden"
            className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#FAF7F0]"
        >
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
                    {gardenCommunities.map((community) => (
                        <div
                            key={community.title}
                            className="rounded-[1.5rem] sm:rounded-[2rem] bg-[#FAF7F0] border border-[#D9D0B8] p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2A3D22]/10 transition-all duration-300"
                        >
                            <span
                                className={`inline-block w-fit rounded-full border px-3 py-1 text-xs tracking-[0.12em] uppercase mb-5 ${community.color}`}
                            >
                                {community.status}
                            </span>

                            <h3 className="text-xl sm:text-2xl text-[#2A3D22] mb-4">
                                {community.title}
                            </h3>

                            <p className="text-[#5C7A4E] leading-relaxed mb-5">
                                {community.text}
                            </p>

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
    );
}