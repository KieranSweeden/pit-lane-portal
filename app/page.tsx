"use client";
import Search from "./components/Search";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl h-screen lg:py-16 z-10 relative flex justify-start items-center flex-col">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Pit Lane Portal
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          Search for all things Formula 1
        </p>
        <Search />
        <Footer />
      </div>
      <div className="bg-gradient-to-r from-slate-800 to-slate-950 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
};

export default Home;
