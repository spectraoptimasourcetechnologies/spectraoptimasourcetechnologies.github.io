import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

interface PicList {
  url: ImageMetadata;
  name: string;
}

interface CarouselServiceProps {
  picList: PicList[];
}

const CarouselService: React.FC<CarouselServiceProps> = ({ picList }) => {
  const plugin = useRef(Autoplay({ delay: 4000 }));

  return (
    <Carousel plugins={[plugin.current]} className='w-full'>
      <CarouselContent>
        {picList.map((pic, index) => (
          <CarouselItem key={index} className='w-full'>
            <figure>
              <img src={pic.url.src} alt={pic.name} className='object-cover w-full' />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselService;
