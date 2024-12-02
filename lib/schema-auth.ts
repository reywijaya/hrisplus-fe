import {z} from "zod";

export const LoginSchema = z.object({
    email: z.string().email("Email or password cannot be empty"),
    password: z.string().min(8, "Password cannot be empty"),
})