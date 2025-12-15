const Button = ({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`flex rounded-sm items-center justify-center text-body bg-gray-50 border border-black text-sm w-20 h-10 focus:outline-none ${
        disabled
          ? "disabled:opacity-20"
          : "hover:bg-gray-800 hover:text-gray-100 hover:cursor-pointer"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default Button;
