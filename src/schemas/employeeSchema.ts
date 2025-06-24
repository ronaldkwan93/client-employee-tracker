import { z } from "zod";

export const employeeSchema = z
  .object({
    firstName: z.string().min(1, "Required"),
    middlename: z.string().optional(),
    lastName: z.string().min(1, "Required"),
    email: z.string().email(),
    address: z.string().min(1, "Required"),
    contractType: z.enum(["PERMANENT", "CONTRACT"]),
    employmentType: z.enum(["FULL_TIME", "PART_TIME"]),
    mobile: z.string().min(1, "Required"),
    startDate: z.string().min(1, "Required"),
    endDate: z.string().optional(),
    hoursPerWeek: z
      .string()
      .min(1, "Required")
      .refine((val) => parseFloat(val) !== 0, {
        message: "Hours per week cannot be 0",
      }),
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
