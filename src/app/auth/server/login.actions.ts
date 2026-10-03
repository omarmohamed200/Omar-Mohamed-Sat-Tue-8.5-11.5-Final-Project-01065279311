"use server";
import z from "zod";
import { success } from "zod";
import { loginSchema, LoginValues } from "../schemas/Login.Schema";
import { Axios, AxiosRequestConfig, isAxiosError } from "axios";
import { apiClient } from "@/services/apiClient";
import { promises } from "dns";

type LoginResponse = {
  message: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
  token: string;
};

type LoginFieldErrors = Partial<Record<keyof LoginValues, string[]>>;
type LoginActionReturn =
  | { success: true; message: string; data: LoginResponse }
  | { success: false; message: string; fieldErrors?: LoginFieldErrors };

export async function loginAction(
  values: LoginValues,
): Promise<LoginActionReturn> {
  const validationResult = loginSchema.safeParse(values);

  if (!validationResult.success) {
    const { formErrors, fieldErrors } = z.flattenError(validationResult.error);
    return {
      success: false,
      message: formErrors[0] ?? "fix highlighted errors",
      fieldErrors,
    };
  }
  try {
    const options: AxiosRequestConfig = {
      url: "/auth/signin",
      method: "POST",
      data: validationResult.data,
    };
    const { data } = await apiClient.request(options);
    return {
      success: true,
      message: "user logged in successfully",
      data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message:
          error.response?.data.message ??
          "can not reach server,try again later",
      };
    }
    return {
      success: false,
      message: "something went wrong",
    };
  }
}
