import { LabelProps } from "./Label.type";

const FormLabel = ({ className, forProp, children }: LabelProps) => {
  return (
    <>
      <label className={className} htmlFor={forProp}>
        {children}
      </label>
    </>
  );
};

export default FormLabel;
