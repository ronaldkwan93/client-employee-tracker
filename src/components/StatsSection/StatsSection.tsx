import { useEffect, useState } from "react";
import StatsBox from "../StatsBox/StatsBox";
import styles from "./StatsSection.module.scss";
import { getEmployeeStats } from "../../services/dataServices";

const StatsSection = () => {
  const [stats, setStats] = useState();

  //Previous implementation - business logic (to backend)
  // const now = new Date();
  // const newHires = employees.filter((emp) => {
  //   const start = new Date(emp.startDate);
  //   return (
  //     start.getMonth() === now.getMonth() &&
  //     start.getFullYear() === now.getFullYear()
  //   );
  // }).length;

  // const upcomingEnds = employees.filter((emp) => {
  //   if (!emp.endDate) return false;
  //   const end = new Date(emp.endDate);
  //   const now = new Date();
  //   const inOneMonth = new Date();
  //   inOneMonth.setDate(now.getDate() + 30);
  //   return end > now && end <= inOneMonth;
  // }).length;

  // let permanentCount = 0;
  // let contractCount = 0;
  // let fullTimeCount = 0;
  // let partTimeCount = 0;

  // for (let i = 0; i < employees.length; i++) {
  //   if (employees[i].contractType === "PERMANENT") {
  //     permanentCount++;
  //   }
  //   if (employees[i].contractType === "CONTRACT") {
  //     contractCount++;
  //   }
  //   if (employees[i].employmentType === "FULL_TIME") {
  //     fullTimeCount++;
  //   }
  //   if (employees[i].employmentType === "PART_TIME") {
  //     partTimeCount++;
  //   }
  // }

  useEffect(() => {
    getEmployeeStats().then((results) => setStats(results))
  }, [])


  const data = [
    { title: "Total Employees", stat: stats?.["total"] ?? 0 },
    {
      title: "New hires this month",
      stat: stats?.["newHires"] ?? 0,
      filter: "newHires",
      value: "true",
    },
    {
      title: "Contract Employees",
      stat: stats?.["contract"] ?? 0,
      filter: "contractType",
      value: "CONTRACT",
    },
    {
      title: "Permanent Employees",
      stat: stats?.["permanent"] ?? 0,
      filter: "contractType",
      value: "PERMANENT",
    },
    {
      title: "Full-time Employees",
      stat: stats?.["fullTime"] ?? 0,
      filter: "employmentType",
      value: "FULL_TIME",
    },
    {
      title: "Part-time Employees",
      stat: stats?.["partTime"] ?? 0,
      filter: "employmentType",
      value: "PART_TIME",
    },
    {
      title: "Employees finishing within 30 days",
      stat: stats?.["endingSoon"] ?? 0,
      filter: "upcomingEnds",
      value: "true",
    },
  ];
  return (
    <div className={styles.container}>
      <StatsBox data={data} />
    </div>
  );
};

export default StatsSection;
