"use client";

import { useEffect, useRef } from "react";
import {
  MapLibreMap,
  setWorkerUrl,
  NavigationControl,
  GeolocateControl,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function EnavigationPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  setWorkerUrl("/maplibre-gl-worker.mjs");

  //Use Effect for requesting the map data the moment the app/site is clicked or directed to
  useEffect(() => {
    if (!containerRef.current) return;

    const map = new MapLibreMap({
      container: containerRef.current,
      style: "/styles/campus.json",
      center: [100.3025, 5.3561],
      zoom: 15,
      minZoom: 14,
      // maxBounds: [
      //   [100.28766302417512, 5.35043160403761],
      //   [100.3115472551167, 5.363801703553747],
      // ],
      dragRotate: false,
    });

    map.addControl(
      new NavigationControl({ showCompass: false, showZoom: true }),
      "bottom-right",
    );

    map.addControl(
      new GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
      }),
      "bottom-right",
    );
    map.touchZoomRotate.disableRotation();
    map.keyboard.disableRotation();
    map.on("contextmenu", (e) => console.log(e.lngLat));

    map.on("click", (e) => console.log(e.lngLat));

    return () => map.remove();
  }, []);

  return <div ref={containerRef} className="h-dvh w-full" />;
}
