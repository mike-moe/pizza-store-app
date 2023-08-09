import React, { memo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { InputProps } from "./Input.type";
const FormInput = memo(({ name, type, className, id }: InputProps) => {
  const { control, register } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <>
            <input
              id={id}
              {...field}
              {...register(name, {
                required: `${name} is required`,
              })}
              type={type}
              className={`${className} ${fieldState.error?.message ? `border-red-700` : ""}`}
            />
          </>
        )}
      />
    </>
  );
});

export default FormInput;
