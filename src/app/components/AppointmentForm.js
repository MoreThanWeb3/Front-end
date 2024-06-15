import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/appointments", data);
      console.log("Appointment created:", response.data);
      if (response.status === 200) {
        alert("Appointment created successfully!");
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert("Error creating appointment. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="carId" className="block text-gray-700 font-semibold mb-2">
          Car ID
        </label>
        <input
          id="carId"
          type="text"
          {...register("carId", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter car name"
        />
        {errors.carId && (
          <span className="text-red-500 text-sm">Car Id is required</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">Name is required</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          {...register("firstName", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your first name"
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm">First name is required</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">Valid email is required</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your message"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2">
          Contact
        </label>
        <input
          id="contact"
          type="text"
          {...register("contact", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your contact number"
        />
        {errors.contact && (
          <span className="text-red-500 text-sm">Contact number is required</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="appointmentDate" className="block text-gray-700 font-semibold mb-2">
          Appointment Date
        </label>
        <input
          id="appointmentDate"
          type="datetime-local"
          {...register("appointmentDate", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.appointmentDate && (
          <span className="text-red-500 text-sm">Appointment date is required</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm;
