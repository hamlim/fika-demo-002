/** Automatically Generated! */
import type { Route } from "@fika-ts/framework/router";

export let routes: Array<[string, Route]> = [
  [
    "/docs",
    {
      routeType: "static",
      rawPath: "/docs",
      filePath: "/docs.page.js",
      type: "page",
      params: [],
      $type: "custom",
      mod: () => import("./docs.page.js")
    }
  ],
  [
    "/",
    {
      routeType: "static",
      rawPath: "/",
      filePath: "/index.page.js",
      type: "page",
      params: [],
      $type: "custom",
      mod: () => import("./index.page.js")
    }
  ],
];

declare global {
  interface Window {
    __fika_routes: Array<[string, Route]>;
  }
  var __fika_routes: Array<[string, Route]>;
}
globalThis.__fika_routes = routes;
