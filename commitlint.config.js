// https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7#git-hooks

// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
const ALWAYS = "always";
const NEVER = "never";
const LVL1 = 1;
const LVL2 = 2;

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [LVL1, ALWAYS],
    "body-max-line-length": [LVL2, ALWAYS, 100],
    "footer-leading-blank": [LVL1, ALWAYS],
    "footer-max-line-length": [LVL2, ALWAYS, 100],
    "header-max-length": [LVL2, ALWAYS, 100],
    "scope-case": [LVL2, ALWAYS, "lower-case"],
    "subject-case": [LVL2, NEVER, ["sentence-case", "start-case", "pascal-case", "upper-case"]],
    "subject-empty": [LVL2, NEVER],
    "subject-full-stop": [LVL2, NEVER, "."],
    "type-case": [LVL2, ALWAYS, "lower-case"],
    "type-empty": [LVL2, NEVER],
    "type-enum": [
      LVL2,
      ALWAYS,
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "translation",
        "security",
        "changeset",
      ],
    ],
  },
};
