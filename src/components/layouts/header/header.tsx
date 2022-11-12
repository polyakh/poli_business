//region Global Imports
import React from "react";
//endregion

//region Local Imports
import { WithAsProps } from "~types";

//endregion

interface HeaderOwnProps extends WithAsProps {}

const COMPONENT_KEY = "Header";

const Header = ({ as: Component = "header" }: HeaderOwnProps) => <Component>Header</Component>;

export { COMPONENT_KEY };
export type { HeaderOwnProps };
export default Header;
