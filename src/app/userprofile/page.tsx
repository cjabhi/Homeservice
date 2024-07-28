import { auth } from '@/auth';
import { connectToDatabase } from '@/utils';
import React from 'react'
import { Employee, User } from '../models/userModel';
import UserInfo from '@/comp/userinfo';
import EmployeeInfo from '@/comp/employeeinfo';

const Page = async() => {
  const session = await auth();
  const contactNo = session?.user?.contact_no;
  await connectToDatabase();
  const user = await User.findOne({contact_no: contactNo});
  console.log(contactNo);
  let data = user;
  if(user.employee)
  {
    data = await Employee.findOne({contact_no: contactNo});
  }
  console.log(data);
  
  if(!user.employee)
  {

    return (
      <>
      <UserInfo name = {data.name}  contact_no={data.contact_no} employee={data.employee} />
      </>
  )
}
else{
  return (
    <>
    <EmployeeInfo name={data.name} contact_no={data.contact_no} pincodes={data.pincodes} services={data.services} description={data.description}  />
    </>
  )
}
}

export default Page