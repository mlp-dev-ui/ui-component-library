import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click Me",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    label: "Click Me",
    variant: "secondary",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    label: "Delete",
    variant: "danger",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    label: "Cancel",
    variant: "ghost",
    size: "md",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};
export const Loading: Story = {
  args: {
    label: "Loading",
    loading: true,
  },
};
