import React from "react";
import { CheckboxProps } from "./Checkbox.type";
import { useFormContext, Controller } from "react-hook-form";

const FormCheckbox: React.FC<CheckboxProps> = ({ options, name, reuiredValue = false }: CheckboxProps) => {
  const { control, register } = useFormContext();

  return (
    <div className="space-y-2">
      <div className="space-x-4 mt-3">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-start space-x-2 cursor-pointer">
            <Controller
              name="selectedOption"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...register(name, {
                    required: {
                      value: reuiredValue,
                      message: "",
                    },
                  })}
                  type="checkbox"
                  value={option.value}
                  checked={field.value === option.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="font-normal text-blue-500 h-4 w-4 mt-1"
                  disabled={true}
                />
              )}
            />
            <span className="text-gray-800">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FormCheckbox;
