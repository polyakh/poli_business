---
to: <%= absPath %>/<%= componentName %>.mocks.ts
---
<%
 name = h.inflection.camelize(componentName)
%>
import { <%= name %>OwnProps } from "./";

const base: <%= name %>OwnProps = {};

export const mock<%= name %>Props = {
  base,
};
