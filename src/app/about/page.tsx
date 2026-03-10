import Navbar from "@/components/Navbar";

export default function About() {
    return (
        <>
            <Navbar />

            <div className="p-10 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">About Me</h1>

                <p>
                    I am Baishakhi Mukherjee, currently pursuing B.Tech in Artificial
                    Intelligence and Machine Learning from MCKV Institute of Engineering.
                    I am passionate about communication, technology, and customer
                    experience.
                </p>

                <p className="mt-4">
                    My professional background includes working as a Financial Advisor
                    with HDFC Life Insurance, where I handled customer interactions,
                    problem resolution, and service support.
                </p>
            </div>
        </>
    );
}