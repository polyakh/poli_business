//region Global Imports
import { ComponentMeta, ComponentStory } from "@storybook/react";
//endregion

import { PrimaryLayout, PrimaryLayoutOwnProps, mockPrimaryLayoutProps } from "./";

export default {
  title: "components/Layout",
  component: PrimaryLayout,
} as ComponentMeta<typeof PrimaryLayout>;

const Template: ComponentStory<typeof PrimaryLayout> = (args: PrimaryLayoutOwnProps) => (
  <PrimaryLayout {...args} />
);
export const Base = Template.bind({});

Base.args = {
  ...mockPrimaryLayoutProps,
} as PrimaryLayoutOwnProps;
