import { useForm, FormProvider } from "react-hook-form";
import { FormWrapperProps } from "./FormWrapper.type";

const FormWrapper = ({ children }: FormWrapperProps) => {
  const form = useForm<FormWrapperProps>();
  const { handleSubmit } = form;
  const submitHandler = (data: FormWrapperProps) => {
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(submitHandler)}>
          {children}
        </form>
      </div>
    </FormProvider>
  );
};

export default FormWrapper;
