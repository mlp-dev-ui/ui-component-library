import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { Button } from "../Button/Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
            Cards group related information and actions about a single subject.
            They act as an entry point to more detailed information.

            ## When to Use
            - Displaying a collection of items (products, articles, users)
            - Grouping related information with an optional action
            - Navigating to a detail page

            ## Dos and Don'ts
            ✅ Always provide a title

            ✅ Use \`actions\` for primary interactions like "View", "Edit", "Delete"

            ✅ Use \`imageAlt\` for accessibility when providing an image

            ❌ Don't put too much content inside a card — keep it scannable

            ❌ Don't use more than 2 action buttons in the footer

            ❌ Don't nest cards inside cards
        `,
      },
    },
  },
  argTypes: {
    onClick: {
      description: "Makes the entire card clickable when provided",
    },
    actions: {
      description: "Footer actions — pass Button components here",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic card with title and description.",
      },
    },
  },
  args: {
    title: "Card Title",
    description: "This is a description of the card content.",
  },
};

export const WithImage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Card with an image at the top. Always provide imageAlt for accessibility.",
      },
    },
  },
  args: {
    title: "Card With Image",
    description: "This card has an image at the top.",
    imageUrl: "https://placehold.co/600x200",
    imageAlt: "Placeholder image",
  },
};

export const WithActions: Story = {
  parameters: {
    docs: {
      description: {
        story: "Card with action buttons in the footer.",
      },
    },
  },
  args: {
    title: "Card With Actions",
    description: "This card has action buttons in the footer.",
    actions: (
      <>
        <Button label="View" variant="primary" size="sm" />
        <Button label="Delete" variant="danger" size="sm" />
      </>
    ),
  },
};

export const Clickable: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Entire card is clickable. Use when the card navigates to a detail page.",
      },
    },
  },
  args: {
    title: "Clickable Card",
    description: "Click anywhere on this card to trigger an action.",
    onClick: () => alert("Card clicked!"),
  },
};

export const Full: Story = {
  parameters: {
    docs: {
      description: {
        story: "Card with all parts — image, title, description and actions.",
      },
    },
  },
  args: {
    title: "Full Card",
    description:
      "This card has all parts — image, title, description and actions.",
    imageUrl: "https://placehold.co/600x200",
    imageAlt: "Placeholder image",
    actions: (
      <>
        <Button label="View" variant="primary" size="sm" />
        <Button label="Delete" variant="danger" size="sm" />
      </>
    ),
  },
};
