export default function Navbar() {
    return (
        <>
            {/* NAV */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F0]/75 backdrop-blur-xl border-b border-[#D9D0B8]/60 shadow-[0_6px_30px_rgba(42,61,34,0.04)]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-14 xl:px-20">
                    <a
                        href="#home"
                        className="text-[#2A3D22] text-[1.08rem] tracking-[0.01em] hover:text-[#C97C45] transition-colors duration-300"
                    >
                        A Plant Named Zee
                    </a>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-8 text-[0.95rem] text-[#6B7F6A]">
                        {[
                            ["About", "#about"],
                            ["Current Season", "#current-season"],
                            ["Garden", "#garden"],
                            ["Tiny Observations", "#observations"],
                            ["Bookshelf", "#bookshelf"],
                            ["Tea", "#tea"],
                            ["Co-Creation", "#cocreation"],
                        ].map(([label, href]) => (
                            <a
                                key={label}
                                href={href}
                                className="relative hover:text-[#2A3D22] transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[#C97C45] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu */}
                    <a
                        href="#mobile-menu"
                        className="md:hidden rounded-full border border-[#D9D0B8] px-4 py-2 text-sm text-[#3E6B32]"
                    >
                        Menu
                    </a>
                </div>
            </nav>

            {/* MOBILE MENU PAGE */}
            <section
                id="mobile-menu"
                className="fixed inset-0 z-[9999] hidden target:flex bg-[#5C7A4E] px-8 pt-10 pb-10 flex-col text-[#FAF7F0] overflow-y-auto"
            >
                <div className="flex items-center justify-between mb-16">
                    <p className="text-[#FAF7F0] text-[1.08rem] tracking-[0.01em]">
                        A Plant Named Zee
                    </p>

                    <a
                        href="#home"
                        className="rounded-full border border-[#FAF7F0]/30 px-4 py-2 text-sm text-[#FAF7F0]"
                    >
                        Close
                    </a>
                </div>

                <p className="text-sm tracking-[0.2em] uppercase text-[#C5D9A4] text-center">
                    Wander through the garden
                </p>

                <div className="flex flex-col items-center text-center py-10">
                    <div className="flex flex-col items-center justify-center flex-1 gap-5 text-[2.2rem] text-[#FAF7F0] text-center">
                        {[
                            ["About", "#about"],
                            ["Current Season", "#current-season"],
                            ["Garden", "#garden"],
                            ["Tiny Observations", "#observations"],
                            ["Bookshelf", "#bookshelf"],
                            ["Tea", "#tea"],
                            ["Co-Creation", "#cocreation"],
                        ].map(([label, href]) => (
                            <a key={label} href={href}>
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

                <p className="mt-auto text-center text-[#C5D9A4]">
                    tap a corner of the garden 🌱
                </p>
            </section>
        </>
    );
}