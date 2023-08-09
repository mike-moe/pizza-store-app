import { useFormContext, Controller } from "react-hook-form";
import { InputProps } from "./Input.type";
const InputForm = ({ name, type }: InputProps) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller name={name} control={control} defaultValue="" render={({ field }) => <input {...field} type={type} />} />
    </>
  );
};

export default InputForm;
