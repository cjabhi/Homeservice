import React from 'react';
import { redirect } from 'next/navigation';
import ShowEmployee from './showEmployee';
import { connectToDatabase } from '@/utils';
import { Employee } from '@/app/models/userModel';
import SearchEmployee from './searchemployees';


const Searchform = async() => {

let employees;
  const searchurl = async (formData:FormData) =>{
    "use server";
    
    const service = formData.get('service');
    const pincode = formData.get('pincode');

    // Redirect to the ShowEmployee page with query parameters
    console.log("working on url");
    await redirect(`/search?service=${service}&pincode=${pincode}`);
}

  return (
    <>
      <form action={searchurl} className='formbox searchform'>
        <input
          type="text"
          name='service'
          placeholder='i.e- Electrician'
          required
        />
        <input
          type='number'
          name='pincode'
          placeholder='i.e- 283142'
          required
        />
        <button type='submit'>apply</button>
      </form>
      <ShowEmployee />
    </>
  );
}

export default Searchform;
