function InputField({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  ...props
}) {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label className="block mb-1 text-sm font-semibold text-dark-blue">
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <div className="relative">
        {/* Icon */}
        {Icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon size={18} />
          </span>
        )}

        {/* Input */}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full rounded-lg border border-gray-300 px-4 py-2 text-sm
            ${Icon ? "pl-10" : ""}
            focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
          `}
          {...props}
        />
      </div>
    </div>
  );
}

export default InputField;
