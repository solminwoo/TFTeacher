# TFTeacher engineering guidance

<!-- ecc-engineering-defaults:start -->
## Engineering defaults
For coding work, read [.engineering/defaults.md](.engineering/defaults.md).
These are shared fallback conventions; the existing project owner, nested instructions,
skills, model choices, domain contracts and stronger verification/release gates remain authoritative.
No hooks, permissions, MCP services or background automation are installed by this guidance.

### Project adaptation
Express/EJS/Mongoose application with package-lock.json. The npm test script is a failing placeholder. Use synthetic records and an isolated database for behavior checks; inspect server startup/session handling first. Do not edit checked-in node_modules as application source.
<!-- ecc-engineering-defaults:end -->
