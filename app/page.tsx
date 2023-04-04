"use client";
import Search from "./components/Search";

export default function Home() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl h-screen text-center lg:py-16 z-10 relative flex justify-center items-center flex-col">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Pit Lane Portal
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          Search for all things Formula 1
        </p>
        <Search />
      </div>
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
}
