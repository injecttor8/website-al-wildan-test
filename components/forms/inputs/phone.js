import { forwardRef } from "react";
import Input, { InputArgs } from "./input";

export class PhoneOptions extends InputArgs {
  name= string;
  defaultValue= string;
}

const Phone = forwardRef(
  ({ label, info, error, name, defaultValue }, PhoneOptions, ref) => {
    return (
      <Input label={label} info={info} error={error}>
        <input
          type="tel"
          name={name}
          defaultValue={defaultValue}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          ref={ref}
        />
      </Input>
    );
  }
);

export default Phone;
