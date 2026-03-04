// src/components/Tooltip/Tooltip.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Tooltips display short informational text when a user hovers or focuses on an element.
They are used to provide context or explain an action without cluttering the UI.

## When to Use
- Explaining icon buttons that have no visible label
- Providing additional context for a form field
- Showing keyboard shortcuts

## Dos and Don'ts
✅ Keep tooltip text short — one sentence maximum

✅ Use for supplemental info, not critical information

✅ Always works on both hover and focus for accessibility

❌ Don't put interactive elements inside a tooltip

❌ Don't use tooltips for information that is essential to complete a task

❌ Don't use long paragraphs inside a tooltip
        `,
      },
    },
  },
  argTypes: {
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Which side the tooltip appears on relative to the trigger",
    },
    delayDuration: {
      control: "number",
      description: "Delay in milliseconds before the tooltip appears",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default tooltip appearing on the right side.",
      },
    },
  },
  render: (args) => (
    <div style={{ padding: "40px" }}>
      <Tooltip {...args}>
        <Button label="Hover Me" size="md" variant="primary" />
      </Tooltip>
    </div>
  ),
  args: {
    content: "This is a tooltip",
    side: "right",
  },
};

export const Top: Story = {
  parameters: {
    docs: {
      description: {
        story: "Tooltip appearing above the trigger element.",
      },
    },
  },
  render: (args) => (
    <div style={{ padding: "40px" }}>
      <Tooltip {...args}>
        <Button label="Hover Me" size="md" variant="primary" />
      </Tooltip>
    </div>
  ),
  args: {
    content: "Tooltip on top",
    side: "top",
  },
};

export const Bottom: Story = {
  parameters: {
    docs: {
      description: {
        story: "Tooltip appearing below the trigger element.",
      },
    },
  },
  render: (args) => (
    <div style={{ padding: "40px" }}>
      <Tooltip {...args}>
        <Button label="Hover Me" size="md" variant="primary" />
      </Tooltip>
    </div>
  ),
  args: {
    content: "Tooltip on bottom",
    side: "bottom",
  },
};

export const Left: Story = {
  parameters: {
    docs: {
      description: {
        story: "Tooltip appearing to the left of the trigger element.",
      },
    },
  },
  render: (args) => (
    <div style={{ padding: "40px" }}>
      <Tooltip {...args}>
        <Button label="Hover Me" size="md" variant="primary" />
      </Tooltip>
    </div>
  ),
  args: {
    content: "Tooltip on left",
    side: "left",
  },
};

export const OnIconButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Common use case — explaining an icon button with no visible label.",
      },
    },
  },
  render: (args) => (
    <div style={{ padding: "40px" }}>
      <Tooltip {...args}>
        <Button label="🗑" size="md" variant="ghost" />
      </Tooltip>
    </div>
  ),
  args: {
    content: "Delete item",
    side: "right",
  },
};
