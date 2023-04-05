import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-slate-800 dark:border-none">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
        <a
          href="/drivers"
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-slate-700 group text-slate-200"
        >
          Drivers
          <span className="sr-only">Drivers</span>
        </a>
        <a
          href="/teams"
          data-tooltip-target="tooltip-wallet"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-slate-700 text-slate-200"
        >
          Teams
          <span className="sr-only">Teams</span>
        </a>
        <a
          href="/teams"
          data-tooltip-target="tooltip-profile"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-slate-700 group text-slate-200"
        >
          Tracks
          <span className="sr-only">Tracks</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
