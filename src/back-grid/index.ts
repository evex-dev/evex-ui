/**
 * @module
 * Back Grid component
 */
import * as React from "react";
import type * as ReactTypes from "types/react";
import { useScopedStyle } from "../_internal/useScopedStyle.ts";
import { classMerge } from "../_internal/classMerge.ts";

/**
 * @description Back Grid component
 */
export function BackGrid(options: {
  children?: ReactTypes.ReactNode;
  className?: string;
  backgridColor?: string;
  backgridLineBetween?: string;
  backgridMaskRotate?: string;
  backgridMaskPower?: string;
  isMask?: boolean;
}): ReactTypes.ReactNode {
  const resolvedOptions = {
    backgridLineBetween: "35px",
    backgridMaskRotate: "20deg",
    backgridMaskPower: "50%",
    isMask: false,
    ...options,
  };

  const [styleWrapper] = useScopedStyle(`
    $scoped .backgrid {
        --back-grid-color: ${resolvedOptions.backgridColor || "#00000011"};
        --back-grid-line-between: ${resolvedOptions.backgridLineBetween};
        --back-grid-mask-rotate: ${resolvedOptions.backgridMaskRotate};
        --back-grid-mask-power: ${resolvedOptions.backgridMaskPower};
        --back-grid-mask: linear-gradient(var(--back-grid-mask-rotate), transparent var(--back-grid-mask-power), var(--back-grid-color));
    }

    .dark $scoped .backgrid {
        ${resolvedOptions.backgridColor || "--back-grid-color: #ffffff12;"}
    }

    $scoped .backgrid {
        width: fit-content;
        height: fit-content;
        background: linear-gradient(90deg, var(--back-grid-color) 1px, transparent 1px var(--back-grid-line-between)) 50% 50% / var(--back-grid-line-between) var(--back-grid-line-between),
                    linear-gradient(var(--back-grid-color) 1px, transparent 1px var(--back-grid-line-between)) 50% 50% / var(--back-grid-line-between) var(--back-grid-line-between);
        ${resolvedOptions.isMask ? "mask: var(--back-grid-mask);" : ""}
    }
  `);

  return styleWrapper(
    React.createElement("div", {
      className: classMerge("backgrid", options.className),
    }, options.children),
  );
}
