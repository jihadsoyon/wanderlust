
import Image from 'next/image';
import React from 'react';
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";

const DestinationCard = ({ destinations }) => {
    const { imageUrl, price, destinationName, duration, country } = destinations;

    return (
        <div className="border">
            <Image
                className=''
                alt={destinationName}
                src={imageUrl}
                height={400}
                width={400}
            />
            <div className='p-3'>
                <div className='flex items-center gap-1'>
                    <LuMapPin /> <span>{country}</span>
                </div>
                <div className='flex justify-between '>
                    <div>
                        <div>
                            <h2 className='text-xl font-bold'>{destinationName}</h2>
                        </div>
                        <div className='flex items-center gap-1'><FaRegCalendar />{duration}</div>
                    </div>
                    <div className='text-2xl font-bold'>
                        <h3> $ {price}</h3>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DestinationCard;