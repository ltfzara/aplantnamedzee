"use client";

import { useState } from "react";
import { observations } from "../data/updates";

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

                <div className="mb-8 lg:mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#2A3D22] leading-tight max-w-xl">
                        Things I’m learning
                        <br />
                        along the way.
                    </h2>

                    <p className="mt-5 text-[#5C7A4E] max-w-md leading-relaxed">
                        Little lessons, founder thoughts, community realizations, and
                        things I wish someone told me sooner.
                    </p>
                </div>

                {/* MOBILE SWIPE */}
                <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide">
                    {observations.map((text, index) => (
                        <div
                            key={index}
                            className="min-w-[88%] snap-center rounded-[1.5rem] border border-[#D9D0B8] bg-[#FAF7F0] p-6 shadow-sm flex items-center"
                        >
                            <p className="text-[#2A3D22] leading-relaxed text-[15px]">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* DESKTOP NOTEBOOK */}
                <div className="hidden md:flex items-center justify-center">
                    <div className="w-full max-w-2xl lg:max-w-3xl rounded-[2rem] bg-[#FAF7F0] border border-[#D9D0B8] shadow-lg shadow-[#2A3D22]/10 px-5 py-8 sm:px-8 sm:py-10">

                        <div className="flex flex-col items-center text-center">
                            <p className="text-[#2A3D22] text-[1.35rem] sm:text-[1.5rem] lg:text-[1.75rem] leading-relaxed max-w-2xl">
                                {observations[noteIndex]}
                            </p>

                            <p className="mt-8 text-sm tracking-[0.2em] uppercase text-[#5C7A4E]">
                                field note {noteIndex + 1} / {observations.length}
                            </p>

                            <div className="flex items-center gap-4 mt-8">
                                <button
                                    type="button"
                                    onClick={goPrev}
                                    className="h-10 w-10 rounded-full border border-[#D9D0B8] bg-[#FAF7F0] text-[#5C7A4E] text-xl hover:bg-[#3E6B32] hover:text-[#FAF7F0] transition-all duration-300"
                                >
                                    ←
                                </button>

                                <button
                                    type="button"
                                    onClick={goNext}
                                    className="h-12 w-12 rounded-full border border-[#D9D0B8] bg-[#FAF7F0] text-[#5C7A4E] text-xl hover:bg-[#3E6B32] hover:text-[#FAF7F0] transition-all duration-300"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}