import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchCard() {
  return (
    <div className="pointer-events-auto flex w-full items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-lg ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-usm-header md:w-96">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-zinc-400" />
      <input
        type="search"
        placeholder="Search places on campus..."
        aria-label="Search places on campus"
        className="min-w-0 flex-1 bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-400"
      />
    </div>
  );
}
