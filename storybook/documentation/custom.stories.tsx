import type { Meta, StoryObj } from "@storybook/nextjs-vite";

function CustomDocumentation() {
  return (
    <article className="max-w-3xl space-y-4">
      <h1 className="type-labels">Custom components</h1>
      <p className="type-body-large">
        These components live in{" "}
        <code className="type-body-small">components/custom</code>. They are
        custom visual elements used within the marketing web app and the
        dashboard app.
      </p>
      <p className="type-body-large">
        The homepage flow (<code className="type-body-small">/</code>) covers
        pot creation on the marketing site. The dashboard route (
        <code className="type-body-small">/dashboard/*</code>) covers the pot
        preview and related UI. Custom components are shared or specific to
        those surfaces as needed.
      </p>
      <p className="type-body-large">
        They compose UI primitives from{" "}
        <code className="type-body-small">components/ui</code> with
        app-specific layout, copy, and behaviour. See{" "}
        <strong>UI/Documentation</strong> for how base primitives and variants
        are styled.
      </p>
    </article>
  );
}

const meta = {
  title: "Custom/Documentation",
  parameters: {
    layout: "padded",
    docs: {
      page: CustomDocumentation,
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: CustomDocumentation,
  parameters: {
    docs: {
      canvas: { hidden: true },
    },
  },
};
