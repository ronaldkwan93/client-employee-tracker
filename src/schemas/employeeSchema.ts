import { z } from "zod";

export const employeeSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middlename: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email(),
  address: z.string(),
  contractType: z.enum(["PERMANENT", "CONTRACT"]),
  employmentType: z.enum(["FULL_TIME", "PART_TIME"]),
  mobile: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  hoursPerWeek: z.string()
});
