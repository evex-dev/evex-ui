/**
 * @module
 * PoweredBy component
 */
import * as React from "react";
import type * as ReactTypes from "types/react";
import { classMerge } from "../_internal/classMerge.ts";

/**
 * @description PoweredBy component
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

  return React.createElement(
    "div",
    {
      className: classMerge(
        "flex items-center justify-center gap-2 text-center",
        options.className,
      ),
    },
    React.createElement("span", {
      className:
        "leading-[1.6] text-neutral-600 dark:text-neutral-300 font-normal",
    }, `${options.word || "Powered"} by`),
    React.createElement(
      "span",
      { className: "flex items-center gap-1" },
      React.createElement(
        "div",
        {
          className:
            "p-[2px] bg-gradient-to-br from-white to-white dark:from-black/20 dark:to-neutral-800/20 border border-[#00000012] dark:border-white/20 rounded-md",
        },
        React.createElement(
          "img",
          {
            src: options.icon,
            alt: "Logo",
            width: resolvedOptions.size,
            height: resolvedOptions.size,
            className: "filter brightness-[0.95] grayscale rounded-md",
          },
        ),
      ),
      React.createElement(
        "span",
        {
          className:
            "bg-gradient-to-br from-neutral-800 to-neutral-500 dark:from-white dark:to-neutral-500 bg-clip-text text-transparent leading-[1.6] ml-1 font-medium",
        },
        options.name,
      ),
    ),
  );
}
