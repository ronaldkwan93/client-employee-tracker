import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";


const Navigation = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faTableColumns} /> 
        <h2>Dashboard</h2>
      </div>
      <div>
        <FontAwesomeIcon icon={faUsers} />
        <h2>Employees</h2>
      </div>
    </div>
  );
};

export default Navigation;
