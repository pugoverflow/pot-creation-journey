import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ReactNode } from "react";

import { AssetIcon } from "@/components/icons/asset-icon";
import { assets } from "@/lib/assets";

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
    usage: "Homepage main (`app/page.tsx`), dashboard pot preview sections.",
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
            px-5 · md:px-10 · xl:px-30 · max-w-[1440px]
          </p>
        </div>
      </div>
    ),
  },
  {
    className: "shadow-elevated",
    description:
      "Soft elevation shadow for cards, modals, and floating panels.",
    usage: "Homepage create-pot card, `Dialog`, select dropdown.",
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
  {
    className: "shadow-card",
    description:
      "Lighter card shadow for panels and grouped actions on the dashboard.",
    usage: "Dashboard pot actions panel (`surface-panel` + `shadow-card`).",
    render: () => (
      <div className="flex flex-wrap items-start justify-center gap-8 bg-[var(--color-grey-98)] p-8">
        <div className="flex w-[200px] flex-col items-center gap-2">
          <div className="h-[120px] w-full surface-panel" />
          <span className="type-body-small text-[var(--color-azure-65)]">
            No shadow
          </span>
        </div>
        <div className="flex w-[200px] flex-col items-center gap-2">
          <div className="shadow-card h-[120px] w-full surface-panel" />
          <span className="type-body-small text-[var(--color-azure-65)]">
            <code className="font-semibold text-[var(--color-blue-20)]">
              .shadow-card
            </code>
          </span>
        </div>
      </div>
    ),
  },
  {
    className: "shadow-focus",
    description:
      "Yellow focus ring for keyboard and focus-within states on interactive fields.",
    usage: "Input focus (`focus-within:shadow-focus`), selected toggle option.",
    render: () => (
      <div className="flex flex-wrap items-center justify-center gap-6 bg-[var(--color-grey-98)] p-8">
        <div className="surface-field flex h-[50px] w-[220px] items-center px-4 type-input shadow-focus">
          Focus ring
        </div>
        <div className="surface-field flex h-[50px] w-[220px] items-center px-4 type-input">
          Default
        </div>
      </div>
    ),
  },
  {
    className: "surface-card",
    description:
      "Large rounded card surface with border — homepage create-pot panel.",
    usage: "Homepage create-pot form (`surface-card` + `shadow-elevated`).",
    render: () => (
      <div className="bg-[var(--color-grey-98)] p-8">
        <div className="surface-card mx-auto max-w-sm p-6">
          <p className="type-labels">Create a pot</p>
          <p className="type-body-small mt-2 text-[var(--color-azure-34)]">
            rounded-[20px] · border · white background
          </p>
        </div>
      </div>
    ),
  },
  {
    className: "surface-panel",
    description:
      "Smaller rounded panel surface for grouped controls and toolbars.",
    usage: "Dashboard pot actions bar.",
    render: () => (
      <div className="bg-[var(--color-grey-98)] p-8">
        <div className="surface-panel shadow-card mx-auto flex w-fit gap-3 p-4">
          <span className="type-body-small rounded-[10px] bg-[var(--color-rose-52)] px-4 py-3 text-white">
            Action
          </span>
          <span className="type-body-small rounded-[10px] border border-[var(--color-grey-91)] bg-white px-4 py-3">
            Action
          </span>
        </div>
      </div>
    ),
  },
  {
    className: "surface-field",
    description:
      "Form field surface — select triggers, dropdowns, and similar controls.",
    usage: "`Select` trigger and popup, field-style surfaces.",
    render: () => (
      <div className="bg-[var(--color-grey-98)] p-8">
        <div className="surface-field mx-auto flex h-[50px] w-full max-w-xs items-center justify-between px-3.5 type-button-default">
          <span>Choose country</span>
          <span className="text-[var(--color-grey-46)]">▾</span>
        </div>
      </div>
    ),
  },
  {
    className: "stack",
    description:
      "Vertical flex column helper — use with Tailwind `gap-*` instead of repeating `flex flex-col`.",
    usage: "Homepage main, create-pot card, signup modal, dashboard sections.",
    render: () => (
      <div className="bg-[var(--color-grey-98)] p-8">
        <div className="stack mx-auto w-full max-w-xs gap-3">
          <div className="surface-field px-4 py-3 type-body-small">First</div>
          <div className="surface-field px-4 py-3 type-body-small">Second</div>
          <div className="surface-field px-4 py-3 type-body-small">Third</div>
        </div>
      </div>
    ),
  },
  {
    className: "asset-icon-mask",
    description:
      "Mask utility for SVG assets tinted with `currentColor` via `bg-current`.",
    usage: "`AssetIcon` (signup Apple button, social icons).",
    render: () => (
      <div className="flex items-center justify-center gap-6 bg-[var(--color-grey-98)] p-8">
        <AssetIcon
          src={assets.thirdParty.apple}
          size={32}
          className="text-[var(--color-blue-20)]"
        />
        <AssetIcon
          src={assets.thirdParty.facebook}
          size={32}
          className="text-[var(--color-cyan-37)]"
        />
        <AssetIcon
          src={assets.thirdParty.x}
          size={32}
          className="text-[var(--color-azure-34)]"
        />
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
        <h2 className="type-labels">Layout, surfaces & elevation</h2>
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
