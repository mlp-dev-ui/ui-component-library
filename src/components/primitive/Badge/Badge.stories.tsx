// src/components/Badge/Badge.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Badges are small labels used to highlight status, category, or count.
They are non-interactive and purely informational.

## When to Use
- Showing status of an item (Active, Pending, Inactive)
- Highlighting a category or tag
- Drawing attention to new or updated content

## Dos and Don'ts
✅ Keep badge text short — one or two words maximum

✅ Use the correct variant to match the meaning (success for active, error for failed)

✅ Use consistently across the app for the same statuses

❌ Don't use badges for interactive actions — use a Button instead

❌ Don't use long text inside a badge

❌ Don't use too many badges in one place — it loses meaning
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info", "neutral"],
      description: "Controls the visual style of the badge",
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "Controls the size of the badge",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Success: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use for active, completed, or positive statuses.",
      },
    },
  },
  args: { label: "Active", variant: "success" },
};

export const Error: Story = {
  parameters: {
    docs: {
      description: { story: "Use for failed, rejected, or negative statuses." },
    },
  },
  args: { label: "Failed", variant: "error" },
};

export const Warning: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use for pending, expiring, or cautionary statuses.",
      },
    },
  },
  args: { label: "Pending", variant: "warning" },
};

export const Info: Story = {
  parameters: {
    docs: {
      description: { story: "Use for informational or in-progress statuses." },
    },
  },
  args: { label: "In Progress", variant: "info" },
};

export const Neutral: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use for inactive, archived, or neutral statuses.",
      },
    },
  },
  args: { label: "Inactive", variant: "neutral" },
};

export const Small: Story = {
  parameters: {
    docs: {
      description: { story: "Use small size when space is limited." },
    },
  },
  args: { label: "New", variant: "info", size: "sm" },
};
