// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import fs from "node:fs";
import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideBundlerConfig(enableTailwind);

// Cloud sessions can't download Remotion's headless Chrome; use the preinstalled one when present.
const preinstalledHeadlessShell =
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell";
if (fs.existsSync(preinstalledHeadlessShell)) {
  Config.setBrowserExecutable(preinstalledHeadlessShell);
}
