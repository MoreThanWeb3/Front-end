import Brands from "./Brands";
import CarSlider from "./CarSlider";

export default function Cars({ searchTerm }) {
  return (
    <section className="h-screen flex items-center" id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlider searchTerm={searchTerm} /> {/* Passer searchTerm à CarSlider */}
      </div>
    </section>
  );
}
