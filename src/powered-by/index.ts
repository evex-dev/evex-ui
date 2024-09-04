/**
 * @module
 */
import * as React from 'react';
import type * as ReactTypes from "types/react";

/**
 * @description PoweredBy component
 */
export function PoweredBy(): ReactTypes.ReactNode {
    return React.createElement('span', { className: 'powered-by' }, 'Powered by Evex UI')
}
