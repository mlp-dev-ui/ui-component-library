// src/components/Input/Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "Must be at least 6 characters",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
};
