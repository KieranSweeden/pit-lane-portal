import { Inter } from "next/font/google";
import styles from "./page.module.css";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inter = Inter({ subsets: ["latin"] });

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
        <form className="w-full max-w-md mx-auto">
          <label
            htmlFor="default-email"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Email sign-up
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white"
              />
            </div>
            <input
              type="email"
              id="default-email"
              className="block w-full p-4 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for a driver, team or track..."
              required
            />
          </div>
        </form>
      </div>
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
}
