import CategoryChips from "@/components/map/CategoryChips";
import SearchCard from "@/components/map/SearchCard";

export default function MapOverlay() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-col gap-2 p-3 md:flex-row md:items-center md:gap-3">
      <SearchCard />
      <CategoryChips />
    </div>
  );
}
