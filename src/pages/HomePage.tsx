import { useDataContext } from "../context/DataContextProvider";

const HomePage = () => {
    const {employees} = useDataContext();
    
    console.log(employees);

  return <div>This is homePage </div>;
};

export default HomePage;
