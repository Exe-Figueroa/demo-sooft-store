import { Input } from "./Input";

export const InputWithLabel = ({ labelText, icon, ...inputProps }) => {
  return (
    <label className="flex flex-col gap-2">
      <p>{labelText}</p>
      <Input icon={icon} {...inputProps} />
    </label>
  );
};
