import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

const config: Config = {
  rootDir: "src",
  verbose: true,
  ...createDefaultPreset(),
};

export default config;
