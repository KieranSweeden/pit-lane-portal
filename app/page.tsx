"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useState, useEffect, KeyboardEventHandler } from "react";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inter = Inter({ subsets: ["latin"] });

type FormulaOneDriver = {
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  nationality: string;
  url: string;
};

type FormulaOneApiResponse = {
  MRData: {
    DriverTable: {
      Drivers: FormulaOneDriver[];
    };
  };
};

async function fetchDrivers() {
  console.log("Fetching drivers from db");
  const response = await fetch(
    "http://ergast.com/api/f1/drivers.json?limit=1000"
  );
  const data: FormulaOneApiResponse = await response.json();
  const { Drivers: drivers } = data?.MRData?.DriverTable;
  localStorage.setItem("drivers", JSON.stringify(drivers));
  return drivers;
}

function getStoredDrivers() {
  console.log("Fetching drivers from local storage");
  let storedDrivers = localStorage.getItem("drivers");
  if (storedDrivers) return JSON.parse(storedDrivers);
  return storedDrivers;
}

export function Search() {
  let [drivers, setDrivers] = useState<FormulaOneDriver[]>([]);

  useEffect(() => {
    async function getDrivers() {
      let fetchedDrivers = getStoredDrivers();
      if (!fetchedDrivers) {
        fetchedDrivers = await fetchDrivers();
      }
      setDrivers(fetchedDrivers);
    }

    getDrivers();
  }, []);

  return (
    <form className="w-full max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
        </div>
        <input
          type="search"
          id="driver-search"
          className="block w-full p-4 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search drivers"
        />
      </div>
    </form>
  );
}

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
