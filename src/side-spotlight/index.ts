/**
 * @module
 * Side Spotlight component
 */
import * as React from "react";
import type * as ReactTypes from "types/react";
import { useScopedStyle } from "../_internal/useScopedStyle.ts";
import { classMerge } from "../_internal/classMerge.ts";

/**
 * @experimental No implementation yet
 * @description Side Spotlight component
 */
export function SideSpotlight(options: {
  children: ReactTypes.ReactNode;
  className?: string;
}): ReactTypes.ReactNode {

  const [styleWrapper] = useScopedStyle(`
    $scoped .side-spotlight {
      position: absolute;
      width: 100dvw;
      height: 100dvh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      z-index: 0;
      pointer-events: none;
    }

    $scoped .side-spotlight::before {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 50dvw;
      height: 50dvh;
      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
      clip-path: polygon(0 92%, 75% 0, 100% 13%, 1% 99%);
      border-radius: 9999px;
      filter: blur(100px);
    }
  `);

  return styleWrapper(
    options.children,
    React.createElement("div", {
      className: classMerge("side-spotlight", options.className),
    })
  );
}
