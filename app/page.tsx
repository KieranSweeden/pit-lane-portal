import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-slate-900 w-screen h-screen">
      <h1 className="text-slate-200">Pit Lane Portal</h1>
    </main>
  );
}
