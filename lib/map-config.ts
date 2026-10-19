import type { LngLatBoundsLike, LngLatLike } from "maplibre-gl";

export const MAP_STYLE_URL = "/styles/campus.json";
export const CAMPUS_CENTER: LngLatLike = [100.3025, 5.3561];
export const CAMPUS_ZOOM = 15;
export const MIN_ZOOM = 7;

// Paste your real corners here: [[west, south], [east, north]]
export const CAMPUS_BOUNDS: LngLatBoundsLike = [
  [100.28766302417512, 5.35043160403761], 
  [100.3115472551167, 5.363801703553747],
];