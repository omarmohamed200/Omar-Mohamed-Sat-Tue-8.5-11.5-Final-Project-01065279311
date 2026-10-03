import { error } from "console";
import z from "zod";
export const SignupSchema = z
  .object({
    name: z.string().min(1, { error: "name is required" }),
    email: z
      .email({ error: "email is invaild. please try another one" })
      .min(1, { error: "email is required" }),
    password: z
      .string()
      .min(1, { error: "password is rquired" })
      .regex(/[A-Z]/, {
        error: "password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        error: "password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { error: "password must contain at least one number" })
      .regex(/[0-9]/, { error: "password must contain at least one number" })
      .regex(/[@#$%^&*]/, {
        error:
          "password must contain at least one of the following special character!",
      }),

    repassword: z.string().min(1, { error: "confirm password is rquired" }),
    phone: z
      .string()
      .min(1, { error: "phone is rquired" })
      .regex(/^01[0125][0-9]{8}$/, {
        error: "we only accept egyptian phone numbers",
      }),
  })
  .refine((data) => data.password === data.repassword, {
    error: "password and confirm password should be the same ",
    path: ["repassword"],
  });

export type SignupValues = z.infer<typeof SignupSchema>;
