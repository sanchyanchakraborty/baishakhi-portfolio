import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between p-6 bg-black text-white">
            <h1 className="font-bold text-xl">Baishakhi Mukherjee</h1>

            <div className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/education">Education</Link>
                <Link href="/experience">Experience</Link>
                <Link href="/skills">Skills</Link>
                <Link href="/achievements">Achievements</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}