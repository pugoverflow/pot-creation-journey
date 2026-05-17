import type { Meta, StoryObj } from "@storybook/nextjs-vite";

function UiDocumentation() {
  return (
    <article className="max-w-3xl space-y-4">
      <h1 className="type-labels">UI primitives</h1>
      <p className="type-body-large">
        These components live in{" "}
        <code className="type-body-small">components/ui</code>. They are base
        UI built on{" "}
        <a
          href="https://base-ui.com/"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Base UI
        </a>{" "}
        with custom styles applied in this project.
      </p>
      <p className="type-body-large">
        Variants are defined with{" "}
        <a
          href="https://cva.style/docs"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Class Variance Authority (CVA)
        </a>{" "}
        and styled using typography and layout utility classes from{" "}
        <code className="type-body-small">app/globals.css</code> (for example{" "}
        <code className="type-body-small">type-button-default</code>,{" "}
        <code className="type-body-small">type-button-cta</code>,{" "}
        <code className="type-body-small">type-input</code>).
      </p>
      <p className="type-body-large">
        Use these primitives anywhere in the app. Prefer composing them in{" "}
        <code className="type-body-small">components/custom</code> rather than
        duplicating styles on pages.
      </p>
    </article>
  );
}

const meta = {
  title: "UI/Documentation",
  parameters: {
    layout: "padded",
    docs: {
      page: UiDocumentation,
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: UiDocumentation,
  parameters: {
    docs: {
      canvas: { hidden: true },
    },
  },
};
