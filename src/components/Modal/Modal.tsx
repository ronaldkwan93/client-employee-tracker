import styles from "./Modal.module.scss";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import { useEffect, useState } from "react";
import { faCircleXmark, faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFilteredEmployees } from "../../services/dataServices";
import type { Employee } from "../../context/DataContextProvider";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

interface ModalProps {
  setModal: (value: boolean) => void;
  data: {
    title: string;
    stat: number;

    value?: string;
    filter?: string;
  }[];
}

const Modal = ({ setModal, data }: ModalProps) => {
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const scrollPosition = window.pageYOffset;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition);

      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const filterCriteria = data[0];

  //Previous implementation - business logic (to backend)
  // const value = filterCriteria.filterValue ?? "";

  // const filteredEmployees = employees.filter((employee) => {
  //   if (!filterCriteria.filterField || !filterCriteria.filterValue) {
  //     return true;
  //   }

  //   const field = filterCriteria.filterField;
  //   const value = filterCriteria.filterValue;

  //   switch (field) {
  //     case "contractType":
  //       return employee.contractType === value;
  //     case "employmentType":
  //       return employee.employmentType === value;
  //     case "newHires":
  //       const now = new Date();
  //       const start = new Date(employee.startDate);
  //       return (
  //         start.getMonth() === now.getMonth() &&
  //         start.getFullYear() === now.getFullYear()
  //       );
  //     case "upcomingEnds":
  //       if (!employee.endDate) return false;
  //       const end = new Date(employee.endDate);
  //       const currentDate = new Date();
  //       const inOneMonth = new Date();
  //       inOneMonth.setDate(currentDate.getDate() + 30);
  //       return end > currentDate && end <= inOneMonth;
  //     default:
  //       return true;
  //   }
  // });

  const field = filterCriteria.filter;
  const value = filterCriteria.value;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (!field || !value) {
          data = await getFilteredEmployees("none", "all");
        } else {
          data = await getFilteredEmployees(field, value);
        }
        setFilteredEmployees(data);
      } catch (error) {
        console.error("Error fetching filtered employees:", error);
      }
    };

    fetchData();
  }, [field, value]);

  const averageHours =
    filteredEmployees.length > 0
      ? filteredEmployees.reduce((total, emp) => {
          return total + emp.hoursPerWeek;
        }, 0) / filteredEmployees.length
      : 0;

  const averageHoursRounded = Math.round(averageHours * 100) / 100;

  return (
    <div className={styles.backdrop}>
      {loading ? (
        <div className={styles.backdrop__spinner}>
          <SpinnerLoader />
        </div>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.container__box}>
              <div className={styles.container__box__header}>
                <div className={styles.container__box__header}>
                  <FontAwesomeIcon
                    icon={faCompass}
                    className={styles.container__box__header__icon}
                  />
                  <h1>{data[0].title}</h1>
                </div>
                <p onClick={closeModal}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </p>
              </div>
              <div className={styles.container__box__details}>
                <div className={styles.container__box__details__left}>
                  <p>Count: {filteredEmployees.length}</p>
                  <p>Average Hours Per Week: {averageHoursRounded}</p>
                </div>
                <div className={styles.container__box__details__right}>
                  <div className={styles.container__box__details__title}>
                    <h5>ID</h5>
                    <h5>Name</h5>
                    <h5>Email</h5>
                  </div>

                  <div>
                    {filteredEmployees.map((employee) => (
                      <EmployeeTable key={employee.id} data={[employee]} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
