import { currentSeason } from "../data/updates";

export default function CurrentSeason() {
    return (
        <section
            id="current-season"
            className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#2A3D22] text-[#FAF7F0]"
        >
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
                    {currentSeason.map((item) => (
                        <div
                            key={item.title}
                            className="border-l-2 border-[#C5D9A4] pl-6"
                        >
                            <p className="text-[#C5D9A4] text-sm uppercase tracking-[0.2em] mb-2">
                                {item.label}
                            </p>

                            <h3 className="text-2xl mb-3">
                                {item.title}
                            </h3>

                            <p className="text-[#FAF7F0]/80 leading-relaxed max-w-3xl">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}