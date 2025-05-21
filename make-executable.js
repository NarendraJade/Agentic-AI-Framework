// make-executable.js
const fs = require("fs");

const path = "build/index.js";

if (fs.existsSync(path)) {
  try {
    fs.chmodSync(path, 0o755);
    console.log("Made build/index.js executable.");
  } catch (err) {
    console.warn("chmod failed:", err.message);
  }
} else {
  console.warn("build/index.js not found.");
}
