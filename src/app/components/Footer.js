"use client";

import { useState } from 'react';
import { z } from 'zod';
import axios from 'axios';
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Copyright from "./Copyright";
import { Link } from "react-scroll";
import Image from "next/image";

const schema = z.object({
  name: z.string().min(2,'Please enter your real name'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(2,'Enter 2 character minimum'),
});

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      schema.parse(formData);
      console.log('Form submitted:', formData);

      // Envoi de l'e-mail via une requête HTTP à votre propre API
      await axios.post('/api/sendEmail', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setFormErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setFormErrors(fieldErrors);
      }
    }
  };

  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div 
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image src={"/icons/logo.svg"} width={200} height={200} alt="" />
            </Link>
            {/* text */}
            <div className="text-secondary">
              Lorem ipsum
            </div>
            {/* phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold">
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(123)456-7890</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">office@carland.com</div>
              </div>
            </div>
          </div>
          {/* Links */}
          <div className="flex-1 flex flex-col xl:imtes-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href=''>New York</a>
                </li>
                <li>
                  <a href=''>Careers</a>
                </li>
                <li>
                  <a href=''>Mobile</a>
                </li>
                <li>
                  <a href=''>Blog</a>
                </li>
                <li>
                  <a href=''>How we work</a>
                </li>
              </ul>
            </div>
          </div>
          {/* program */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri:</div>
                <div className="font-semibold">09:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat</div>
                <div className="font-semibold">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          {/* newsletter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <div className="mb-9 text-secondary">More Than Car</div>
            {/* form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 h-auto">
              <input 
                type="text" 
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="outline-none bg-white h-14 border rounded-lg pl-4 focus:border-accent"
              />
              {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
              <input 
                type="text" 
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="outline-none bg-white h-14 border rounded-lg pl-4 focus:border-accent"
              />
              {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
              <input 
                type="text" 
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="outline-none bg-white h-14 border rounded-lg pl-4 focus:border-accent"
              />
              {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
              <button type="submit" className="btn btn-sm bg-accent h-14">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}
  