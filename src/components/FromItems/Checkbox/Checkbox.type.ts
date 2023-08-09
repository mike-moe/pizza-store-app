export type CheckboxOptions = {
  label: string;
  value: string;
};

export type CheckboxProps = {
  name: string;

  reuiredValue?: boolean;
  label: string;
  options: CheckboxOptions[];
};
