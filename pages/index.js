import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        Welcome to My Next.js App with Tailwind CSS and Recoil!
      </h1>
    </div>
  );
}
