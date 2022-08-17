---
to: <%= absPath %>/index.ts
---
<% name = h.inflection.camelize(componentName) %>
export {
  default as <%= name %>,
  type <%= name %>OwnProps,
  COMPONENT_KEY as COMPONENT_KEY_<%= name.toUpperCase(); %>,
} from "./<%= componentName %>";
export * from "./<%= componentName %>.mocks";
