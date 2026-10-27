import CampusMap from "@/components/map/CampusMap";
import MapOverlay from "@/components/map/MapOverlay";

export default function EnavigationPage() {
  return (
    <div className="relative h-screen w-screen">
      <CampusMap />
      <MapOverlay />
    </div>
  );
}
