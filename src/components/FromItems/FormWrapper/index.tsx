import React, { memo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormData, FormProps } from "./FormWrapper.type";
const FormWrapper = memo(({ children, onSubmit }: FormProps) => {
  const form = useForm<FormData>();
  const { handleSubmit } = form;

  return (
    <FormProvider {...form}>
      <div className="w-full max-w-md mx-auto  min-h-full bg-white  shadow-md rounded flex justify-center ">
        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          {children}
        </form>
      </div>
    </FormProvider>
  );
});

export default FormWrapper;
