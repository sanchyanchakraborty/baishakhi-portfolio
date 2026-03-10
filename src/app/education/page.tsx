import Navbar from "@/components/Navbar";

export default function Education() {
    return (
        <>
            <Navbar />

            <div className="p-10">
                <h1 className="text-3xl font-bold mb-6">Education</h1>

                <ul className="space-y-4">

                    <li>
                        <b>B.Tech AI & Machine Learning</b><br />
                        MCKV Institute of Engineering (Expected 2026)
                    </li>

                    <li>
                        <b>Diploma in Computer Science</b><br />
                        Technique Polytechnic Institute – 66.2%
                    </li>

                    <li>
                        <b>Higher Secondary</b> – 65%
                    </li>

                    <li>
                        <b>Secondary Examination</b> – 71%
                    </li>

                </ul>
            </div>
        </>
    );
}