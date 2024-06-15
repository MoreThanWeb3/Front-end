"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import axios from 'axios';

export default function CarSlider({ searchTerm = "" }) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/cars')
      .then(response => {
        console.log('Cars data:', response.data);
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  }, []);

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.color.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          960: { slidesPerView: 3, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
        slidesPerView={3}
        spaceBetween={32}
      >
        {Array.isArray(filteredCars) && filteredCars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[385px] mx-auto sm:mx-0">
              <div className="relative h-[284px]">
                {car.images && car.images.length > 0 && (
                  <Image
                    src={car.images[0].url}
                    alt={car.name}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-[13px] text-secondary uppercase">
                    {car.type}
                  </div>
                  <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                  <div className="mb-10 text-accent font-semibold uppercase">
                    ${car.price}
                  </div>
                </div>
                <div className="flex gap-x-2 text-accent h-max">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
              <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                <div className="flex flex-col items-center">
                  <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                    <FaStar />
                  </div>
                  <div className="text-[12px] uppercase">{car.motorType}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                    <FaStar />
                  </div>
                  <div className="text-[12px] uppercase">{car.power} HP</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                    <FaStar />
                  </div>
                  <div className="text-[12px] uppercase">{car.placeNumber} Seats</div>
                </div>
              </div>
              <button className="btn btn-accent btn-lg">See details</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
