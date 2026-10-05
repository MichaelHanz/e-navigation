import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faAngleDown,
  faAngleRight,
  faAnglesLeft,
  faCaretRight,
  faGraduationCap,
  faHouse,
  faIdCard,
  faListUl,
  faPencil,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { label: "Main", icon: faHouse },
  { label: "Student Profile", icon: faAddressCard },
  { label: "Academic", icon: faGraduationCap, href: "#" },
  { label: "MyCSD", icon: faUsers },
  { label: "Digital Student Card", icon: faIdCard },
];

const applicationSubmenu = [
  "Academic Calendar",
  "BPRP",
  "Confirmation Letter",
  "Digital Student Card",
  "eDaftar",
  "eDental",
  "eLearning",
  "eNavigation",
  "ePerpustakaan",
];

export default function Sidebar({
  mobileOpen,
  desktopOpen,
  onCloseMobile,
  onCollapseDesktop,
}: {
  mobileOpen: boolean;
  desktopOpen: boolean;
  onCloseMobile: () => void;
  onCollapseDesktop: () => void;
}) {
  return (
    <>
      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close navigation overlay"
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={onCloseMobile}
        />
      ) : null}

      <aside
        className={`${
          mobileOpen ? "fixed inset-y-0 left-0 z-40 flex" : "hidden"
        } ${desktopOpen ? "md:static md:flex" : "md:hidden"} w-64 shrink-0 flex-col border-r border-zinc-300 bg-usm-sidebar text-zinc-700 shadow-sm md:w-56`}
      >
        <nav className="flex-1 overflow-y-auto py-1 text-sm" aria-label="Portal">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-2 border-b border-zinc-200 px-4 py-2.5 hover:bg-white hover:text-usm-header"
            >
              <span className="w-5 text-center text-zinc-500">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              {item.label}
            </a>
          ))}

          <div className="border-b border-zinc-200 bg-white">
            <button
              type="button"
              className="flex w-full items-center justify-between border-l-4 border-usm-header bg-white px-4 py-2.5 font-medium text-usm-header"
            >
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faListUl} className="w-5 text-center" />
                Application
              </span>
              <FontAwesomeIcon icon={faAngleDown} className="text-xs" />
            </button>
            <ul>
              {applicationSubmenu.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`block py-1.5 pl-10 pr-3 text-sm ${
                      item === "eNavigation"
                        ? "border-l-2 border-usm-header bg-usm-lilac font-semibold text-usm-header"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-usm-header"
                    }`}
                  >
                    {item === "eNavigation" ? (
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="mr-1 text-xs"
                      />
                    ) : null}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#"
            className="flex items-center justify-between border-b border-zinc-200 px-4 py-2.5 hover:bg-white hover:text-usm-header"
          >
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPencil} className="w-5 text-center text-zinc-500" />
              Update
            </span>
            <FontAwesomeIcon icon={faAngleRight} className="text-xs text-zinc-400" />
          </a>
        </nav>

        <div className="flex h-10 items-center justify-center border-t border-zinc-300 bg-zinc-100">
          <button
            type="button"
            aria-label="Collapse sidebar"
            onClick={onCollapseDesktop}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-500 hover:bg-zinc-200"
          >
            <FontAwesomeIcon icon={faAnglesLeft} className="text-xs" />
          </button>
        </div>
      </aside>
    </>
  );
}
