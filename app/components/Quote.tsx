import Image from "next/image";

export default function Quote() {
    return (
        <section className="px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#5C7A4E] text-[#FAF7F0]">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-[1.5rem] overflow-hidden border border-[#FAF7F0]/15">
                    <Image
                        src="/nietzsche.png"
                        alt="Illustration inspired by Nietzsche's quote about chaos and dancing stars"
                        width={1200}
                        height={900}
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div>
                    <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#C5D9A4] mb-5">
                        On Becoming
                    </p>

                    <blockquote className="text-[1.8rem] sm:text-[2.2rem] lg:text-4xl leading-[1.28] tracking-[-0.01em] max-w-[290px] sm:max-w-xl">
                        “One must still have chaos in oneself to be able to give birth to a dancing star.”
                    </blockquote>

                    <p className="mt-4 text-base sm:text-lg text-[#C5D9A4]">
                        — Friedrich Nietzsche
                    </p>

                    <p className="mt-8 text-base sm:text-lg leading-[1.9] text-[#FAF7F0]/85 max-w-md">
                        There’s something beautiful about realizing how much you still don’t
                        know. Especially now, when technology changes faster than certainty
                        can keep up. Maybe chaos isn’t the problem. Maybe learning how to
                        grow inside it is.
                    </p>
                </div>
            </div>
        </section>
    );
}