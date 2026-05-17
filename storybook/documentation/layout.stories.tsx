import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ReactNode } from "react";

type LayoutSample = {
  className: string;
  description: string;
  usage: string;
  render: () => ReactNode;
};

const samples: LayoutSample[] = [
  {
    className: "page-container",
    description:
      "Centres page content and applies responsive horizontal padding. Max width 1440px.",
    usage:
      "Homepage main (`app/page.tsx`), dashboard pot preview sections.",
    render: () => (
      <div className="w-full bg-[var(--color-grey-98)] py-6">
        <div className="page-container border border-dashed border-[var(--color-azure-65)] bg-white py-8">
          <p className="type-body-small text-center text-[var(--color-azure-34)]">
            Content inside{" "}
            <code className="font-semibold text-[var(--color-blue-20)]">
              .page-container
            </code>
          </p>
          <p className="type-body-small mt-2 text-center text-[var(--color-azure-65)]">
            px-5 · md:px-10 · xl:px-[120px] · max-w-[1440px]
          </p>
        </div>
      </div>
    ),
  },
  {
    className: "shadow-elevated",
    description:
      "Soft elevation shadow for cards, modals, and floating panels.",
    usage:
      "Homepage create-pot card, `Dialog`, select dropdown.",
    render: () => (
      <div className="flex flex-wrap items-start justify-center gap-8 bg-[var(--color-grey-98)] p-8">
        <div className="flex w-[200px] flex-col items-center gap-2">
          <div className="h-[120px] w-full surface-card" />
          <span className="type-body-small text-[var(--color-azure-65)]">
            No shadow
          </span>
        </div>
        <div className="flex w-[200px] flex-col items-center gap-2">
          <div className="shadow-elevated h-[120px] w-full surface-card" />
          <span className="type-body-small text-[var(--color-azure-65)]">
            <code className="font-semibold text-[var(--color-blue-20)]">
              .shadow-elevated
            </code>
          </span>
        </div>
      </div>
    ),
  },
];

function LayoutTable({ rows }: { rows: LayoutSample[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--color-grey-91)]">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[var(--color-grey-91)] bg-[var(--color-grey-98)]">
            <th
              scope="col"
              className="type-body-small w-[38%] px-4 py-3 font-semibold text-[var(--color-blue-20)]"
            >
              Class
            </th>
            <th
              scope="col"
              className="type-body-small w-[62%] px-4 py-3 font-semibold text-[var(--color-blue-20)]"
            >
              Example
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.className}
              className="border-b border-[var(--color-grey-91)] last:border-0"
            >
              <td className="align-top px-4 py-4">
                <code className="type-body-small block font-semibold text-[var(--color-blue-20)]">
                  .{row.className}
                </code>
                <p className="type-body-small mt-2 text-[var(--color-azure-34)]">
                  {row.description}
                </p>
                <p className="type-body-small mt-1 text-[var(--color-azure-65)]">
                  <span className="font-medium text-[var(--color-azure-34)]">
                    Used in:
                  </span>{" "}
                  {row.usage}
                </p>
              </td>
              <td className="align-middle px-4 py-4">{row.render()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LayoutShowcase() {
  return (
    <div className="flex max-w-4xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="type-labels">Layout & elevation</h2>
        <p className="type-body-large">
          Layout utilities are defined in{" "}
          <code className="type-body-small">app/globals.css</code> inside{" "}
          <code className="type-body-small">@layer components</code>. Combine
          them with Tailwind for flex, grid, and spacing on pages and surfaces.
        </p>
      </div>
      <LayoutTable rows={samples} />
    </div>
  );
}

const meta = {
  title: "UTILITY CLASSES/Layout",
  parameters: {
    layout: "padded",
  },
  render: () => <LayoutShowcase />,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reference: Story = {};
