import Navbar from "@/components/Navbar";

export default function Achievements() {
    return (
        <>
            <Navbar />

            <div className="p-10">
                <h1 className="text-3xl font-bold mb-6">Achievements</h1>

                <ul className="list-disc ml-6">
                    <li>Face of the Year – 2020</li>
                    <li>Finalist – Abhinandan Sundari (4th Position)</li>
                    <li>PC Chandra Goldlites Diva – Top 20</li>
                </ul>
            </div>
        </>
    );
}