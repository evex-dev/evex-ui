/**
 * @module
 * RichText component
 */
import * as React from "react";
import type * as ReactTypes from "types/react";
import { classMerge } from "../_internal/classMerge.ts";

/**
 * @description RichText component
 */
export function RichText(options: {
  className?: string;
  children: ReactTypes.ReactNode;
}): ReactTypes.ReactNode {
  return React.createElement(
    "span",
    {
      className: classMerge(
        "sans bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-white dark:to-neutral-500 bg-clip-text text-transparent leading-[1.6] ml-1 font-medium",
        options.className,
      ),
    },
    options.children
  );
}
