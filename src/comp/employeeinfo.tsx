import React from 'react';
import './css/employeeinfo.css';

type EmployeeInfoProps = {
  name: string;
  contact_no: number;
  pincodes: string[];
  services: string[];
  description: string;
};

const EmployeeInfo: React.FC<EmployeeInfoProps> = ({ name, contact_no, pincodes, services, description }) => {
  return (
    <div className="employee-info-container">
      <h2> {`Hello ${name}`} </h2>
      <form>
        <div className="form-group">
          <label htmlFor="name"><strong>Name:</strong></label>
          <input type="text" id="name" value={name} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="contact_no"><strong>Contact No:</strong></label>
          <input type="text" id="contact_no" value={contact_no} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="pincodes"><strong>Pincodes:</strong></label>
          <input type="text" id="pincodes" value={pincodes.join(', ')} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="services"><strong>Services:</strong></label>
          <input type="text" id="services" value={services.join(', ')} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="description"><strong>Description:</strong></label>
          <textarea id="description" value={description} readOnly />
        </div>
        <div  style={{display:"flex"}} >

        <button style={{width:"100%"}} > <a href="/register-service" style={{textDecoration:"none"} } >Update</a> </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeInfo;
