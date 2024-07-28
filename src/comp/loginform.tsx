"use client"
import { toast } from 'react-toastify';
import { loginhandler } from './actions/login';
import { useRouter } from 'next/navigation';
import React from 'react'

import 'react-toastify/dist/ReactToastify.css';


const Loginform = () => {
  const router = useRouter();
  return (
    <form action={async (formdata)=>{
        const contact_no = formdata.get("contact_no") as string;
        const password = formdata.get("password") as string
        if(!contact_no || !password)
            return new Error("please provide all fields")
      const error = await loginhandler(contact_no , password);
      const toastId = toast.loading("Logging in");
        if(!error)
          {
            toast.update(toastId, {
              render: "Login Successful",
              type: "success",
              isLoading: false,
              autoClose: 3000,
            });
            router.refresh();
          }
        else{
          toast.update(toastId, {
            // render: error,
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
       }} className="formbox">
      
        <input type="number" name='contact_no' placeholder='Contact No' required />
        <input type='password' name='password' placeholder='password' required />
        <button type='submit'>Login</button>
      </form>
  )
}

export default Loginform