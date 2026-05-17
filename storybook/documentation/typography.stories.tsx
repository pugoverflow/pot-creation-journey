import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ReactNode } from "react";

type TypographySample = {
  className: string;
  description: string;
  usage: string;
  sample: string;
  darkBackground?: boolean;
  render?: () => ReactNode;
};

type TypographySection = {
  title: string;
  intro: string;
  samples: TypographySample[];
};

const sections: TypographySection[] = [
  {
    title: "Overview",
    intro:
      "Typography is defined in `app/globals.css` as `type-*` utility classes inside `@layer components`. Each class sets font family, size, weight, line height, letter spacing, and colour using design tokens from `@theme`. Apply a single class to an element. `--font-1` is Inter; `--font-2` is Montserrat.",
    samples: [],
  },
  {
    title: "Headings",
    intro: "Page and section headings on the marketing homepage and forms.",
    samples: [
      {
        className: "type-h1",
        description: "Primary page title.",
        usage: "Homepage hero (`app/page.tsx`).",
        sample: "Create a pot in seconds",
      },
      {
        className: "type-h5",
        description: "Section labels and compact headings.",
        usage: "Form section titles, select labels.",
        sample: "What are you collecting for?",
      },
    ],
  },
  {
    title: "Body",
    intro: "General copy and secondary text.",
    samples: [
      {
        className: "type-body-large",
        description: "Intro and supporting paragraphs.",
        usage: "Homepage subheading below the hero title.",
        sample: "Collect money for anything — trips, gifts, sports, and more.",
      },
      {
        className: "type-body-small",
        description: "Labels, captions, and tertiary text.",
        usage: "Toggle group labels, dashboard metadata.",
        sample: "To travel somewhere cool",
      },
    ],
  },
  {
    title: "Interactive",
    intro: "Text styles used by UI primitives.",
    samples: [
      {
        className: "type-button",
        description: "Default button label.",
        usage: "Button — `link`, `tertiary`, `primary`, and `secondary` variants.",
        sample: "Continue",
      },
      {
        className: "type-cta-button",
        description: "Call-to-action button label.",
        usage: "Button — `cta` variant.",
        sample: "Sign up",
      },
      {
        className: "type-input",
        description: "Input text and placeholder.",
        usage: "`components/ui/input`.",
        sample: "Email address",
      },
      {
        className: "type-emoji",
        description: "Category emoji in toggles.",
        usage: "`ToggleGroup` emoji span.",
        sample: "✈️",
      },
    ],
  },
  {
    title: "Pot preview",
    intro: "Hero typography on the dashboard pot card (white on purple).",
    samples: [
      {
        className: "type-pot-name",
        description: "Pot title on the preview card.",
        usage: "Dashboard pot preview.",
        sample: "Summer holiday fund",
        darkBackground: true,
      },
      {
        className: "type-pot-amount",
        description: "Large amount on the preview card.",
        usage: "Dashboard amount display.",
        sample: "£1,234.56",
        darkBackground: true,
      },
      {
        className: "type-invite-title",
        description: "Heading above invite / share.",
        usage: "Dashboard invite section.",
        sample: "Invite your group",
      },
    ],
  },
  {
    title: "Social proof",
    intro: "Trust strip on the homepage.",
    samples: [
      {
        className: "type-rating",
        description: "Star rating figure.",
        usage: "Homepage rating.",
        sample: "4.8",
      },
      {
        className: "type-review",
        description: "Customer quote.",
        usage: "Homepage testimonial.",
        sample: "“Really easy to set up and share with friends.”",
      },
    ],
  },
  {
    title: "Dialog",
    intro: "Modal copy for signup and login.",
    samples: [
      {
        className: "type-dialog-title",
        description: "Modal heading.",
        usage: "`Dialog` title.",
        sample: "Sign in to start collecting",
      },
      {
        className: "type-dialog-description",
        description: "Modal body copy.",
        usage: "`Dialog` description.",
        sample: "Create an account to save your pot and share it with others.",
      },
      {
        className: "type-dialog-legal",
        description: "Terms and fine print.",
        usage: "Signup modal footer.",
        sample: "By continuing you agree to our terms.",
        render: () => (
          <p className="type-dialog-legal">
            By continuing you agree to our{" "}
            <span className="type-dialog-link">terms</span>.
          </p>
        ),
      },
      {
        className: "type-dialog-link",
        description: "Underline modifier for links in legal text.",
        usage: "With `type-dialog-legal` on a span or anchor.",
        sample: "terms",
        render: () => (
          <p className="type-dialog-legal">
            Example:{" "}
            <span className="type-dialog-link">Privacy policy</span>
          </p>
        ),
      },
    ],
  },
];

function TypographyPreview({
  className,
  sample,
  darkBackground,
  render,
}: Pick<
  TypographySample,
  "className" | "sample" | "darkBackground" | "render"
>) {
  return (
    <div
      className={
        darkBackground
          ? "min-h-[4rem] rounded-md bg-[var(--color-blue-23)] px-4 py-3"
          : "min-h-[4rem] rounded-md border border-[var(--color-grey-91)] bg-white px-4 py-3"
      }
    >
      {render ? (
        render()
      ) : className === "type-input" ? (
        <input
          type="text"
          className={className}
          defaultValue={sample}
          readOnly
          aria-label="Input typography sample"
        />
      ) : (
        <p className={className}>{sample}</p>
      )}
    </div>
  );
}

function TypographyTable({ samples }: { samples: TypographySample[] }) {
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
          {samples.map((row) => (
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
              <td className="align-middle px-4 py-4">
                <TypographyPreview
                  className={row.className}
                  sample={row.sample}
                  darkBackground={row.darkBackground}
                  render={row.render}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TypographyShowcase() {
  return (
    <div className="flex max-w-4xl flex-col gap-12">
      {sections.map((section) => (
        <section key={section.title} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="type-h5">{section.title}</h2>
            <p className="type-body-large">{section.intro}</p>
          </div>
          {section.samples.length > 0 ? (
            <TypographyTable samples={section.samples} />
          ) : null}
        </section>
      ))}
    </div>
  );
}

const meta = {
  title: "UTILITY CLASSES/Typography",
  parameters: {
    layout: "padded",
  },
  render: () => <TypographyShowcase />,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reference: Story = {};
