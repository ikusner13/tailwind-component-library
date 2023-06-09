import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

declare const Tooltip: {
    (props: TooltipPrimitive.TooltipProps): react_jsx_runtime.JSX.Element;
    Trigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;

export { Tooltip, TooltipProvider };
