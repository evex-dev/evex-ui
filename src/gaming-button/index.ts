/**
 * @module
 * Gaming Button component
 */
import * as React from "react";
import type * as ReactTypes from "types/react";
import { useScopedStyle } from "../_internal/useScopedStyle.ts";
import { classMerge } from "../_internal/classMerge.ts";

/**
 * @description Gaming Button component
 */
export function GamingButton(
  options: {
    children: ReactTypes.ReactNode;
    className?: string;
    duration?: number;
    backGroundColor?: string;
    backGroundColorSubtle?: string;
    baseColor?: string;
    baseColorSubtle?: string;
  } & ReactTypes.ButtonHTMLAttributes<"button">,
): ReactTypes.ReactNode {
  const resolvedOptions = {
    duration: 5000,
    baseColor: "blue",
    baseColorSubtle: "skyblue",
    ...options,
  };

  const cleanedOptions = Object.fromEntries(
    Object.entries({
      ...options,
      children: undefined,
      className: undefined,
      duration: undefined,
      backGroundColor: undefined,
      backGroundColorSubtle: undefined,
      baseColor: undefined,
      baseColorSubtle: undefined,
    }).filter(([_, value]) => !!value),
  );

  const [styleWrapper] = useScopedStyle(`
    $scoped {
         --gaming-button-bg: ${
    options.backGroundColor || "#ffffff"
  };
         --gaming-button-bg-subtle: ${
    options.backGroundColor || "#f1f1f1"
  };
         --gaming-button-highlight: ${resolvedOptions.baseColor};
         --gaming-button-highlight-subtle: ${resolvedOptions.baseColorSubtle};
    }

    .dark $scoped {
         --gaming-button-bg: ${
    options.backGroundColor || "#000000"
  };
         --gaming-button-bg-subtle: ${
    options.backGroundColor || "#111122"
  };
    }

    @property --gradient-angle {
         syntax: "<angle>";
         initial-value: 0deg;
         inherits: false;
    }
    
    @property --gradient-angle-offset {
         syntax: "<angle>";
         initial-value: 0deg;
         inherits: false;
    }
    
    @property --gradient-percent {
         syntax: "<percentage>";
         initial-value: 5%;
         inherits: false;
    }
    
    @property --gradient-shine {
         syntax: "<color>";
         initial-value: white;
         inherits: false;
    }
    
    $scoped .gaming-button {
         --animation: gradient-angle ease-in-out infinite;
         --duration: ${resolvedOptions.duration.toString()}ms;
         --shadow-size: 2px;
         isolation: isolate;
         position: relative;
         overflow: hidden;
         cursor: pointer;
         outline-offset: 4px;
         font-family: inherit;
         font-size: 1.125rem;
         line-height: 1.2;
         border-radius: 360px;
         background: linear-gradient(var(--gaming-button-bg), var(--gaming-button-bg)) padding-box, conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent, var(--gaming-button-highlight) var(--gradient-percent), var(--gradient-shine) calc(var(--gradient-percent) * 2), var(--gaming-button-highlight) calc(var(--gradient-percent) * 3), transparent calc(var(--gradient-percent) * 4)) border-box;
         box-shadow: inset 0 0 0 1px var(--gaming-button-bg-subtle);
    }

    $scoped .gaming-button {
         color: rgb(54, 54, 54);
         border: rgba(25, 25, 25, 0.2);
         padding-top: 0.75rem;
         padding-bottom: 0.75rem; 
         padding-left: 1.25rem;
         padding-right: 1.25rem;
         transition: color 0.3s ease-in-out;
    }

    .dark $scoped .gaming-button {
         color: rgb(212, 212, 212);
         border: rgba(255, 255, 255, 0.2);
    }

    $scoped .gaming-button:hover {
         color: rgb(75, 75, 75);
         transition: color 0.3s ease-in-out;
    }

    .dark $scoped .gaming-button:hover {
         color: rgb(250 250 250);
    }
    
    $scoped .gaming-button::before, $scoped .gaming-button::after, $scoped .gaming-button span::before {
         content: "";
         pointer-events: none;
         position: absolute;
         inset-inline-start: 50%;
         inset-block-start: 50%;
         translate: -50% -50%;
         z-index: -1;
    }
    
    $scoped .gaming-button::before {
         --size: calc(100% - var(--shadow-size) * 3);
         --position: 2px;
         --space: calc(var(--position) * 2);
         width: var(--size);
         height: var(--size);
         background: radial-gradient(circle at var(--position) var(--position), white calc(var(--position) / 4), transparent 0) padding-box;
         background-size: var(--space) var(--space);
         background-repeat: space;
         mask-image: conic-gradient(from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black);
         border-radius: inherit;
         opacity: 0.4;
         z-index: -1;
    }
    
    $scoped .gaming-button::after {
         --animation: shimmer linear infinite;
         width: 100%;
         aspect-ratio: 1;
         background: linear-gradient(-50deg, transparent, var(--gaming-button-highlight), transparent);
         mask-image: radial-gradient(circle at bottom, transparent 40%, black);
         opacity: 0.6;
    }
    
    $scoped .gaming-button span {
         z-index: 1;
         font-size: 15px;
    }
    
    $scoped .gaming-button span::before {
         --size: calc(100% + 1rem);
         width: var(--size);
         height: var(--size);
         box-shadow: inset 0 -1ex 2rem 4px var(--gaming-button-highlight);
         opacity: 0;
    }
    
    $scoped .gaming-button {
         --transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);
         transition: var(--transition);
         transition-property: --gradient-angle-offset, --gradient-percent, --gradient-shine;
    }
    
    $scoped .gaming-button, $scoped .gaming-button::before, $scoped .gaming-button::after {
         animation: var(--animation) var(--duration), var(--animation) calc(var(--duration) / 0.4) reverse paused;
         animation-composition: add;
    }
    
    $scoped .gaming-button span::before {
         transition: opacity var(--transition);
         animation: calc(var(--duration) * 1.5) breathe linear infinite;
    }
    
    $scoped .gaming-button:is(:hover, :focus-visible) {
         --gradient-percent: 20%;
         --gradient-angle-offset: 95deg;
         --gradient-shine: var(--gaming-button-highlight-subtle);
    }
    
    $scoped .gaming-button:is(:hover, :focus-visible), $scoped .gaming-button:is(:hover, :focus-visible)::before, $scoped .gaming-button:is(:hover, :focus-visible)::after {
         animation-play-state: running;
    }
    
    $scoped .gaming-button span::before {
         opacity: 1;
    }
    
    @keyframes gradient-angle {
         to {
             --gradient-angle: 360deg;
        }
    }
    
    @keyframes shimmer {
         to {
             rotate: 360deg;
        }
    }
    
    @keyframes breathe {
         from, to {
             scale: 1;
        }
         50% {
             scale: 1.2;
        }
    }
`);

  return styleWrapper(
    React.createElement("button", {
      ...cleanedOptions,
      className: classMerge("gaming-button", options.className),
    }, React.createElement("span", null, options.children)),
  );
}
