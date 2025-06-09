import { useNavigate } from "react-router";

const EmployeeForm = () => {
  // add ref for each input
  const navigate = useNavigate();

  const handleCancel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    //add onsubmit handler
    <form>
      <div>
        <h3>Personal information</h3>
        <div>
          <label htmlFor="">First name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Middle name (if applicable)</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Last name</label>
          <input type="text" />
        </div>
      </div>
      <div>
        <h3>Contact details</h3>
        <div>
          <label htmlFor="">Email address</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Mobile number</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Residental address</label>
          <input type="text" />
        </div>
      </div>
      <div>
        <h3>Employee status</h3>
        <div>
          <h5>What is contract type?</h5>
          <label htmlFor="">
            <input type="radio" defaultChecked={true} name="contractType" />{" "}
            Permanent
          </label>
          <label htmlFor="">
            <input type="radio" name="contractType" /> Contract
          </label>
        </div>
        <div>
          <h5>Start date</h5>
          <input type="date" />
        </div>
        <div>
          <h5>Finish date</h5>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" /> On going
          </label>
        </div>
      </div>
      <div>
        <h5>Is this on a full-time or part-time basis?</h5>
        <label htmlFor="">
          <input type="radio" name="employmentType" defaultChecked={true} />{" "}
          Full-time
        </label>
        <label htmlFor="">
          <input type="radio" name="employmentType" /> Part-time
        </label>
      </div>
      <div>
        <h5>Hours per week</h5>
        <input type="number" />
      </div>
      <button>Save</button>
      <button onClick={() => handleCancel}>Cancel</button>
    </form>
  );
};

export default EmployeeForm;
