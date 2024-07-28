"use server";

import { Employee, User } from "@/app/models/userModel";
import { connectToDatabase } from "@/utils";

export const addemployee = async ({ name, contact_no, selectedServices, pincodes, description }) => {
  if (!name || !contact_no || !pincodes || !selectedServices) {
    throw new Error("Please provide all fields");
  }

  await connectToDatabase();

  try {
    // Update the employee if it exists, otherwise create a new one
    const emp = await Employee.findOneAndUpdate(
      { contact_no },
      { name, services: selectedServices, pincodes, description },
      { new: true, upsert: true }
    );

    // If a user already exists with the same contact_no, update the employee status
    const user = await User.findOne({ contact_no });
    if (user) {
      await user.updateOne({ $set: { employee: true } });
    }
  } catch (error) {
    return error;
  }
};
