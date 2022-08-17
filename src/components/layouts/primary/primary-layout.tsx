//region Global Imports
import React, { PropsWithChildren } from "react";
//endregion

//region Local Imports
import { WithAsProps } from "~types";
import { Header, Footer } from "~components";
//endregion

interface PrimaryLayoutOwnProps extends PropsWithChildren, WithAsProps {}
const COMPONENT_KEY = "PrimaryLayout";

const PrimaryLayout = ({ children, as: Component = "div" }: PrimaryLayoutOwnProps) => (
  <Component>
    <Header />
    {children}
    <Footer />
  </Component>
);

export { COMPONENT_KEY };
export type { PrimaryLayoutOwnProps };

export default PrimaryLayout;
