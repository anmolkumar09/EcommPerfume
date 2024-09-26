import React from 'react'
import Img from '../reviewApis/homeApi'
import icons from '../icons'
const HomePageProduct = () => {
  return (
    <div>
      
      <div className='container mx-auto px-2 py-5'>
        <div className='flex items-center justify-center flex-col'>
            <h1 className='font-extrabold text-2xl'>Our featured items</h1>
            <p className='text-center font-medium text-gray-600 max-w-screen-md mx-auto leading-7 m-5'>Explore fragrances as unique as you — shop our exclusive perfume collection's</p>
            {/* grid section */}
            <div className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 max-w-screen-lg mx-auto'>
               {Img.map((item,index)=>
                    <div key={index} className=' mx-1 p-1 rounded-2xl overflow-hidden'>
                      <img src={item.href} className='object-cover rounded-xl h-[55vh] w-[50vw] transition-all duration-300 hover:scale-105'/>
                      <div className='p-4 text-gray-500 capitalize'>
                        <h3 className='font-bold tracking-wider'>{item.name}</h3>
                        <p>{item.text}</p>
                        <p>{item.price}</p>
                      </div>
                      
                        <div className='flex items-center gap-0 5'>
                            {Array(5).fill(0).map((_, i) => {
                            const Icon = icons.star; // Use the icon map
                            return <Icon key={i} />;
                            })}
                        </div>
                    </div>
                    
               )}
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageProduct
