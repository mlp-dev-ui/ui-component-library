import * as RadixTooltip from "@radix-ui/react-tooltip";
import styles from "./Tooltip.module.css";

export interface TooltipProps {
  /** The text shown inside the tooltip */
  content: string;
  /** The element that triggers the tooltip */
  children: React.ReactNode;
  /** Which side the tooltip appears on */
  side?: "top" | "bottom" | "left" | "right";
  /** Delay in milliseconds before tooltip appears */
  delayDuration?: number;
}

export function Tooltip({
  content,
  children,
  side = "right",
  delayDuration = 300,
}: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          {/* asChild passes tooltip behavior to the child element directly */}
          <span className={styles.trigger}>{children}</span>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            sideOffset={6}
            className={styles.content}
          >
            {content}
            <RadixTooltip.Arrow className={styles.arrow} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
