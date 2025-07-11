import { useEffect, useRef, useState } from "react";
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
import styles from "./EmployeeForm.module.scss";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

type EmployeeFormProps = {
  data?: Employee;
};

const EmployeeForm = ({ data }: EmployeeFormProps) => {
  const { setRefresh } = useDataContext();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [errors, setErrors] = useState<Record<string, any>>({});
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedPhoto(e.target.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current!);

    const rawData = Object.fromEntries(formData.entries());

    //handle form validation
    const parsed = employeeSchema.safeParse(rawData);

    if (!parsed.success) {
      const errors = parsed.error.format();
      setErrors(errors);
      console.error("Validation failed:", parsed.error.format());
      setIsSubmitting(false);
      return;
    }

    const employee = {
      ...parsed.data,
      middlename: parsed.data.middlename ?? "",
      id: 0,
      startDate: new Date(parsed.data.startDate),
      endDate: parsed.data.endDate ? new Date(parsed.data.endDate) : null,
      hoursPerWeek: Number(parsed.data.hoursPerWeek),
      profileImageUrl: data?.profileImageUrl ?? "",
    };

    try {
      if (data) {
        await updateEmployeeById(data.id, employee, selectedPhoto || undefined);
      } else {
        await createEmployee(employee, selectedPhoto || undefined);
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setRefresh((previous) => previous + 1);
      navigate("/employees");
    } catch (error) {
      console.error("Failed to save employee:", error);
      setIsSubmitting(false);
    }
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/employees");
  };

  return (
    <div className={styles.container}>
      {loading || isSubmitting ? (
        <div className={styles.container__spinner}>
          <SpinnerLoader />
        </div>
      ) : (
        <>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            key={data?.id || "createMode"}
            className={styles.container__form}
          >
            <div className={styles.container__section}>
              <h3>Personal information</h3>

              <div className={styles.container__group}>
                {errors?.firstName && (
                  <div className={styles.container__group__error}>
                    <p>{errors.firstName._errors}</p>
                  </div>
                )}
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  name="firstName"
                  defaultValue={data?.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.container__group}>
                {errors?.middlename && (
                  <div className={styles.container__group__error}>
                    <p>{errors.middlename._errors}</p>
                  </div>
                )}
                <label htmlFor="">Middle name (if applicable)</label>
                <input
                  type="text"
                  name="middlename"
                  defaultValue={data?.middlename}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.container__group}>
                {errors?.lastName && (
                  <div className={styles.container__group__error}>
                    <p>{errors.lastName._errors}</p>
                  </div>
                )}
                <label htmlFor="">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  defaultValue={data?.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={styles.container__section}>
              <h3>Contact details</h3>
              <div className={styles.container__group}>
                {errors?.email && (
                  <div className={styles.container__group__error}>
                    <p>{errors.email._errors}</p>
                  </div>
                )}
                <label htmlFor="">Email address</label>
                <input
                  type="text"
                  name="email"
                  defaultValue={data?.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.container__group}>
                {errors?.mobile && (
                  <div className={styles.container__group__error}>
                    <p>{errors.mobile._errors}</p>
                  </div>
                )}
                <label htmlFor="">Mobile number</label>
                <input
                  type="text"
                  name="mobile"
                  defaultValue={data?.mobile}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.container__group}>
                {errors?.address && (
                  <div className={styles.container__group__error}>
                    <p>{errors.address._errors}</p>
                  </div>
                )}
                <label htmlFor="">Residental address</label>
                <input
                  type="text"
                  name="address"
                  defaultValue={data?.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={styles.container__group}>
              <h3>Employee status</h3>
              <div>
                {errors?.contractType && (
                  <div className={styles.container__group__error}>
                    <p>{errors.contractType._errors}</p>
                  </div>
                )}
                <h5>What is contract type?</h5>
                <input
                  type="radio"
                  defaultChecked={data?.contractType === "PERMANENT"}
                  name="contractType"
                  value="PERMANENT"
                  onChange={handleInputChange}
                />
                Permanent
                <input
                  type="radio"
                  name="contractType"
                  value="CONTRACT"
                  defaultChecked={data?.contractType === "CONTRACT"}
                  onChange={handleInputChange}
                />
                Contract
              </div>
              <div className={styles.container__group}>
                <h5>Start date</h5>
                {errors?.startDate && (
                  <div className={styles.container__group__error}>
                    <p>{errors.startDate._errors}</p>
                  </div>
                )}
                <input
                  type="date"
                  name="startDate"
                  defaultValue={
                    data?.startDate
                      ? new Date(data.startDate).toISOString().slice(0, 10)
                      : ""
                  }
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.container__group}>
                <h5>Finish date</h5>
                {errors?.endDate && (
                  <div className={styles.container__group__error}>
                    <p>{errors.endDate._errors}</p>
                  </div>
                )}
                <input
                  type="date"
                  name="endDate"
                  defaultValue={
                    data?.endDate && data.endDate !== null
                      ? new Date(data.endDate).toISOString().slice(0, 10)
                      : ""
                  }
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <h5>Is this on a full-time or part-time basis?</h5>
              {errors?.employmentType && (
                <div className={styles.container__group__error}>
                  <p>{errors.employmentType._errors}</p>
                </div>
              )}
              <label htmlFor="">
                <input
                  type="radio"
                  name="employmentType"
                  defaultChecked={data?.employmentType === "FULL_TIME"}
                  value="FULL_TIME"
                  onChange={handleInputChange}
                />
                Full-time
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name="employmentType"
                  value="PART_TIME"
                  defaultChecked={data?.employmentType === "PART_TIME"}
                  onChange={handleInputChange}
                />
                Part-time
              </label>
            </div>
            <div className={styles.container__group}>
              <h5>Hours per week</h5>
              {errors?.hoursPerWeek && (
                <div className={styles.container__group__error}>
                  <p>{errors.hoursPerWeek._errors}</p>
                </div>
              )}
              <input
                type="number"
                name="hoursPerWeek"
                defaultValue={data?.hoursPerWeek ? data?.hoursPerWeek : 38}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.container__section}>
              <h3>Photo Upload</h3>
              <div className={styles.container__group}>
                <label htmlFor="photo">Profile Photo (optional)</label>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </div>
            </div>
            <div className={styles.container__section}>
              <h3>Profile Photo</h3>
              <div className={styles.container__group}>
                <img
                  src={
                    data?.profileImageUrl ??
                    "https://employeetrackerpb.s3.ap-southeast-2.amazonaws.com/public/usericon.JPG"
                  }
                  alt="profile picture"
                />
              </div>
              <button type="submit">Save</button>
            </div>
          </form>
          <button onClick={handleCancel}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default EmployeeForm;
