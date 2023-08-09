import { ButtonProps } from "./Button.type";

const ButtonComponent = ({ className, type, onClick, children }: ButtonProps) => {
  return (
    <>
      <button className={className} type={type} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default ButtonComponent;
