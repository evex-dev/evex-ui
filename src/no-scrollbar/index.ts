/**
 * @module
 * NoScrollbar component
 */
import type * as ReactTypes from "types/react";
import { useScopedStyle } from "../_internal/useScopedStyle.ts";

/**
 * @description NoScrollbar component
 */
export function NoScrollbar(options: {
  children: ReactTypes.ReactNode;
  isGlobal?: boolean;
}): ReactTypes.ReactNode {
  const resolvedOptions = {
    isGlobal: false,
    ...options,
  };

  const [styleWrapper] = useScopedStyle(`
  ${resolvedOptions.isGlobal ? "" : "$scoped"} * {
    scroll-behavior: smooth;
  }

  ${resolvedOptions.isGlobal ? "" : "$scoped"} * {
    scrollbar-width: 0px;
    -ms-overflow-style: none;
  }

  ${resolvedOptions.isGlobal ? "" : "$scoped"} *::-webkit-scrollbar {
    display: none;
  }
`);

  return styleWrapper(options.children);
}
