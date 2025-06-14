import { useDataContext } from "../../context/DataContextProvider";
import StatsBox from "../StatsBox/StatsBox";
import styles from "./StatsSection.module.scss";

const StatsSection = () => {
  const { employees } = useDataContext();

  const now = new Date();
  const newHires = employees.filter((emp) => {
    const start = new Date(emp.startDate);
    return (
      start.getMonth() === now.getMonth() &&
      start.getFullYear() === now.getFullYear()
    );
  }).length;

  const upcomingEnds = employees.filter((emp) => {
    if (!emp.endDate) return false;
    const end = new Date(emp.endDate);
    const now = new Date();
    const inOneMonth = new Date();
    inOneMonth.setDate(now.getDate() + 30);
    return end > now && end <= inOneMonth;
  }).length;

  let permanentCount = 0;
  let contractCount = 0;
  let fullTimeCount = 0;
  let partTimeCount = 0;

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].contractType === "PERMANENT") {
      permanentCount++;
    }
    if (employees[i].contractType === "CONTRACT") {
      contractCount++;
    }
    if (employees[i].employmentType === "FULL_TIME") {
      fullTimeCount++;
    }
    if (employees[i].employmentType === "PART_TIME") {
      partTimeCount++;
    }
  }

  console.log(employees);

  const employeeCount = employees.length;

  const data = [
    { title: "Total Employees", stat: employeeCount },
    {
      title: "New hires this month",
      stat: newHires,
      filterField: "newHires",
      filterValue: "true",
    },
    {
      title: "Contract Employees",
      stat: contractCount,
      filterField: "contractType",
      filterValue: "CONTRACT",
    },
    {
      title: "Permanent Employees",
      stat: permanentCount,
      filterField: "contractType",
      filterValue: "PERMANENT",
    },
    {
      title: "Full-time Employees",
      stat: fullTimeCount,
      filterField: "employmentType",
      filterValue: "FULL_TIME",
    },
    {
      title: "Part-time Employees",
      stat: partTimeCount,
      filterField: "employmentType",
      filterValue: "PART_TIME",
    },
    {
      title: "Employees finishing within 30 days",
      stat: upcomingEnds,
      filterField: "upcomingEnds",
      filterValue: "true",
    },
  ];
  return (
    <div className={styles.container}>
      <StatsBox data={data} />
    </div>
  );
};

export default StatsSection;
