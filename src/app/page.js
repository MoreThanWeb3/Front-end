// components
"use client"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import About from "./components/About";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import Search from "./components/Search"; // Assurez-vous d'importer le composant Search
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <main
      className="max-w-[1920px] bg-white mx-auto relative"
    >
      <Header />
      <Hero />
      <Search onSearch={handleSearch} /> {/* Passer la fonction handleSearch ici */}
      <Cars searchTerm={searchTerm} /> {/* Passer searchTerm au composant Cars */}
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
      <div className="h-[50px]"></div>
    </main>
  );
}
