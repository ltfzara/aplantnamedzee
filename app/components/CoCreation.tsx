import { coCreationIdeas } from "../data/updates";

export default function CoCreation() {
    return (
        <section
            id="cocreation"
            className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#FAF7F0]"
        >
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
                    {coCreationIdeas.map((idea) => (
                        <div
                            key={idea.title}
                            className="rounded-[2rem] bg-[#FAF7F0] border border-[#D9D0B8] p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2A3D22]/10 transition-all duration-300"
                        >
                            <span
                                className={`inline-block rounded-full border px-3 py-1 text-xs tracking-[0.12em] uppercase mb-5 ${idea.badge}`}
                            >
                                {idea.label}
                            </span>

                            <h3 className="text-xl sm:text-2xl text-[#2A3D22] mb-4">
                                {idea.title}
                            </h3>

                            <p className="text-[#5C7A4E] leading-relaxed mb-6">
                                {idea.text}
                            </p>

                            <div className="space-y-2 text-sm text-[#5C7A4E] leading-relaxed mb-6">
                                <p>Looking for:</p>

                                {idea.people.map((person) => (
                                    <p key={person}>• {person}</p>
                                ))}
                            </div>

                            <a
                                href="mailto:zahraa.latifii@gmail.com"
                                className="text-[#3E6B32] border-b border-[#3E6B32] hover:text-[#C97C45] hover:border-[#C97C45] transition-colors duration-300"
                            >
                                Explore this idea →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}