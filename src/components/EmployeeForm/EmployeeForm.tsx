import { useRef } from "react";
import { useNavigate } from "react-router";
import {
  createEmployee,
  updateEmployeeById,
} from "../../services/dataServices";
import { employeeSchema } from "../../schemas/employeeSchema";
import {
  useDataContext,
  type Employee,
} from "../../context/DataContextProvider";

type EmployeeFormProps = {
  data?: Employee;
};

const EmployeeForm = ({ data }: EmployeeFormProps) => {
  const { setRefresh } = useDataContext();
  const navigate = useNavigate();
  const formRef = useRef(null);

  console.log(data, "data here");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);

    const rawData = Object.fromEntries(formData.entries());


    console.log(rawData, "rawdatas");
    //handle form validation
    const parsed = employeeSchema.safeParse(rawData);

    if (!parsed.success) {
      console.error("Validation failed:", parsed.error.format());
      return;
    }

    const employee = {
      ...parsed.data,
      middlename: parsed.data.middlename ?? "",
      id: 0,
      startDate: new Date(parsed.data.startDate),
      endDate: new Date(parsed.data.endDate),
      hoursPerWeek: Number(parsed.data.hoursPerWeek),
    };

    console.log(employee);

    if (data) {
      try {
        await updateEmployeeById(data.id, employee);
      } catch (error) {
        console.error("Failed to update employee:", error);
      }
    } else {
      try {
        await createEmployee(employee);
      } catch (error) {
        console.error("Failed to create employee:", error);
      }
    }

    setRefresh((previous) => previous + 1);

    navigate("/");
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} key={data?.id || "new"}>
        <div>
          <h3>Personal information</h3>
          <div>
            <label htmlFor="">First name</label>
            <input
              type="text"
              name="firstName"
              defaultValue={data?.firstName}
            />
          </div>
          <div>
            <label htmlFor="">Middle name (if applicable)</label>
            <input
              type="text"
              name="middlename"
              defaultValue={data?.middlename}
            />
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input type="text" name="lastName" defaultValue={data?.lastName} />
          </div>
        </div>
        <div>
          <h3>Contact details</h3>
          <div>
            <label htmlFor="">Email address</label>
            <input type="text" name="email" defaultValue={data?.email} />
          </div>
          <div>
            <label htmlFor="">Mobile number</label>
            <input type="text" name="mobile" defaultValue={data?.mobile} />
          </div>
          <div>
            <label htmlFor="">Residental address</label>
            <input type="text" name="address" defaultValue={data?.address} />
          </div>
        </div>
        <div>
          <h3>Employee status</h3>
          <div>
            <h5>What is contract type?</h5>
            <input
              type="radio"
              defaultChecked={data?.contractType === "PERMANENT"}
              name="contractType"
              value="PERMANENT"
            />
            Permanent
            <input
              type="radio"
              name="contractType"
              value="CONTRACT"
              defaultChecked={data?.contractType === "CONTRACT"}
            />{" "}
            Contract
          </div>
          <div>
            <h5>Start date</h5>
            <input
              type="date"
              name="startDate"
              defaultValue={
                data?.startDate
                  ? new Date(data.startDate).toISOString().slice(0, 10)
                  : ""
              }
            />
          </div>
          <div>
            <h5>Finish date</h5>
            <input
              type="date"
              name="endDate"
              defaultValue={
                data?.startDate
                  ? new Date(data.endDate).toISOString().slice(0, 10)
                  : ""
              }
            />
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
              defaultChecked={data?.employmentType === "FULL_TIME"}
              value="FULL_TIME"
            />
            Full-time
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="employmentType"
              value="PART_TIME"
              defaultChecked={data?.employmentType === "PART_TIME"}
            />
            Part-time
          </label>
        </div>
        <div>
          <h5>Hours per week</h5>
          <input
            type="number"
            name="hoursPerWeek"
            defaultValue={data?.hoursPerWeek}
          />
        </div>
        <button type="submit">Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
