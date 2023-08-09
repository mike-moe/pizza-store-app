export type ButtonProps = {
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    children?: React.ReactNode;
}