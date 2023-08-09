import React from "react";
import { FormCheckbox, FormInput, FormLabel, FormWrapper } from "../../components/FromItems";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../../components/common";
import { CheckboxOptions } from "../../components/FromItems/Checkbox/Checkbox.type";

const RegisterContainer = () => {
  const disablityOptions: CheckboxOptions[] = [
    { label: "Visually Impaired", value: "Visually Impaired" },
    { label: "Reach Restriction", value: "Reach Restriction" },
  ];
  const rulesOption: CheckboxOptions[] = [
    {
      label:
        "I have read and agree to pizza-store's Terms of Service, Privacy Policy, California Privacy Policy and CCPA Financial Incentive Notice. *",
      value: "rules",
    },
  ];
  const onSubmitHandler = async (data: any) => {
    // await createUserWithEmailAndPassword(auth, data?.email, data?.password).then(() => {});
    console.log(data);
  };
  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <FormLabel className="block text-gray-700 text-sm font-bold" forProp="email" children="Email Address" />
      <FormInput
        id="email"
        name="email"
        type="email"
        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-3"
      />

      <FormLabel className="block text-gray-700 text-sm font-bold" forProp="password" children="Password" />
      <FormInput
        id="password"
        name="password"
        type={"password"}
        className=" shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-3"
      />
      <FormLabel className="block text-gray-700 text-sm font-bold" forProp="passwordConfirmation" children="Confirm Password" />
      <FormInput
        id="passwordConfirmation"
        name="passwordConfirmation"
        type={"password"}
        className=" shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-3"
      />
      <div className="bg-gray-200 p-3">
        <FormLabel className="block text-gray-700 text-sm font-bold" children="I have physical limitation (optional)" />
        <FormCheckbox options={disablityOptions} name="disablity" reuiredValue={false} />
      </div>
      <FormCheckbox options={rulesOption} name="rules" reuiredValue={true} />

      <ButtonComponent
        type="submit"
        className="shadow w-full outline text-orange font-bold uppercase  border-orange hover:bg-gray-50 rounded my-5 p-3"
        children="Create Account"
      />
    </FormWrapper>
  );
};

export default RegisterContainer;
