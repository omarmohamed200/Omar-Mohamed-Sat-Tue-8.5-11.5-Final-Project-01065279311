"use server";

import { success } from "zod";
import { SignupSchema } from "../schemas/Signup.Schema";
import { AxiosRequestConfig, isAxiosError } from "axios";
import { apiClient } from "@/services/apiClient";
import { error } from "console";


type SignupFieldErrors=Partial<Record<keyof signupValues ,string[]>>
type SignupActionReturn=
|{success:true,message:string} 
| {success:false,message:string, fieldErrors?:SignupFieldErrors}

export async function signupAction(values: signupValues):Promise<SignupActionReturn> {
  const validationResult = SignupSchema.safeParse(values);
  console.log({ validationResult });

  if (validationResult.success === false) {
    const { formErrors, fieldErrors } = z.flattenError(validationResult.error);
    console.log(fieldErrors)
    return {
      success: false,
      message: formErrors[0] ?? "fix highlited errors",
      fieldErrors,
    };
  }

  try {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/auth/signup",
      data: validationResult.data,
    };

    await apiClient.request(options);
    return{
      success: true
      message :'Account created successfully'
    }
  } catch (errro) {
    if(isAxiosError(error)){
      return{
        success:false
        message:error.response?.data.message ?? "can not reach server , try again later"
      }

    }
    return{
      success:false
      message:"something went wrong "
    }
  }
}
