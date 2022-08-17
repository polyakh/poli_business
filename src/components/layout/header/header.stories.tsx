//region Global Imports
import { ComponentMeta, ComponentStory } from "@storybook/react";
//endregion

import {
  Header,
  HeaderOwnProps,
  mockHeaderProps,
} from "./";

export default {
  title: "components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: HeaderOwnProps) => <Header {...args} />;
export const Base = Template.bind({});

Base.args = {
  ...mockHeaderProps,
} as HeaderOwnProps;
