"use client";

import { useEffect, useRef } from "react";
import { MapLibreMap, setWorkerUrl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function EnavigationPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  setWorkerUrl("/maplibre-gl-worker.mjs");

  //Use Effect for requesting the map data the moment the app/site is clicked
  useEffect(() => {
    if (!containerRef.current) return;

    const map = new MapLibreMap({
      container: containerRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [100.3025, 5.3561],
      zoom: 15,
    });

    return () => map.remove();
  }, []);

  return <div ref={containerRef} className="h-dvh w-full" />;
}
