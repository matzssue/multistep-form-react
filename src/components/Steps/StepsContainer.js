import styles from "./StepsContainer.module.scss";

const StepsContainer = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <span className={styles.icon}>1</span>
          <div>
            <span className={styles.step}>Step 1</span>
            <span className={styles["step-info"]}>YOUR INFO</span>
          </div>
        </li>
        <li>
          <span className={styles.icon}>2</span>
          <div>
            <span className={styles.step}>Step 2</span>
            <span className={styles["step-info"]}>SELECT PLAN</span>
          </div>
        </li>
        <li>
          <span className={styles.icon}>3</span>
          <div>
            <span className={styles.step}>Step 3</span>
            <span className={styles["step-info"]}>ADD-ONS</span>
          </div>
        </li>
        <li>
          <span className={styles.icon}>4</span>
          <div>
            <span className={styles.step}>Step 4</span>
            <span className={styles["step-info"]}>SUMMARY</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default StepsContainer;
