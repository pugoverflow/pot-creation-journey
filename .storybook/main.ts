import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(ts|tsx)",
    "../storybook/documentation/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
  framework: "@storybook/nextjs-vite",
};

export default config;
