"use server";

import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth"

const loginhandler = async (contact_no:string , password : string) =>{
    if(!contact_no || ! password)
        throw new Error("please provide all fields");
    try {
      await signIn("credentials" , {
        contact_no,
        password,
        redirect:true,
        redirectTo:"/"
      })
    } catch (error) {
       const err = error as CredentialsSignin;
       return err.cause;
    }
  }

  export {loginhandler};