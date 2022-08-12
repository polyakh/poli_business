import React, { ComponentPropsWithoutRef } from "react";

interface ButtonOwnProps extends ComponentPropsWithoutRef<"button"> {
  readonly isDisabled?: boolean;
}
const COMPONENT_KEY = "Button";

const Button = ({ isDisabled }: ButtonOwnProps) => <button disabled={isDisabled}>Button</button>;

export { COMPONENT_KEY };
export type { ButtonOwnProps };

export default Button;
