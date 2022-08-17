//region Global Imports
import { ComponentMeta, ComponentStory } from "@storybook/react";
//endregion

import { Footer, FooterOwnProps, mockFooterProps } from "./";

export default {
  title: "components/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: FooterOwnProps) => <Footer {...args} />;
export const Base = Template.bind({});

Base.args = {
  ...mockFooterProps,
} as FooterOwnProps;
