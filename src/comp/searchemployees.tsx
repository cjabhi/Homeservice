import React from 'react';
import Employeebox from './employeebox';
import { Employee } from '@/app/models/userModel';
import { connectToDatabase } from '@/utils';

interface SearchEmployeeProps {
  employees?: typeof Employee;
}

const SearchEmployee: React.FC<SearchEmployeeProps> = async ({ employees }) => {
//   if (!employees) {
//     await connectToDatabase();
//     employees = await Employee.find();
//   }

  return (
    <>
      {employees.map((employee) => (
        <Employeebox key={employee._id} employee={employee} />
      ))}
    </>
  );
};

export default SearchEmployee;
