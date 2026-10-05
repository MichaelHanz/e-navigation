import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faEnvelope,
  faGraduationCap,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function PortalHeader({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 flex h-11 items-center justify-between bg-usm-header text-white shadow-sm">
      <div className="flex items-center gap-2 pl-3">
        <button
          type="button"
          aria-label="Toggle portal navigation"
          onClick={onMenuClick}
          className="rounded p-1 text-white/90 hover:bg-black/10 md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
        <span className="text-base font-medium tracking-wide">
          USM | eNavigation
        </span>
      </div>

      <div className="flex h-full items-stretch">
        <button
          type="button"
          aria-label="Notifications"
          className="flex w-11 items-center justify-center bg-usm-purple/80 hover:bg-usm-purple"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
        </button>
        <div className="flex items-center bg-black/10 px-3 text-xs font-semibold">
          <span className="hidden sm:inline">VINISH SURIA A/L RAJASEGARAN</span>
          <span className="sm:hidden">VS</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-2 text-[10px] text-white/80" />
        </div>
      </div>
    </header>
  );
}
