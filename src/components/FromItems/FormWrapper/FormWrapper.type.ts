import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";
export type FormData = {
  email: string;
  password: string;
};
export type FormProps = { onSubmit: SubmitHandler<FormData>; children: ReactNode };
