import Link from 'next/link';
import React from 'react'
import { User } from '../models/userModel';
import { error } from 'console';
import { hash } from 'bcryptjs';
import { connectToDatabase } from '../../utils';
import { redirect } from "next/navigation";

const Page = () => {
    const signup = async (formData:FormData) =>{
        "use server";
        const name = formData.get("name") as string | undefined;
        const contact_no = formData.get("contact_no") as string | undefined;
        const password = formData.get("password") as string | undefined;
        if(!name || !contact_no ||  !password)
            throw new Error("please provide all fields");

        await connectToDatabase();
        const user = await User.findOne({contact_no});
        if(user)
            throw new Error("user already exists");
        const hashedpassword = await hash(password , 10);
        const employee = false;
        await User.create({name , contact_no , password: hashedpassword , employee});
        redirect('/login');
    }
  return (
    <div className="formcover">
         <h2>signup</h2>
         <form action={signup}  className="formbox">
          <input type='string' name='name' placeholder='Name' />
          <input
        type="tel" 
        name="contact_no"
        placeholder="Contact No"
        maxLength={10} 
        pattern="[0-9]{10}" 
        required
        
      />
      <input
        type="password"
        name="password"
        placeholder="Password (min. 7 characters)"
        minLength={7} 
        required
      />
          <button type='submit'>signup</button>
        </form>
        <p>already have an account <Link href={'/login'}>login</Link></p>
      </div>
  )
}

export default Page