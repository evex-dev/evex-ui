/**
 * @module
 */
import * as React from 'react';
import type * as ReactTypes from "types/react";

/**
 * @description PoweredBy component
 */
export function PoweredBy(): ReactTypes.ReactNode {
    return React.createElement('span', { className: 'text-red-500' }, 'Powered by Evex UI')
}
