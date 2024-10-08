import * as React from "react";
import type * as ReactTypes from "types/react";

export function useScopedStyle(
  style: string,
): [
  (...children: ReactTypes.ReactNode[]) => ReactTypes.ReactNode,
  string,
] {
  const key = "evex-ui-" + React.useId().replace(/:/g, "");

  const scopedStyle = style.replace(/\$scoped/g, `#${key} `);

  return [
    (...children: ReactTypes.ReactNode[]) =>
      React.createElement(
        "div",
        {
          id: key,
          style: {
            display: "contents",
          },
        },
        ...children,
        React.createElement("style", {
          id: key + "-style",
          dangerouslySetInnerHTML: { __html: scopedStyle },
        }),
      ),
    key,
  ];
}
