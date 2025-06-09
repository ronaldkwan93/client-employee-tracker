import { useRef } from "react";
import { useNavigate } from "react-router";
import { createEmployee } from "../../services/dataServices";
import { employeeSchema } from "../../schemas/employeeSchema";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);

    const rawData = Object.fromEntries(formData.entries());

    console.log(rawData, 'rawdatas')
    //handle form validation
    const parsed = employeeSchema.safeParse(rawData);

    if (!parsed.success) {
      console.error("Validation failed:", parsed.error.format());
      return;
    }

    const employee = {
      ...parsed.data,
      middleName: parsed.data.middleName ?? "",
      id: 0,
    };

    console.log(employee);
    try {
      await createEmployee(employee);
    } catch (error) {
      console.error("Failed to create employee:", error);
    }
  };

  const handleCancel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <h3>Personal information</h3>
          <div>
            <label htmlFor="">First name</label>
            <input type="text" name="firstName" />
          </div>
          <div>
            <label htmlFor="">Middle name (if applicable)</label>
            <input type="text" name="middleName" />
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input type="text" name="lastName" />
          </div>
        </div>
        <div>
          <h3>Contact details</h3>
          <div>
            <label htmlFor="">Email address</label>
            <input type="text" name="email" />
          </div>
          <div>
            <label htmlFor="">Mobile number</label>
            <input type="text" name="mobile" />
          </div>
          <div>
            <label htmlFor="">Residental address</label>
            <input type="text" name="address" />
          </div>
        </div>
        <div>
          <h3>Employee status</h3>
          <div>
            <h5>What is contract type?</h5>
            <input
              type="radio"
              defaultChecked={true}
              name="contractType"
              value="PERMANENT"
            />
            Permanent
            <input type="radio" name="contractType" value="CONTRACT" /> Contract
          </div>
          <div>
            <h5>Start date</h5>
            <input type="date" name="startDate" />
          </div>
          <div>
            <h5>Finish date</h5>
            <input type="date" name="endDate" />
          </div>
          <div>
            <label htmlFor="">
              <input type="checkbox" name="onGoing" /> On going
            </label>
          </div>
        </div>
        <div>
          <h5>Is this on a full-time or part-time basis?</h5>
          <label htmlFor="">
            <input
              type="radio"
              name="employmentType"
              defaultChecked={true}
              value="FULL_TIME"
            />
            Full-time
          </label>
          <label htmlFor="">
            <input type="radio" name="employmentType" value="PART_TIME" />
            Part-time
          </label>
        </div>
        <div>
          <h5>Hours per week</h5>
          <input type="number" name="hoursPerWeek" />
        </div>
        <button type="submit">Save</button>
        <button onClick={() => handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
