import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function BreadcrumbBar() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex h-10 items-center justify-between border-b border-zinc-200 bg-zinc-50 px-3 text-xs"
    >
      <div className="flex min-w-0 items-center gap-1.5 text-zinc-600">
        <FontAwesomeIcon icon={faHouse} className="text-usm-header" />
        <span className="text-usm-header">Home</span>
        <span className="text-zinc-400">&gt;</span>
        <span className="hidden text-zinc-600 sm:inline">Student Affairs</span>
        <span className="hidden text-zinc-400 sm:inline">&gt;</span>
        <span className="font-medium text-zinc-800">eNavigation</span>
      </div>

      <button
        type="button"
        className="inline-flex items-center rounded-sm bg-usm-orange px-3 py-1 text-white"
      >
        Language
        <FontAwesomeIcon icon={faCaretDown} className="ml-2 text-[10px]" />
      </button>
    </nav>
  );
}
