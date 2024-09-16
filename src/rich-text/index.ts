/**
 * @module
 * RichText component
 */
import * as React from "react";
import type * as ReactTypes from "types/react";
import { classMerge } from "../_internal/classMerge.ts";
import { useScopedStyle } from "../_internal/useScopedStyle.ts";

/**
 * @description RichText component
 */
export function RichText(options: {
  className?: string;
  children: ReactTypes.ReactNode;
}): ReactTypes.ReactNode {
  const [styleWrapper, styleContent] = useScopedStyle(`
    $scoped .rich-text {
      display: inline-block;
      color: transparent;
      background-image: linear-gradient(to bottom, #1f2937, rgb(115, 115, 115));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.6;
      margin-left: 0.25rem;
      font-weight: 500;
    }

    .dark $scoped .rich-text {
      background-image: linear-gradient(to bottom, #ffffff, rgb(115, 115, 115));
    }
  `);

  return styleWrapper(
    React.createElement(
      "span",
      {
        className: classMerge("rich-text", options.className),
      },
      options.children
    ),
    styleContent
  );
}
