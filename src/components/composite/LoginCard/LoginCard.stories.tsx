import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { LoginCard } from "./LoginCard";
import { ToastProvider, useToast } from "../../primitive/Toast";

const meta: Meta<typeof LoginCard> = {
  title: "Composite/LoginCard",
  component: LoginCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A composite login card built from primitive components — Card, Input and Button.
Handles email and password validation internally.
The consumer is responsible for the login logic via the \`onLogin\` callback.

## When to Use
- Login pages
- Authentication flows
- Sign in modals

## How to Use
\`\`\`tsx
import { LoginCard } from '@mlp-dev-ui/ui';

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin(email: string, password: string) {
    setLoading(true);
    try {
      await loginApi(email, password);
    } catch (e) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoginCard
      onLogin={handleLogin}
      loading={loading}
      error={error}
    />
  );
}
\`\`\`

## Dos and Don'ts
✅ Handle loading and error states from your API

✅ Use \`error\` prop to show API errors like "Invalid credentials"

✅ Use \`title\` and \`description\` to customize for different contexts

❌ Don't put login logic inside the component — use the \`onLogin\` callback

❌ Don't use this for registration or password reset — build separate composite components for those
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
            backgroundColor: "var(--color-gray-100)",
            padding: "var(--spacing-lg)",
          }}
        >
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <Story />
          </div>
        </div>
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginCard>;

// Default story with simulated login
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Default login card. Try submitting empty fields to see validation.
Use \`test@test.com\` and \`password123\` to simulate a successful login.
        `,
      },
    },
  },
  render: () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { showToast } = useToast();

    function handleLogin(email: string, password: string) {
      setLoading(true);
      setError("");

      setTimeout(() => {
        setLoading(false);
        if (email === "test@test.com" && password === "password123") {
          showToast("Login successful! Welcome back.", "success");
        } else {
          setError("Invalid email or password. Please try again.");
        }
      }, 1500);
    }

    return (
      <LoginCard onLogin={handleLogin} isLoading={loading} error={error} />
    );
  },
};

// Loading state
export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Shows the loading state while the login API call is in progress.",
      },
    },
  },
  args: {
    onLogin: () => {},
    isLoading: true,
  },
};

// With API error
export const WithError: Story = {
  parameters: {
    docs: {
      description: {
        story: "Shows an API error message below the form.",
      },
    },
  },
  args: {
    onLogin: () => {},
    error: "Invalid email or password. Please try again.",
  },
};

// Custom title and description
export const CustomTitle: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use title and description props to customize for different contexts.",
      },
    },
  },
  args: {
    onLogin: () => {},
    title: "Admin Portal",
    description: "Sign in with your admin credentials to continue.",
  },
};
