// src/components/Input/Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Input fields allow users to enter and edit text.
Use them in forms, search bars, and anywhere you need user text input.

## When to Use
- Collecting user information in a form
- Search functionality
- Editing existing content

## Dos and Don'ts
✅ Always provide a label so users know what to enter

✅ Use \`helperText\` to give users additional context

✅ Use \`error\` to clearly communicate validation failures

✅ Use the correct \`type\` (email, password, number) for better mobile keyboards

❌ Don't use placeholder text as a replacement for a label

❌ Don't show an error before the user has interacted with the field

❌ Don't use vague error messages like "Invalid input"
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
      description: "The type of input. Affects keyboard on mobile devices",
    },
    disabled: {
      description: "Disables the input when true",
    },
    error: {
      description: "Shows error state with a message below the input",
    },
    helperText: {
      description: "Shows helper text below the input when there is no error",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic input with a label and placeholder.",
      },
    },
  },
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const WithHelperText: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use helperText to give users hints about what to enter.",
      },
    },
  },
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "Must be at least 6 characters",
  },
};

export const WithError: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use error to show validation failures. Always provide a clear message.",
      },
    },
  },
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Invalid email address",
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use when the field is not available. Always explain why it is disabled.",
      },
    },
  },
  args: {
    label: "Email",
    placeholder: "Enter your email",
    disabled: true,
  },
};

export const Password: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use type="password" for sensitive fields. Input is masked automatically.',
      },
    },
  },
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
};
