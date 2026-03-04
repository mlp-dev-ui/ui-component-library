import styles from "./Card.module.css";

export interface CardProps {
  /** Title displayed on the card */
  title: string;
  /** Description or body text */
  description?: string;
  /** Image URL displayed at the top of the card */
  imageUrl?: string;
  /** Alt text for the image — required for accessibility when imageUrl is provided */
  imageAlt?: string;
  /** Body content — pass any children here */
  children?: React.ReactNode;
  /** Footer actions — pass Button components here */
  actions?: React.ReactNode;
  /** Makes the entire card clickable */
  onClick?: () => void;
}

export function Card({
  title,
  description,
  imageUrl,
  imageAlt,
  children,
  actions,
  onClick,
}: CardProps) {
  return (
    <div
      className={`${styles.card} ${onClick ? styles.clickable : ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
    >
      {imageUrl && (
        <img src={imageUrl} alt={imageAlt || title} className={styles.image} />
      )}

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {children && <div>{children}</div>}
      </div>

      {actions && <div className={styles.footer}>{actions}</div>}
    </div>
  );
}
