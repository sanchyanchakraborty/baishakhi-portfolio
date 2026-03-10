import Navbar from "@/components/Navbar";

export default function Contact() {
    return (
        <>
            <Navbar />

            <div className="p-10">
                <h1 className="text-3xl font-bold mb-6">Contact</h1>

                <p>Email: baishakhimukherjee76@gmail.com</p>
                <p>Phone: +91 8240315317</p>
                <p>Location: Howrah, West Bengal</p>

                <a
                    href="https://www.facebook.com/baishakhi.mukherjee.7165"
                    className="text-blue-500"
                >
                    Facebook Profile
                </a>
            </div>
        </>
    );
}