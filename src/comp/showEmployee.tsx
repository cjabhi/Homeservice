import { Employee } from '@/app/models/userModel';
import { connectToDatabase } from '@/utils';
import React from 'react';
import Employeebox from './employeebox';

interface ShowEmployeeProps {
  service?: string;
  pincode?: string;
}

const ShowEmployee = async({ service, pincode }: ShowEmployeeProps) => {
  await connectToDatabase();
  
  let employees;

  if (service && pincode) {
    employees = await Employee.find({ 
      services: { $in: [service] }, 
      pincodes: { $in: [pincode] }
    });
  } else {
    employees = await Employee.find();
  }

  return (
    <>
      {employees.map((employee, key) => (
        <Employeebox key={key} employee={employee} />
      ))}
    </>
  );
};

export default ShowEmployee;
