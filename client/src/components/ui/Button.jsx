function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200";

  const styles = {
    primary:
      "bg-terracotta text-white hover:bg-orange-700",

    outline:
      "border border-white text-white hover:bg-white hover:text-dark-blue",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
