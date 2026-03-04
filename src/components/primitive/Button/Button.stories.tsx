import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Buttons trigger actions or navigate users to another page.
Use them for the most important actions you want users to take.

## When to Use
- Submitting a form
- Confirming a destructive action
- Triggering a primary workflow

## Dos and Don'ts
✅ Use \`primary\` for the single most important action on a page

✅ Use \`danger\` for destructive or irreversible actions

✅ Always provide a clear action-oriented label ("Save", "Delete", "Cancel")

❌ Don't use multiple \`primary\` buttons on the same page

❌ Don't use vague labels like "Click Here" or "Submit"

❌ Don't use \`danger\` for non-destructive actions
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost"],
      description: "Controls the visual style of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Controls the size of the button",
    },
    disabled: {
      description: "Disables the button when true",
    },
    loading: {
      description: "Shows loading state, also disables the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use for the main action on a page. Only one primary button per page.",
      },
    },
  },
  args: { label: "Click Me", variant: "primary", size: "md" },
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use for supporting actions alongside a primary button.",
      },
    },
  },
  args: { label: "Click Me", variant: "secondary", size: "md" },
};

export const Danger: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use for destructive or irreversible actions like deleting data.",
      },
    },
  },
  args: { label: "Delete", variant: "danger", size: "md" },
};

export const Ghost: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use for secondary or cancel actions. Least visually prominent.",
      },
    },
  },
  args: { label: "Cancel", variant: "ghost", size: "md" },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use when an action is unavailable. Always explain why it is disabled.",
      },
    },
  },
  args: { label: "Disabled", disabled: true },
};

export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use during async operations like form submissions to prevent double clicks.",
      },
    },
  },
  args: { label: "Loading", loading: true },
};
