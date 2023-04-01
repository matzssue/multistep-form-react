import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const validate = validateValue(enteredValue);
  const isValidate = !validate && isTouched;

  const inputBlurHandler = () => {
    setIsTouched(true);
    console.log(isTouched);
  };

  const enteredValueHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  return {
    enteredValue,
    enteredValueHandler,
    inputBlurHandler,
    isValidate,
  };
};
export default useInput;
