import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Primitive/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Avatar displays a user profile image with fallback initials or a placeholder if no image is available.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=3",
    alt: "John Doe",
    size: "md",
    variant: "circle",
  },
  parameters: {
    docs: {
      description: {
        story: "Avatar with a profile image.",
      },
    },
  },
};

export const WithInitials: Story = {
  args: {
    name: "John Doe",
    size: "md",
    variant: "circle",
  },
  parameters: {
    docs: {
      description: {
        story: "Avatar with fallback initials when no image is provided.",
      },
    },
  },
};

export const WithPlaceholder: Story = {
  args: {
    size: "md",
    variant: "circle",
  },
  parameters: {
    docs: {
      description: {
        story: "Avatar with placeholder when no image or name is provided.",
      },
    },
  },
};

export const SizeSmall: Story = {
  args: {
    name: "John Doe",
    size: "sm",
    variant: "circle",
  },
};

export const SizeMedium: Story = {
  args: {
    name: "John Doe",
    size: "md",
    variant: "circle",
  },
};

export const SizeLarge: Story = {
  args: {
    name: "John Doe",
    size: "lg",
    variant: "circle",
  },
};

export const SquareVariant: Story = {
  args: {
    name: "John Doe",
    size: "md",
    variant: "square",
  },
  parameters: {
    docs: {
      description: {
        story: "Avatar with square shape.",
      },
    },
  },
};

export const BrokenImage: Story = {
  args: {
    src: "https://broken-url.com/image.jpg",
    name: "John Doe",
    size: "md",
    variant: "circle",
  },
  parameters: {
    docs: {
      description: {
        story: "Avatar falls back to initials when image fails to load.",
      },
    },
  },
};
