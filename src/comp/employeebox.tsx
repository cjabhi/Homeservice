"use client";
import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import './css/employeebox.css';

interface Emp {
  name: string;
  contact_no: number;
  services: string[];
  pincodes: number[];
  description: string;
}

interface EmployeeboxProps {
  employee: Emp;
}

const Employeebox: React.FC<EmployeeboxProps> = ({ employee }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const truncatedDescription = employee.description.slice(0, 100); // Adjust the number for truncation

  return (
    <div className="container">
      <h3 className="name">{employee.name}</h3>
      <p className="description">
        {showMore ? employee.description : `${truncatedDescription}...`}
        {employee.description.length > 100 && (
          <span className="show-more" onClick={toggleShowMore}>
            {showMore ? 'Show less' : 'Show more'}
          </span>
        )}
      </p>
      <p className="contactNo"><FaPhone className="icon" /> {employee.contact_no}</p>
      <div className="infoBox">
        <h4 className="infoHeader">Services</h4>
        <div className="horizontalBox">
          {employee.services.map((service, index) => (
            <div key={index} className="horizontalItem">{service}</div>
          ))}
        </div>
      </div>
      <div className="infoBox">
        <h4 className="infoHeader">Pincodes</h4>
        <div className="horizontalBox">
          {employee.pincodes.map((pincode, index) => (
            <div key={index} className="horizontalItem">{pincode}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employeebox;
