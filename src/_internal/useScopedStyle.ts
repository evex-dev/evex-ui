import * as React from "react";
import type * as ReactTypes from "types/react";

export function useScopedStyle(
  style: string,
): [
  (...children: ReactTypes.ReactNode[]) => ReactTypes.ReactNode,
  ReactTypes.ReactNode,
] {
  const key = "evex-ui-" + React.useId().replace(/:/g, "");

  const scopedStyle = style.replace(/\$scoped/g, `#${key} `);

  return [
    (...children: ReactTypes.ReactNode[]) =>
      React.createElement("div", {
        id: key,
        style: {
          display: "contents",
        },
      }, ...children),
    React.createElement("style", {
      id: key + "-style",
      dangerouslySetInnerHTML: { __html: fastMinifyCSS(scopedStyle) },
    }),
  ];
}

const cache = new Map<string, string>();

function fastMinifyCSS(content: string) {
  if (cache.has(content)) return cache.get(content)!;

  const minified = content.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "")
    .replace(/\s+/g, " ")
    .replace(/([,:;{}])\s/g, "$1")
    .replace(/\s{/g, "{")
    .replace(/\s!/g, "!")
    .replace(/@media \(/g, "@media(")
    .replace(/;}/g, "}");

  cache.set(content, minified);

  return minified;
}
