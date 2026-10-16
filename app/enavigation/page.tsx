"use client";

import { useEffect, useRef } from "react";
import { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function EnavigationPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  //Use Effect for requesting the map data the moment the app/site is clicked
  useEffect(() => {
    if (!containerRef.current) return;

    const map = new Map({
      container: containerRef.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        },
        layers: [{ id: "osm", type: "raster", source: "osm" }],
      },
      center: [100.3025, 5.3561],
      zoom: 15,
    });

    return () => map.remove();
  }, []);

  return <div ref={containerRef} className="h-dvh w-full" />;
}
