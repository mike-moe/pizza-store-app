import { ComponentProps } from "react";

export type FormWrapperProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
} & Omit<ComponentProps<"form">, "onSubmit">;
