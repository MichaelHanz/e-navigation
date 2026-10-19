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
  PLACE_COLOR,
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
      //maxBounds: CAMPUS_BOUNDS,
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
    map.on("load", () => {
      map.addSource("places", {
        type: "geojson",
        data: "/data/cafe.geojson",
      });

      map.addLayer({
        id: "places-dots",
        type: "circle",
        source: "places",
        paint: {
          "circle-radius": 7,
          "circle-color": PLACE_COLOR,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });

      map.addLayer({
        id: "places-labels",
        type: "symbol",
        source: "places",
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Roboto Condensed Italic"],
          "text-size": 12,
          "text-anchor": "top",
          "text-offset": [0, 1],
        },
        paint: {
          "text-color": "#2e123f",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.5,
        },
      });
    });

    return () => map.remove();
  }, []);

  return <div ref={containerRef} className="h-dvh w-full" />;
}
