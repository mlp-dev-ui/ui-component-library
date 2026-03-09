import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Modal.module.css";

export interface ModalProps {
  /** Controls whether the modal is open */
  isOpen: boolean;
  /** Called when the modal is closed */
  onClose: () => void;
  /** Title displayed in the modal header */
  title: string;
  /** Body content of the modal */
  children: React.ReactNode;
  /** Footer actions - pass Button components here */
  actions?: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  actions,
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content aria-describedby={undefined} className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          <Dialog.Close className={styles.closeButton} aria-label="Close">
            X
          </Dialog.Close>
        </div>

        {/* Body */}
        <div className={styles.body}>{children}</div>
        {/* Footer */}
        {actions && <div className={styles.footer}>{actions}</div>}
      </Dialog.Content>
    </Dialog.Root>
  );
}
