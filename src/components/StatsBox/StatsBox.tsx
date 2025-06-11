import styles from "./StatsBox.module.scss";

interface StatsBoxProps {
  data: { title: string; stat: number }[];
}

const StatsBox = ({ data }: StatsBoxProps) => {
  return (
    <div className={styles.container}>
      {data.map((item, i) => (
        <div key={i} className={styles.container__boxes}>
          <h2>{item.title}</h2>
          <h2 className={styles.container__boxes__stat}>{item.stat}</h2>
        </div>
      ))}
    </div>
  );
};

export default StatsBox;
