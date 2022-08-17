//region Global Imports
import React from "react";
//endregion

//region Local Imports
import { WithAsProps } from "~types";
//endregion

interface FooterOwnProps extends WithAsProps {}
const COMPONENT_KEY = "Footer";

const Footer = ({ as: Component = "footer" }: FooterOwnProps) => <Component>Footer</Component>;

export { COMPONENT_KEY };
export type { FooterOwnProps };

export default Footer;
