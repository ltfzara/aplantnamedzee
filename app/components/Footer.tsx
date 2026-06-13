import {
    FaLinkedinIn,
    FaTelegramPlane,
    FaInstagram,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="px-8 lg:px-20 py-12 bg-[#FAF7F0] text-[#2A3D22] border-t border-[#D9D0B8]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                <div>
                    <p className="text-lg">
                        A Plant Named Zee
                    </p>

                    <p className="text-base text-[#5C7A4E] max-w-xl leading-relaxed mt-2">
                        Messy. Hopeful. Unfinished.
                        <br />
                        Come back soon — something new might have grown.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://linkedin.com/in/YOUR-LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full border border-[#D9D0B8] flex items-center justify-center text-[#5C7A4E] hover:bg-[#3E6B32] hover:text-[#FAF7F0] transition-all duration-300"
                    >
                        <FaLinkedinIn size={18} />
                    </a>

                    <a
                        href="https://t.me/YOUR-TELEGRAM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full border border-[#D9D0B8] flex items-center justify-center text-[#5C7A4E] hover:bg-[#3E6B32] hover:text-[#FAF7F0] transition-all duration-300"
                    >
                        <FaTelegramPlane size={18} />
                    </a>

                    <a
                        href="https://instagram.com/YOUR-INSTAGRAM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full border border-[#D9D0B8] flex items-center justify-center text-[#5C7A4E] hover:bg-[#3E6B32] hover:text-[#FAF7F0] transition-all duration-300"
                    >
                        <FaInstagram size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}