"use client";

import { useEffect, useRef } from "react";
import {
  MapLibreMap,
  NavigationControl,
  GeolocateControl,
  setWorkerUrl,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  CAMPUS_BOUNDS,
  CAMPUS_CENTER,
  CAMPUS_ZOOM,
  MAP_STYLE_URL,
  MIN_ZOOM,
} from "@/lib/map-config";

setWorkerUrl("/maplibre-gl-worker.mjs");

export default function CampusMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const map = new MapLibreMap({
      container: containerRef.current,
      style: MAP_STYLE_URL,
      center: CAMPUS_CENTER,
      zoom: CAMPUS_ZOOM,
      minZoom: MIN_ZOOM,
      maxBounds: CAMPUS_BOUNDS,
      dragRotate: false,
    });

    map.addControl(
      new NavigationControl({ showCompass: false }),
      "bottom-right",
    );
    map.addControl(
      new GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
      }),
      "bottom-right",
    );

    return () => map.remove();
  }, []);

  return <div ref={containerRef} className="h-dvh w-full" />;
}
