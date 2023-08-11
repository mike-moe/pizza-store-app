import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FormInput, FormLabel, FormWrapper } from "../../components/FromItems";
import { FormData } from "../../components/FromItems/FormWrapper/FormWrapper.type";
import { ButtonComponent } from "../../components/common";
import { useGoogleLoginHandler } from "./hooks";

const LoginContainer = () => {
  const { googleLoginHandler } = useGoogleLoginHandler();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const onSubmitHandler = async (data: FormData) => {
    // await createUserWithEmailAndPassword(auth, data?.email, data?.password).then(() => {});
    console.log(data);
  };
  // const googleLoginHandler = async () => {
  //   try {
  //     await signInWithPopup(auth, googleAuthProvider).then(() => {
  //       setAuthenticated(true);
  //       navigate("/");
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <FormLabel className="block text-gray-700 text-sm font-bold" forProp="email" children="Username" />
      <FormInput
        id="email"
        name="email"
        type="email"
        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-3"
      />
      <FormLabel className="block text-gray-700 text-sm font-bold" forProp="password" children="Password" />
      <div className="relative">
        <FormInput
          id="password"
          name="password"
          type={isPasswordVisible ? "text" : "password"}
          className=" shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-3"
        />
        <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600" onClick={togglePasswordVisibility}>
          {isPasswordVisible ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
        </button>
      </div>
      <Link to="/forgot-password" className="text-orange text-sm font-bold uppercase">
        Forgot Password
      </Link>
      <ButtonComponent
        type="submit"
        className="shadow w-full outline text-orange font-bold uppercase  border-orange hover:bg-gray-50 rounded my-5 p-3"
        children="Login"
      />
      <Link to="/register" className="text-orange text-sm font-bold uppercase underline my-3 block">
        Create account
      </Link>
      <hr />
      <ButtonComponent
        onClick={googleLoginHandler}
        type="button"
        className="outline w-full text-gray-400  border-gray-600 hover:bg-gray-50 rounded my-5 p-2 shadow"
        children={
          <div className="flex row-auto items-center justify-center">
            <FaGoogle className="text-blue-600" />
            <span className="ml-2">Sign In With Google</span>
          </div>
        }
      />
    </FormWrapper>
  );
};

export default LoginContainer;
