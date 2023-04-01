import "./App.module.scss";
import Wrapper from "./components/Wrapper";
import styles from "./App.module.scss";
import StepsContainer from "./components/Steps/StepsContainer";
import Form from "./components/Form/Form";

const containerData = {
  title: "Personal Info",
  subtitle: "Please provide your name, email addres, and phone number",
};

function App() {
  return (
    <Wrapper style={styles.container}>
      <StepsContainer />
      <Form title={containerData.title} subtitle={containerData.subtitle} />
    </Wrapper>
  );
}

export default App;
