//region Global Imports
import React, { PropsWithChildren, forwardRef, ComponentPropsWithRef } from "react";
//endregion

import { WithAsProps } from "~types";

interface LinkOwnProps extends WithAsProps {
  readonly href?: string;
}

const COMPONENT_KEY = "Link";

const Link = forwardRef<ComponentPropsWithRef<"a">, PropsWithChildren<LinkOwnProps>>(
  ({ as: Component = "a", children, href }, ref) => {
    return (
      <Component
        href={href}
        className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        ref={ref}>
        {children}
      </Component>
    );
  }
);

Link.displayName = COMPONENT_KEY;
export { COMPONENT_KEY };
export type { LinkOwnProps };

export default Link;
