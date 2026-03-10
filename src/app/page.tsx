import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="flex flex-col items-center justify-center h-screen text-center">

        <Image
          src="/baishakhi.png"
          alt="Baishakhi Mukherjee"
          width={220}
          height={220}
          className="rounded-full"
        />

        <h1 className="text-4xl font-bold mt-6">
          Baishakhi Mukherjee
        </h1>

        <p className="text-lg mt-3 max-w-xl">
          Customer-focused professional pursuing B.Tech in Artificial
          Intelligence & Machine Learning with strong communication and
          customer service skills.
        </p>

      </section>
    </main>
  );
}