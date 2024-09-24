export const Input = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  icon: Icon,
  required = false,
}) => {
  return (
    <div className="flex gap-2 items-center relative">
      {Icon && <Icon className="absolute left-0 pl-3 flex items-center pointer-events-none size-7" />}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        required={required}
        value={value ?? ""}
        className="pl-10 py-2 pr-4 w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out outline-none border border-solid"
        onChange={({ target: { value } }) => onChange({ name, value })}
      />
    </div>
  );
};
