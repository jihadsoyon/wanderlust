
import Image from 'next/image';
import React from 'react';
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";

const DestinationCard = ({ destinations }) => {
    const { imageUrl, price, destinationName, duration, country } = destinations;

    return (
        <div className="border rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
         
            <div className="relative w-full h-48 sm:h-56"> 
                <Image
                    className='object-cover' // 
                    alt={destinationName || "Destination"}
                    src={imageUrl}
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
            </div>
            
            
            <div className='p-4 flex flex-col flex-grow justify-between gap-3'>
                <div>
                    <div className='flex items-center gap-1 text-gray-600 text-sm mb-1'>
                        <LuMapPin className="text-cyan-500" /> <span>{country}</span>
                    </div>
                    <h2 className='text-xl font-bold line-clamp-1'>{destinationName}</h2>
                </div>

                <div className='flex justify-between items-end mt-auto'>
                    <div className='flex items-center gap-1 text-gray-500 text-sm'>
                        <FaRegCalendar className="text-cyan-500" />
                        <span>{duration}</span>
                    </div>
                    <div className='text-xl font-extrabold text-cyan-600 whitespace-nowrap'>
                        $ {price}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;
