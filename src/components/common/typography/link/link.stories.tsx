//region Global Imports
import { ComponentMeta, ComponentStory } from "@storybook/react";
//endregion

import { Link, LinkOwnProps, mockLinkProps } from "./";

export default {
  title: "components/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args: LinkOwnProps) => <Link {...args} />;
export const Base = Template.bind({});

Base.args = {
  ...mockLinkProps,
} as LinkOwnProps;
