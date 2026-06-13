import Image from "next/image";
import { about } from "../data/updates";

export default function About() {
    return (
        <section
            id="about"
            className="scroll-mt-24 px-6 sm:px-8 lg:px-20 py-20 lg:py-28 bg-[#FAF7F0]"
        >
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <p className="text-sm tracking-[0.2em] uppercase text-[#5C7A4E] mb-4">
                        {about.eyebrow}
                    </p>

                    <h2 className="text-3xl lg:text-4xl leading-tight text-[#2A3D22] mb-6">
                        {about.title}
                    </h2>

                    <div className="space-y-5 text-lg leading-relaxed text-[#5C7A4E] border-l border-[#D9D0B8] pl-8">
                        <p className="text-2xl leading-relaxed text-[#2A3D22]">
                            {about.intro}
                        </p>

                        <p>{about.paragraph1}</p>

                        <p>{about.paragraph2}</p>

                        <p className="text-[#3E6B32]">
                            {about.closing}
                        </p>
                    </div>
                </div>

                <div className="rounded-[1.5rem] overflow-hidden">
                    <Image
                        src="/about_new0.png"
                        alt="Zee working in a warm thoughtful room"
                        width={1000}
                        height={1000}
                        className="w-[92%] mx-auto h-auto object-contain rounded-[2rem]"
                    />
                </div>
            </div>
        </section>
    );
}