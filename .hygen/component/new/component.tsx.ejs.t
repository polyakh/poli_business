---
to: <%= absPath %>/<%= componentName %>.tsx
---
//region Global Imports
import React from 'react';
//endregion
<%
 name = h.inflection.camelize(componentName)
%>

interface <%= name %>OwnProps {}
const COMPONENT_KEY = "<%= name %>";

const <%= h.inflection.camelize(componentName) %> = ({}: <%= name %>OwnProps) => <div><%= name %></div>;

export { COMPONENT_KEY };
export type { <%= name %>OwnProps };

export default <%= name %>;
