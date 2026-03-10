import Navbar from "@/components/Navbar";

export default function Experience() {
    return (
        <>
            <Navbar />

            <div className="p-10">
                <h1 className="text-3xl font-bold mb-6">Experience</h1>

                <h2 className="text-xl font-semibold">
                    Financial Advisor – HDFC Life Insurance
                </h2>

                <ul className="list-disc ml-6 mt-3">
                    <li>Handled customer calls and meetings</li>
                    <li>Resolved policy and service queries</li>
                    <li>Provided financial solutions</li>
                    <li>Maintained client records</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">
                    Cyber Security Intern – Euphoria GenX
                </h2>

                <ul className="list-disc ml-6 mt-3">
                    <li>Learned cybersecurity fundamentals</li>
                    <li>Worked with IT systems</li>
                    <li>Developed analytical troubleshooting skills</li>
                </ul>
            </div>
        </>
    );
}