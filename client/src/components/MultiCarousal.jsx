import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Img from "../reviewApis/api"
import icons from '../icons';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};



const MultiCarousel = () => {
  return (
    <>
    <div>
      <div>
        <h2 className="text-3xl font-semibold text-center capitalize">
        Our Happy Customers Say About us
        </h2>      
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2000}
        customTransition="transform 300ms ease-in-out"
      >
        
        {Img.map((item, index) => (
          <div key={index} className='rounded-2xl p-2 mx-12 flex items-center justify-center flex-col h-[15rem]'>
              <div className="flex w-full p-4 max-w-lg flex-col rounded-lg bg-gray-200 shadow-sm border border-slate-200 my-6">
                <div className="flex items-center gap-4 text-slate-800">
                  <img src={item.href} alt="Tania Andrew" className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
                  <div className="flex w-full flex-col">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xl font-semibold text-slate-800">
                        <p>{item.name}</p>
                      </h5>
                      <div className='flex items-center gap-0 5 '>
                        {Array(5).fill(0).map((_, i) => {
                          const Icon = icons.star; // Use the icon map
                          return <Icon key={i} />;
                        })}
                      </div>
                    </div>
                    <p className="text-xs uppercase font-bold text-slate-500 mt-0.5">
                      Designer @ Google
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-base text-slate-600 font-normal leading-normal">
                    &quot;{item.text}&quot;
                  </p>
                </div>
              </div> 
          </div>
        ))}



       
      </Carousel>
    </div>
   
   
</>
  );
};

export default MultiCarousel;
