import { useState } from "react";
import Wrapper from "../Wrapper";
import styles from "./Form.module.scss";
import InputsStepOne from "./Inputs/InputsStepOne";
import API_URL from "../../SETTINGS.JS";
const Form = (props) => {
  const defaultValues = {
    userName: "",
    userEmail: "",
    userPhone: "",
  };

  const [userData, setUserData] = useState(defaultValues);

  const sendDataToSerwer = async (user) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const { name, email, phone } = e.target;
    console.log();
    const user = {
      userName: name.value,
      userEmail: email.value,
      userPhone: phone.value,
    };
    setUserData(user);
    sendDataToSerwer(user);
  };

  return (
    <Wrapper style={styles.container}>
      <form onSubmit={submitFormHandler}>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <InputsStepOne />
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};
export default Form;
