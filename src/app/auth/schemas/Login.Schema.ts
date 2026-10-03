import z from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { error: "email is required" })
    .pipe(z.email({ error: "email is invalid , try another one." })),
  password: z
    .string()
    .min(1, { error: "password is required" })
    .regex(/[A-Z]/, {
      error: "password must  contain  at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      error: "password must  contain  at least one lowercase letter",
    })
    .regex(/[0-9]/, {
      error: "password must  contain  at least one number",
    })
    .regex(/[!@#$%^&*()_]/, {
      error: "password must  contain  at least one special character",
    }),
});
export type LoginValues = z.infer<typeof loginSchema>;
