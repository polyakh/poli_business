//region Global Imports
import { ComponentMeta, ComponentStory } from "@storybook/react";
//endregion

import {
  Layout,
  LayoutOwnProps,
  mockLayoutProps,
} from "./";

export default {
  title: "components/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args: LayoutOwnProps) => <Layout {...args} />;
export const Base = Template.bind({});

Base.args = {
  ...mockLayoutProps,
} as LayoutOwnProps;
