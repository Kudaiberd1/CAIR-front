import { z } from "zod";

export const loginSchema = z.object({
    username: z.string().min(4, "Username must be at least 6 characters"),
    password: z
        .string()
        .min(4, "Password must be at least 6 characters")
        .max(50, "Password too long"),
});

export type LoginFormData = z.infer<typeof loginSchema>;