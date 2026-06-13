"use client";

import { useState } from "react";

const observations = [
    "Belonging is not the same as engagement.",
    "Some ideas need a cave before they need sunlight.",
    "A community should not collapse when the founder gets tired.",
    "People usually leave quietly before they leave loudly.",
    "Sometimes contribution matters more than content.",
    "You don’t need to know code to build something meaningful anymore.",
    "Maybe consistency needs systems, not motivation.",
    "Some people don’t need answers. They need a place to think.",
];

export default function TinyObservations() {
    const [noteIndex, setNoteIndex] = useState(0);

    const goNext = () => {
        setNoteIndex((current) =>
            current === observations.length - 1 ? 0 : current + 1
        );
    };

    const goPrev = () => {
        setNoteIndex((current) =>
            current === 0 ? observations.length - 1 : current - 1
        );
    };

    return (
        <section
            id="observations"
            className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-32 bg-[#EEF2F0] overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                <p className="text-sm tracking-[0.2em] uppercase text-[#5C7A4E] mb-4">
                    Tiny Observations
                </p>

                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#2A3D22] leading-tight max-w-xl">
                        Things I’m learning
                        <br />
                        along the way.
                    </h2>

                    <p className="mt-5 text-[#5C7A4E] max-w-md leading-relaxed">
                        Little lessons, founder thoughts, community realizations, and things
                        I wish someone told me sooner.
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-3xl rounded-[2rem] bg-[#FAF7F0] border border-[#D9D0B8] shadow-lg shadow-[#2A3D22]/10 p-8 sm:p-12 min-h-[300px] flex items-center justify-center">
                        <button
                            type="button"
                            onClick={goPrev}
                            className="absolute left-5 h-11 w-11 rounded-full border border-[#D9D0B8] bg-[#FAF7F0] text-[#5C7A4E] hover:bg-[#3E6B32] hover:text-[#FAF7F0] transition-all"
                        >
                            ←
                        </button>

                        <div className="max-w-xl text-center px-10">
                            <p className="text-[#2A3D22] text-[1.4rem] sm:text-[1.6rem] leading-relaxed">
                                {observations[noteIndex]}
                            </p>

                            <p className="mt-8 text-sm tracking-[0.2em] uppercase text-[#5C7A4E]">
                                field note {noteIndex + 1} / {observations.length}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={goNext}
                            className="absolute right-5 h-11 w-11 rounded-full border border-[#D9D0B8] bg-[#FAF7F0] text-[#5C7A4E] hover:bg-[#3E6B32] hover:text-[#FAF7F0] transition-all"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}