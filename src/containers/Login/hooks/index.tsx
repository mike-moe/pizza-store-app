import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../../config/firebase";
import { Navigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";

export const useGoogleLoginHandler = () => {
  const { setAuthenticated } = useAuth();
  const googleLoginHandler = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider).then(() => {
        setAuthenticated(true);
        Navigate("/" as never);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return { googleLoginHandler };
};
