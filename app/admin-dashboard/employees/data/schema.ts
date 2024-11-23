import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const employeeSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    phoneNumber: z.string(),
    role: z.string(),
    address: z.string(),
    emergencyNumber: z.string(),
    employmentContract: z.string(),
    cardNumber: z.string(),
    outletName: z.string(),
    loanStatus: z.string(),
    gender: z.string(),
    isActive: z.boolean()
})

export type Employee = z.infer<typeof employeeSchema>