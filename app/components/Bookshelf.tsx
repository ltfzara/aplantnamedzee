"use client";

import { useState } from "react";

const books = [
    {
        title: "The Hard Thing About Hard Things",
        short: "Hard Things",
        author: "Ben Horowitz",
        rating: "Goodreads avg: about 4.18",
        overview:
            "A candid book about the hard, messy parts of building and leading a company.",
        color: "bg-[#2A3D22]",
        h: "h-[190px] sm:h-[250px] lg:h-[340px]",
        w: "w-[82px] sm:w-[110px] lg:w-[150px]",
    },
    {
        title: "People Powered",
        short: "People Powered",
        author: "Jono Bacon",
        rating: "Goodreads avg: about 3.83",
        overview:
            "A book about how communities create value, belonging, contribution, and meaningful participation.",
        color: "bg-[#3E6B32]",
        h: "h-[215px] sm:h-[280px] lg:h-[380px]",
        w: "w-[88px] sm:w-[120px] lg:w-[160px]",
    },
    {
        title: "The Mom Test",
        short: "The Mom Test",
        author: "Rob Fitzpatrick",
        rating: "Goodreads avg: about 4.36",
        overview:
            "A practical guide to asking better customer questions and avoiding false validation.",
        color: "bg-[#C97C45]",
        h: "h-[175px] sm:h-[230px] lg:h-[310px]",
        w: "w-[78px] sm:w-[105px] lg:w-[145px]",
    },
];

export default function Bookshelf() {
    const [openBook, setOpenBook] = useState<number | null>(null);

    return (
        <section
            id="bookshelf"
            className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#E8CFA0]"
        >
            <div className="max-w-6xl mx-auto">
                <p className="text-sm tracking-[0.2em] uppercase text-[#5C7A4E] mb-4">
                    Bookshelf
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#2A3D22] leading-tight mb-5">
                    Things shaping
                    <br />
                    how I think.
                </h2>

                <p className="text-[#5C7A4E] leading-relaxed max-w-md mb-10">
                    Books I’m currently reading, borrowing ideas from, arguing with,
                    and slowly growing through.
                </p>

                <div className="relative mx-auto max-w-3xl pt-20 lg:pt-32">
                    {/* review card */}
                    {openBook !== null && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+1rem)] z-30 w-[88vw] max-w-[300px] rounded-[1.3rem] bg-[#FAF7F0] border border-[#D9D0B8] p-5 shadow-xl shadow-[#2A3D22]/10">
                            <p className="text-[#2A3D22] font-medium mb-1">
                                {books[openBook].title}
                            </p>

                            <p className="text-[#5C7A4E] text-sm mb-2">
                                {books[openBook].author}
                            </p>

                            <p className="text-[#C97C45] text-sm mb-3">
                                ★ {books[openBook].rating}
                            </p>

                            <p className="text-[#5C7A4E] text-sm leading-relaxed">
                                {books[openBook].overview}
                            </p>

                            <p className="mt-4 text-xs uppercase tracking-[0.15em] text-[#3E6B32]">
                                Currently Reading
                            </p>
                        </div>
                    )}

                    {/* books */}
                    <div className="flex items-end justify-center gap-2 sm:gap-4">
                        {books.map((book, index) => (
                            <button
                                key={book.title}
                                type="button"
                                onClick={() =>
                                    setOpenBook(openBook === index ? null : index)
                                }
                                className={`${book.color} ${book.h} ${book.w} rounded-t-md shadow-lg shadow-[#2A3D22]/20 ${openBook === index
                                    ? "-translate-y-4"
                                    : "hover:-translate-y-4"
                                    } transition-transform duration-300 flex items-center justify-center`}
                            >
                                <p className="-rotate-90 whitespace-nowrap text-[#FAF7F0] text-xs sm:text-sm lg:text-base tracking-wide">
                                    {book.short}
                                </p>
                            </button>
                        ))}
                    </div>

                    <div className="h-5 lg:h-6 bg-[#8A6020] rounded-full shadow-md mt-1" />
                    <div className="h-3 lg:h-4 bg-[#6F4A22] rounded-b-xl mx-8" />
                </div>
            </div>
        </section>
    );
}