# eNavigation (USM campus map, demo prototype)

Stack: Next.js (App Router, TypeScript, Tailwind), MapLibre GL JS.
Look: copy the CampusOnline portal shell. Reference files are in /design
(code.html and screen.png for desktop and mobile). Do not edit /design.

Rules:

- Mobile-first. On phones the map is full screen, with a bottom sheet.
- No backend, no database. Places come from one GeoJSON file.
- The Bus chip is visible but disabled. Do not build any bus logic.
- No routing or "Find Route" features, and ignore the extra desktop
  buttons in the Stitch export (Find Route, USM Transit Shuttle,
  Current GPS Location).
- Chip order: Bus, Lecture Halls, Water, Food, Dorms, More.
- Colours: purple #2e123f, header blue #438eb9, orange #e27a12,
  sidebar grey #f2f2f2, lilac #f8ebff. Define them once as Tailwind
  theme values, never as scattered hex codes.
- Keep changes small. Explain what you changed and why.

<!-- BEGIN:nextjs-agent-rules -->

(leave the generated block exactly as it is)

<!-- END:nextjs-agent-rules -->
