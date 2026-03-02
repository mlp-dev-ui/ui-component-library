import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Modals focus the user's attention on a specific task or information.
They block interaction with the rest of the page until dismissed.

## When to Use
- Confirming a destructive action (delete, remove)
- Collecting input without leaving the current page
- Displaying important information that requires acknowledgement

## Dos and Don'ts
✅ Always provide a clear title

✅ Always provide a way to close — X button, backdrop click, or Escape key

✅ Use \`actions\` for confirm/cancel buttons in the footer

❌ Don't use modals for simple notifications — use a Toast instead

❌ Don't nest modals inside modals

❌ Don't make modals too wide or too tall — keep content concise
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Since Modal needs open/close state we use a render function
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic modal with title and body content.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button
          label="Open Modal"
          variant="primary"
          onClick={() => setOpen(true)}
        />
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Modal Title">
          <p>This is the body content of the modal.</p>
        </Modal>
      </>
    );
  },
};

export const WithActions: Story = {
  parameters: {
    docs: {
      description: {
        story: "Modal with confirm and cancel buttons in the footer.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button
          label="Open Modal"
          variant="primary"
          onClick={() => setOpen(true)}
        />
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Confirm Action"
          actions={
            <>
              <Button
                label="Cancel"
                variant="ghost"
                size="sm"
                onClick={() => setOpen(false)}
              />
              <Button
                label="Confirm"
                variant="primary"
                size="sm"
                onClick={() => setOpen(false)}
              />
            </>
          }
        >
          <p>Are you sure you want to proceed with this action?</p>
        </Modal>
      </>
    );
  },
};

export const DeleteConfirmation: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use danger variant for destructive actions like deleting data.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button
          label="Delete Account"
          variant="danger"
          onClick={() => setOpen(true)}
        />
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Delete Account"
          actions={
            <>
              <Button
                label="Cancel"
                variant="ghost"
                size="sm"
                onClick={() => setOpen(false)}
              />
              <Button
                label="Delete"
                variant="danger"
                size="sm"
                onClick={() => setOpen(false)}
              />
            </>
          }
        >
          <p>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
        </Modal>
      </>
    );
  },
};

export const WithForm: Story = {
  parameters: {
    docs: {
      description: {
        story: "Modal containing a form for collecting user input.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button
          label="Edit Profile"
          variant="primary"
          onClick={() => setOpen(true)}
        />
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Edit Profile"
          actions={
            <>
              <Button
                label="Cancel"
                variant="ghost"
                size="sm"
                onClick={() => setOpen(false)}
              />
              <Button
                label="Save"
                variant="primary"
                size="sm"
                onClick={() => setOpen(false)}
              />
            </>
          }
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>Update your profile information below.</p>
          </div>
        </Modal>
      </>
    );
  },
};
