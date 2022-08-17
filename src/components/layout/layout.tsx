//region Global Imports
import React, { PropsWithChildren } from "react";
//endregion

//region Local Imports
import { WithAsProps } from "~types"
//endregion


interface LayoutOwnProps extends PropsWithChildren, WithAsProps {}
const COMPONENT_KEY = "Layout";

const Layout  = ({ children, as: Component = "div" } : LayoutOwnProps) => <Component>{children}</Component>;

export { COMPONENT_KEY };
export type { LayoutOwnProps };

export default Layout;
