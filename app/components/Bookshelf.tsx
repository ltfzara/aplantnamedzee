"use client";

import { useState } from "react";
import { bookshelf as books } from "../data/updates";

export default function Bookshelf() {
    const [selectedBook, setSelectedBook] = useState<number | null>(null);

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

                {selectedBook === null ? (
                    <div className="relative mx-auto max-w-3xl pt-2 lg:pt-6">
                        <div className="flex items-end justify-center gap-2 sm:gap-4">
                            {books.map((book, index) => (
                                <button
                                    key={book.title}
                                    type="button"
                                    onClick={() => setSelectedBook(index)}
                                    className={`${book.color} ${book.h} ${book.w} rounded-t-md shadow-lg shadow-[#2A3D22]/20 hover:-translate-y-5 hover:rotate-[-1deg] hover:shadow-2xl transition-all duration-300 flex items-center justify-center focus:outline-none`}
                                >
                                    <p className="-rotate-90 whitespace-nowrap text-[#FAF7F0] text-xs sm:text-sm lg:text-base tracking-wide">
                                        {book.short}
                                    </p>
                                </button>
                            ))}
                        </div>

                        <div className="h-5 lg:h-6 bg-[#8A6020] rounded-full shadow-md mt-1" />
                        <div className="h-3 lg:h-4 bg-[#6F4A22] rounded-b-xl mx-8" />

                        <p className="mt-6 text-center text-sm text-[#5C7A4E]">
                            Tap a book to open its note.
                        </p>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <button
                            type="button"
                            onClick={() => setSelectedBook(null)}
                            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D9D0B8] bg-[#FAF7F0]/50 px-5 py-2 text-[#3E6B32] hover:bg-[#3E6B32] hover:text-[#FAF7F0] hover:-translate-x-1 transition-all duration-300"
                        >
                            ← Back to shelf
                        </button>

                        <div className="grid gap-4 lg:grid-cols-[0.35fr_1fr] gap-6 items-stretch">
                            <div
                                className={`${books[selectedBook].color} min-h-[100px] sm:min-h-[180px] lg:min-h-[280px] rounded-[1.5rem] shadow-xl shadow-[#2A3D22]/15 flex items-center justify-center p-6 lg:p-8`}
                            >
                                <p className="text-[#FAF7F0] text-xl sm:text-2xl tracking-wide lg:-rotate-90">
                                    {books[selectedBook].short}
                                </p>
                            </div>

                            <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-[#FAF7F0] border border-[#D9D0B8] p-5 sm:p-7 lg:p-9 shadow-2xl shadow-[#2A3D22]/10 animate-in fade-in slide-in-from-right-3 duration-500">
                                <p className="text-xs uppercase tracking-[0.2em] text-[#5C7A4E] mb-5">
                                    Open book note
                                </p>

                                <h3 className="text-[1.55rem] sm:text-[2rem] lg:text-3xl text-[#2A3D22] mb-2 leading-tight">
                                    {books[selectedBook].title}
                                </h3>

                                <p className="text-[#5C7A4E] mb-4">
                                    {books[selectedBook].author}
                                </p>

                                <p className="text-[#C97C45] mb-6">
                                    ★ {books[selectedBook].rating}
                                </p>

                                <p className="text-[#5C7A4E] leading-relaxed mb-8">
                                    {books[selectedBook].overview}
                                </p>

                                <p className="text-xs uppercase tracking-[0.18em] text-[#3E6B32]">
                                    Currently Reading 🌱
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}