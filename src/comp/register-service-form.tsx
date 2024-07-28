"use client";

import React, { useState } from 'react';
import Select from 'react-select';
import { useRouter } from 'next/navigation';
import { pinOptions, serviceOptions } from './data';
import './css/register-service.css';
import { addemployee } from "./actions/addemployee";

interface FormProps {
  username: string;
  contact: number;
}

const Form: React.FC<FormProps> = ({ username, contact }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [pincodes, setPincodes] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (selectedOptions: any) => {
    const values = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setSelectedServices(values);
  };

  const handlePinChange = (selectedOptions: any) => {
    const values = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setPincodes(values);
  };

  const addEmployee = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const contact_no = formData.get('contact_no') as string;
    const description = formData.get('about') as string;

    try {
      const error = await addemployee({ name, contact_no, selectedServices, pincodes, description });
      if (error) {
        setError(error);
      } else {
        router.push('/');
      }
    } catch (err) {
      setError("An error occurred while adding the employee.");
    }
  };

  return (
    <form onSubmit={addEmployee}>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" placeholder="Name" value={username} readOnly />

      <label htmlFor="contact_no">Contact No.</label>
      <input name="contact_no" type="number" placeholder="Contact Number" value={contact} readOnly />

      <label htmlFor="services">Services</label>
      <Select
        placeholder="Enter services you provide"
        isMulti
        name="services"
        options={serviceOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        required
        onChange={handleChange}
      />

      <label htmlFor="pins">Pincodes</label>
      <Select
        placeholder="Enter pincodes where you can provide service"
        isMulti
        name="pins"
        options={pinOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        required
        onChange={handlePinChange}
      />

      <label htmlFor="about">Description</label>
      <textarea name="about" placeholder="Write something about yourself and the services you provide..." required />

      {error && <p className="error">{error}</p>}

      {/* <input type="submit" value="Add Employee" /> */}
      <button type='submit'> Submit </button>
    </form>
  );
};

export default Form;
