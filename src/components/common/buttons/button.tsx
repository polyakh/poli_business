import React, { ComponentPropsWithoutRef } from "react";

interface ButtonOwnProps extends ComponentPropsWithoutRef<"button"> {
  readonly isDisabled?: boolean;
}
const COMPONENT_KEY = "Button";

const Button = ({ isDisabled, type }: ButtonOwnProps) =>
    <button type={type} disabled={isDisabled}>Button</button>;

export { COMPONENT_KEY };
export type { ButtonOwnProps };

export default Button;
