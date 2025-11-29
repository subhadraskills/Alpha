"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [is360, setIs360] = useState(false);
  const [emblaRef] = useEmblaCarousel({
    dragFree: is360,
    loop: is360,
  });
  return (
    <div>
      <Carousel ref={emblaRef} className="w-full max-w-xl mx-auto">
        <button
          onClick={() => setIs360(!is360)}
          className="mb-4 px-4 py-2 bg-gray-600 text-white rounded-2xl hover:bg-gray-700 "
        >
          {is360 ? "Normal View" : "360° View"}
        </button>
        <CarouselContent className="w-full">
          {images.map((img) => (
            <CarouselItem key={img} className="flex justify-center">
              <img
                src={img}
                alt="car"
                className="w-full rounded-xl object-cover"
              />
            </CarouselItem>
          ))}   
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
