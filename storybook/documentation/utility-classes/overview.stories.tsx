import type { Meta, StoryObj } from "@storybook/nextjs-vite";

function UtilityClassesDocumentation() {
  return (
    <article className="max-w-3xl space-y-4">
      <h1 className="type-h5">Utility classes</h1>
      <p className="type-body-large">
        Shared styles live in{" "}
        <code className="type-body-small">app/globals.css</code> inside{" "}
        <code className="type-body-small">@layer components</code>. Tokens are
        defined in <code className="type-body-small">@theme</code>.
      </p>
      <ul className="type-body-large list-inside list-disc space-y-1">
        <li>
          <strong>Typography → Reference</strong> —{" "}
          <code className="type-body-small">type-*</code> text styles
        </li>
        <li>
          <strong>Layout → Reference</strong> —{" "}
          <code className="type-body-small">page-container</code>,{" "}
          <code className="type-body-small">shadow-elevated</code>,{" "}
          <code className="type-body-small">shadow-card</code>,{" "}
          <code className="type-body-small">shadow-focus</code>,{" "}
          <code className="type-body-small">surface-card</code>,{" "}
          <code className="type-body-small">surface-panel</code>,{" "}
          <code className="type-body-small">stack</code>
        </li>
      </ul>
    </article>
  );
}

const meta = {
  title: "UTILITY CLASSES/Documentation",
  parameters: {
    layout: "padded",
    docs: {
      page: UtilityClassesDocumentation,
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: UtilityClassesDocumentation,
  parameters: {
    docs: {
      canvas: { hidden: true },
    },
  },
};
