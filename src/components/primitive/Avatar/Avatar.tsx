import { useState } from "react";
import styles from "./Avatar.module.css";

export type AvatarSize = "sm" | "md" | "lg";
export type AvatarVariant = "circle" | "square";

export interface AvatarProps {
  /** Image URL */
  src?: string;
  /** Image alt text */
  alt?: string;
  /** Full name used to generate fallback initials e.g. "John Doe" → "JD" */
  name?: string;
  /** Size of the avatar */
  size?: AvatarSize;
  /** Shape of the avatar */
  variant?: AvatarVariant;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  variant = "circle",
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);

  const showImage = src && !imgError;
  const showInitials = !showImage && name;
  const showPlaceholder = !showImage && !showInitials;

  return (
    <div
      className={`${styles.avatar} ${styles[size]} ${styles[variant]}`}
      aria-label={alt ?? name ?? "avatar"}
    >
      {showImage && (
        <img
          src={src}
          alt={alt ?? name ?? "avatar"}
          className={styles.image}
          onError={() => setImgError(true)}
        />
      )}
      {showInitials && (
        <span className={styles.initials}>{getInitials(name!)}</span>
      )}
      {showPlaceholder && <span className={styles.placeholder}>?</span>}
    </div>
  );
}
