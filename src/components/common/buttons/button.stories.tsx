//region Global Imports
import { ComponentMeta, ComponentStory } from "@storybook/react";
//endregion

import { Button, ButtonOwnProps, mockButtonProps } from "~components/common/buttons";

export default {
  title: "components/common/buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonOwnProps) => <Button {...args} />;
export const Base = Template.bind({});

Base.args = {
  ...mockButtonProps,
} as ButtonOwnProps;
