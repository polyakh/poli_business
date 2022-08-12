---
to: <%= absPath %>/<%= componentName %>.stories.tsx
---
//region Global Imports
import { ComponentMeta, ComponentStory } from "@storybook/react";
//endregion
<%
 name = h.inflection.camelize(componentName)
%>
import {
  <%= name %>,
  <%= name %>OwnProps,
  mock<%= name %>Props,
} from "./";

export default {
  title: "components/<%= name %>",
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>;

const Template: ComponentStory<typeof <%= name %>> = (args: <%= name %>OwnProps) => <<%= name %> {...args} />;
export const Base = Template.bind({});

Base.args = {
  ...mock<%= name %>Props,
} as <%= name %>OwnProps;
