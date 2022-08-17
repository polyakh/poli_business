---
to: <%= absPath %>/<%= componentName %>.tsx
---
//region Global Imports
import React from "react";
//endregion
//region Local Imports
import { WithAsProps } from "~types"
//endregion
<%
 name = h.inflection.camelize(componentName)
%>
interface <%= name %>OwnProps extends WithAsProps {}
const COMPONENT_KEY = "<%= name %>";

const <%= h.inflection.camelize(componentName) %> = ({ as: Component = "div" }: <%= name %>OwnProps) => <Component><%= name %></Component>;

export { COMPONENT_KEY };
export type { <%= name %>OwnProps };

export default <%= name %>;