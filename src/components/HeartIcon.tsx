const HeartIcon = ({
  size = 24,
  filled = false,
  fill = "#e63946",
  stroke = "currentColor",
  strokeWidth = 1.2,
  onClick,
  className = "",
  ariaLabel = "Like",
}: {
  size?: number;
  filled?: boolean;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}) => {
  const fillValue = filled ? fill : "transparent";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
    >
      <path
        d="M12.1 21.35l-1.1-1.02C5.14 15.24 2 12.39 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.89-3.14 6.74-8.9 11.83l-1 1.02z"
        fill={fillValue}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;
