import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

const config: Config = {
  rootDir: "src",
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ["**/*.ts", "!**/types.ts"],
  coverageDirectory: "./coverage",
  ...createDefaultPreset(),
};

export default config;
