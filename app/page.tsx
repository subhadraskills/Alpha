
import ImageCarousel from "@/components/ImageCarousel";
import CarDetails from "@/components/carDetails";
import PriceCalculator from "@/components/PriceCalculator";
import cars from '../lib/cars';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-5 space-y-10">

      
      <section className="w-full">
        <ImageCarousel images={cars.images} />
      </section>

   
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div className="md:col-span-2">
          <CarDetails
            model={cars.Model}
            year={cars.year}
            mileage={cars.mileage}
            price={cars.price}
          />  
        </div>

        <div className="shadow-lg p-6 rounded-lg border">
          <PriceCalculator  />
        </div>
      </section>

    </div>
  );
}
