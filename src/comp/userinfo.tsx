import React from 'react';
import './css/userinfo.css';

type UserInfoProps = {
  name: string;
  contact_no: number;
  employee: boolean;
};

const UserInfo: React.FC<UserInfoProps> = ({ name, contact_no, employee }) => {
  return (
    <div className="user-info-container">
      <h2>{`Hii ${name}`}</h2>
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
          <label htmlFor="employee"><strong>Employee:</strong></label>
          <input type="text" id="employee" value={employee ? 'Yes' : 'No'} readOnly />
        </div>
        <div  style={{display:"flex"}} >

        <button style={{width:"100%"}} > <a href="/register-service" style={{textDecoration:"none"} } >Be a employee</a> </button>
        </div>
      </form> 
    </div>
  );
};

export default UserInfo;
