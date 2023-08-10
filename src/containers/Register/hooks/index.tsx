import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSubmitHandler = () => {
  const onSubmitHandler = async (data: any, auth: any) => {
    try {
      await createUserWithEmailAndPassword(auth, data?.email, data?.password);
    } catch (error) {
      console.log(error);
    }
  };
  return { onSubmitHandler };
};
