import Navbar from "@/components/Navbar";

export default function Skills() {
    const skills = [
        "Customer Support",
        "Communication",
        "Call Handling",
        "Problem Solving",
        "Teamwork",
        "Active Listening",
        "Time Management",
    ];

    return (
        <>
            <Navbar />

            <div className="p-10">
                <h1 className="text-3xl font-bold mb-6">Skills</h1>

                <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="p-4 border rounded-lg shadow"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}