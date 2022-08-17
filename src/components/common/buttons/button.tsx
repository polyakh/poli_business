//region Global Imports
import React, { ComponentPropsWithoutRef } from "react";
//endregion

//region Local Imports
import { WithAsProps } from "~types";
//endregion

interface ButtonOwnProps extends ComponentPropsWithoutRef<"button">, WithAsProps {
  readonly isDisabled?: boolean;
}
const COMPONENT_KEY = "Button";

const Button = ({ isDisabled, type = "button", as: Component = "button" }: ButtonOwnProps) => (
  <Component type={type} disabled={isDisabled}>
    Button
  </Component>
);

export { COMPONENT_KEY };
export type { ButtonOwnProps };

export default Button;
