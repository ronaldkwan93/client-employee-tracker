import styles from "./Modal.module.scss";
import { useDataContext } from "../../context/DataContextProvider";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import { useEffect } from "react";

interface ModalProps {
  setModal: (value: boolean) => void;
  data: { title: string; stat: number; filterValue?: string; value?: string }[];
}

const Modal = ({ setModal, data }: ModalProps) => {
  const { employees } = useDataContext();

  const closeModal = () => {
    setModal(false);
    console.log("close modal!");
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  console.log(data, "data in modal");

  //   console.log(employees);
  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <div className={styles.container__box}>
          <h1>Overview</h1>
          <p onClick={closeModal}>x</p>
          {employees
              .filter((employee) => {
                //  employee.data.toLowerCase().includes(data.);
              })
            .map((employee) => (
              <EmployeeTable key={employee.id} data={[employee]} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
