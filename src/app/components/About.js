"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import AppointmentForm from "./AppointmentForm";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const toggleAppointmentForm = () => {
    setShowAppointmentForm(!showAppointmentForm);
  };

  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* Image */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-lg"
              src="/images/about/car01.png"
              width={600}
              height={448}
              alt="Car image"
            />
          </motion.div>
          {/* Text & Stats */}
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold mb-6"
              >
                Car services simplified.
              </motion.h2>
              <motion.p
                variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-700 mb-8"
              >
                Rent, choose, and repair with ease. Our convenient locations, diverse car types, and reliable repair points ensure a seamless car experience.
              </motion.p>
              {/* Stats */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-8 mb-12"
              >
                {/* Car Types */}
                {/* ... */}
              </motion.div>
              {/* Button "See all cars" */}
              <motion.button
                variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-accent hover:bg-accent-hover rounded-lg px-6 py-3 uppercase text-white font-semibold tracking-wider text-sm max-w-[184px] focus:outline-none"
              >
                See all cars
              </motion.button>
              {/* Button "Appointment" */}
              <motion.button
                onClick={toggleAppointmentForm}
                className="bg-red-500 hover:bg-red-600 rounded-lg px-6 py-3 uppercase text-white font-semibold tracking-wider text-sm mt-4 max-w-[184px] focus:outline-none"
                variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Appointment
              </motion.button>
              {/* Conditional Appointment Form */}
              {showAppointmentForm && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <AppointmentForm carId={"id_de_la_voiture"} /> {/* Remplacez "id_de_la_voiture" par l'ID réel */}
                    <button
                      onClick={toggleAppointmentForm}
                      className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
