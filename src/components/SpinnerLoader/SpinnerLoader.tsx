import gif from "../../assets/Rings.gif"
import styles from "./SpinnerLoader.module.scss"

const SpinnerLoader = () => {
  return <div className={styles.container}>
    <img src={gif} alt="Loading spinner" />
  </div>;
};

export default SpinnerLoader;
