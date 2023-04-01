import { Fragment, useState } from "react";
import useInput from "../../../hooks/use-input";
import styles from "../../Form/Form.module.scss";
const InputsStepOne = (props) => {
  const {
    enteredValue: enteredName,
    enteredValueHandler: nameValueHandler,
    inputBlurHandler: nameBlurHandler,
    isValidate: nameIsValidate,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    enteredValueHandler: emailValueHandler,
    inputBlurHandler: emailBlurHandler,
    isValidate: emailIsValidate,
  } = useInput((value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  });

  const {
    enteredValue: enteredPhone,
    enteredValueHandler: phoneValueHandler,
    inputBlurHandler: phoneBlurHandler,
    isValidate: phoneIsValidate,
  } = useInput((value) => value.trim().length === 9);

  const nameInputStyle = nameIsValidate ? styles.invalid : "";
  const emailInputStyle = emailIsValidate ? styles.invalid : "";
  const phoneInputStyle = phoneIsValidate ? styles.invalid : "";

  return (
    <Fragment>
      <label htmlFor="name-input">Name:</label>
      <input
        className={nameInputStyle}
        value={enteredName}
        onChange={nameValueHandler}
        onBlur={nameBlurHandler}
        id="name-input"
        type="text"
        name="name"
      />
      {nameIsValidate ? <p className={styles.error}>Please enter name</p> : ""}
      <label htmlFor="email-input">Email Address:</label>
      <input
        id="email-input"
        type="email"
        name="email"
        className={emailInputStyle}
        value={enteredEmail}
        onChange={emailValueHandler}
        onBlur={emailBlurHandler}
      />
      {emailIsValidate ? (
        <p className={styles.error}>Please enter correct email</p>
      ) : (
        ""
      )}

      <label htmlFor="phone-input">Phone Number:</label>
      <input
        id="phone-input"
        type="tel"
        name="phone"
        className={phoneInputStyle}
        value={enteredPhone}
        onChange={phoneValueHandler}
        onBlur={phoneBlurHandler}
      />
      {phoneIsValidate ? (
        <p className={styles.error}>Please enter correct Phone number</p>
      ) : (
        ""
      )}
    </Fragment>
  );
};
export default InputsStepOne;
