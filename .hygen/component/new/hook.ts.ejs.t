---
to: "<%= typeComponent === 'smart' ? `${absPath}/use-${componentName}.ts` : null %>"
---

<%
 name = h.inflection.camelize(componentName)
%>
export type UseDialogOperatorsReturnValue = ReturnType<typeof <%= name %>>;


import { <%= name %>OwnProps } from "./";

const base: <%= name %>OwnProps = {};

export const mock<%= name %>Props = {
  base,
};
