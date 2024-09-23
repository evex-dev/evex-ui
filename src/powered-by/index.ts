/**
 * @module
 * Powered By component
 */
import * as React from "react";
import type * as ReactTypes from "types/react";
import { classMerge } from "../_internal/classMerge.ts";
import { useScopedStyle } from "../_internal/useScopedStyle.ts";

/**
 * @description Powered By component
 */
export function PoweredBy(options: {
  className?: string;
  icon: string;
  size?: number;
  // deno-lint-ignore ban-types
  word?: "Powered" | "Backed" | "Supported" | (string & {});
  name: string;
}): ReactTypes.ReactNode {
  const resolvedOptions = {
    size: 20,
    ...options,
  };

  const [styleWrapper] = useScopedStyle(`
    $scoped .container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      text-align: center;
    }

    $scoped .title-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    $scoped .word {
      line-height: 1.6;
      color: #4b5563;
      font-weight: 400;
    }

    .dark $scoped .word {
      color: #d1d5db; 
    }

    $scoped .icon-wrapper {
      padding: 2px;
      background: linear-gradient(to bottom right, #ffffff, #ffffff);
      border: 1px solid rgba(0, 0, 0, 0.07);
      border-radius: 0.375rem; 
    }

    .dark $scoped .icon-wrapper {
      background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.2), rgba(38, 38, 38, 0.2));
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    $scoped img {
      filter: brightness(0.95) grayscale(1);
      border-radius: 0.375rem;
    }

    $scoped .name {
      display: inline-block;
      color: transparent;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(to bottom right, #1f2937, #6b7280);
      -webkit-background-clip: text;
      background-clip: text;
      line-height: 1.6;
      margin-left: 0.25rem;
      font-weight: 500;
    }

    .dark $scoped .name {
      background-image: linear-gradient(to bottom right, #ffffff, #6b7280);
    }
  `);

  return styleWrapper(
    React.createElement(
      "div",
      {
        className: classMerge("container", options.className),
      },
      React.createElement("span", {
        className: "word",
      }, `${options.word || "Powered"} by`),
      React.createElement(
        "span",
        { className: "title-container" },
        React.createElement(
          "div",
          {
            className: "icon-wrapper",
          },
          React.createElement(
            "img",
            {
              src: options.icon,
              alt: "Logo",
              width: resolvedOptions.size,
              height: resolvedOptions.size,
            },
          ),
        ),
        React.createElement(
          "span",
          {
            className: "name",
          },
          options.name,
        ),
      ),
    ),
  );
}
