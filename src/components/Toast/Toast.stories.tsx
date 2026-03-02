// src/components/Toast/Toast.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToastProvider, useToast } from "./index";
import { Button } from "../Button/Button";

const meta: Meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Toasts are brief, non-intrusive notifications that appear temporarily.
They inform users about an operation's result without interrupting their workflow.

## When to Use
- Confirming a successful action ("Changes saved")
- Notifying about an error ("Failed to save")
- Showing a warning ("Session expiring soon")
- Providing neutral information ("New version available")

## How to Use
Wrap your app with \`ToastProvider\` and use the \`useToast\` hook:

\`\`\`tsx
// main.tsx
import { ToastProvider } from '@lakshmi-p-mantravadi/ui';

<ToastProvider>
  <App />
</ToastProvider>

// Inside any component
import { useToast } from '@lakshmi-p-mantravadi/ui';

const { showToast } = useToast();
showToast('Changes saved!', 'success');
\`\`\`

## Dos and Don'ts
✅ Keep messages short and clear

✅ Use the correct type — success, error, warning, info

✅ Let toasts auto-dismiss — don't make users manually close every one

❌ Don't show multiple toasts for the same action

❌ Don't use toasts for critical errors that need user action — use a Modal instead

❌ Don't put interactive elements like links or buttons inside a toast
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const Success: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use for successful operations like saving or submitting.",
      },
    },
  },
  render: () => {
    const { showToast } = useToast();
    return (
      <Button
        label="Show Success"
        variant="primary"
        onClick={() => showToast("Changes saved successfully!", "success")}
      />
    );
  },
};

export const Error: Story = {
  parameters: {
    docs: {
      description: { story: "Use when an operation fails." },
    },
  },
  render: () => {
    const { showToast } = useToast();
    return (
      <Button
        label="Show Error"
        variant="danger"
        onClick={() =>
          showToast("Failed to save changes. Please try again.", "error")
        }
      />
    );
  },
};

export const Warning: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use to warn users about something that needs attention.",
      },
    },
  },
  render: () => {
    const { showToast } = useToast();
    return (
      <Button
        label="Show Warning"
        variant="secondary"
        onClick={() =>
          showToast("Your session will expire in 5 minutes.", "warning")
        }
      />
    );
  },
};

export const Info: Story = {
  parameters: {
    docs: {
      description: { story: "Use for neutral informational messages." },
    },
  },
  render: () => {
    const { showToast } = useToast();
    return (
      <Button
        label="Show Info"
        variant="ghost"
        onClick={() => showToast("A new version is available.", "info")}
      />
    );
  },
};

export const AllTypes: Story = {
  parameters: {
    docs: {
      description: {
        story: "Trigger all toast types at once to see them stacked.",
      },
    },
  },
  render: () => {
    const { showToast } = useToast();
    return (
      <Button
        label="Show All"
        variant="primary"
        onClick={() => {
          showToast("Changes saved!", "success");
          showToast("Something went wrong.", "error");
          showToast("Session expiring soon.", "warning");
          showToast("New version available.", "info");
        }}
      />
    );
  },
};
