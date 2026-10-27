"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBus,
  faChalkboardUser,
  faDroplet,
  faEllipsis,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

// Order matches AGENTS.md. `id` will later match the category in places.geojson.
const chips = [
  { id: "bus", label: "Bus", icon: faBus, disabled: true },
  { id: "lecture-hall", label: "Lecture Halls", icon: faChalkboardUser },
  { id: "water", label: "Water", icon: faDroplet },
  { id: "food", label: "Food", icon: faUtensils },
  { id: "dorm", label: "Dorms", icon: faBed },
  { id: "more", label: "More", icon: faEllipsis },
];

export default function CategoryChips() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="flex min-w-0 gap-2 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {chips.map((chip) => {
        const isActive = active === chip.id;
        return (
          <button
            key={chip.id}
            type="button"
            disabled={chip.disabled}
            onClick={() => setActive(isActive ? null : chip.id)}
            className={`pointer-events-auto flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-sm shadow-md ring-1 ring-black/5 transition-colors ${
              chip.disabled
                ? "cursor-not-allowed bg-zinc-100 text-zinc-400"
                : isActive
                  ? "bg-usm-header text-white"
                  : "bg-white text-zinc-700 hover:bg-usm-lilac"
            }`}
          >
            <FontAwesomeIcon icon={chip.icon} className="text-xs" />
            {chip.label}
            {chip.disabled ? (
              <span className="rounded-full bg-usm-orange px-1.5 text-[9px] font-bold uppercase text-white">
                Soon
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
