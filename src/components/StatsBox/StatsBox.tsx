import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./StatsBox.module.scss";

interface StatsBoxProps {
  data: { title: string; stat: number; filter?: string; value?: string }[];
}

const StatsBox = ({ data }: StatsBoxProps) => {
  const [modal, setModal] = useState(false);
  const [selectedData, setSelectedData] = useState<(typeof data)[0] | null>(
    null
  );

  const handleOnClick = (item: (typeof data)[0]) => {
    setSelectedData(item);
    if (item.stat === 0) return;
    setModal(true);
  };


  return (
    <div className={styles.container}>
      {modal && selectedData && (
        <Modal setModal={setModal} data={[selectedData]} />
      )}
      {data.map((item, i) => (
        <div
          key={i}
          className={styles.container__boxes}
          onClick={() => handleOnClick(item)}
        >
          <h2>{item.title}</h2>
          <h2 className={styles.container__boxes__stat}>{item.stat}</h2>
        </div>
      ))}
    </div>
  );
};

export default StatsBox;
