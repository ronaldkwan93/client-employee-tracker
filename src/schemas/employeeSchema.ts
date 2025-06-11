import { z } from "zod";

export const employeeSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    middlename: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email(),
    address: z.string(),
    contractType: z.enum(["PERMANENT", "CONTRACT"]),
    employmentType: z.enum(["FULL_TIME", "PART_TIME"]),
    mobile: z.string(),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().optional(),
    hoursPerWeek: z.string(),
  })
  .refine(
    (data) => {
      if (data.contractType === "CONTRACT") {
        return data.endDate && data.endDate.trim() !== "";
      }
      return true;
    },
    {
      message: "End date is required for contract employees",
      path: ["endDate"],
    }
  );
