import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler, FC, useEffect, useState } from "react";

type FormulaOneDriver = {
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
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

interface SearchResultsProps {
  drivers: FormulaOneDriver[];
}

const SearchResults: FC<SearchResultsProps> = ({ drivers }) => {
  return (
    <ul>
      {drivers.map((driver: FormulaOneDriver) => (
        <li key={driver.driverId}>{driver.familyName}</li>
      ))}
    </ul>
  );
};

export default function Search() {
  const [drivers, setDrivers] = useState<FormulaOneDriver[]>([]);
  const [filteredDrivers, setFilteredDrivers] = useState<FormulaOneDriver[]>(
    []
  );
  const [searchInputValue, setSearchInputValue] = useState("");
  const [showSearchResultsComponent, setShowSearchResultsComponent] =
    useState(false);

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

  const handleInputChange: ChangeEventHandler = (event) => {
    const searchInput = event.target as HTMLInputElement;
    const searchValue = searchInput.value.trim();

    if (searchValue) {
      const matchingDrivers = drivers.filter(({ givenName, familyName }) => {
        return [givenName, familyName].some((field) =>
          field.toLowerCase().includes(searchValue)
        );
      });

      setFilteredDrivers(matchingDrivers);
      setShowSearchResultsComponent(true);
    } else {
      setShowSearchResultsComponent(false);
      setFilteredDrivers(drivers);
    }

    setSearchInputValue(searchValue);
  };

  return (
    <section>
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
            onChange={handleInputChange}
          />
        </div>
      </form>
      {showSearchResultsComponent && (
        <SearchResults drivers={filteredDrivers} />
      )}
    </section>
  );
}
