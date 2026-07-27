

import { DeleteAlert } from '@/components/DeleteAlert';
import { EditModal } from '@/components/EditModal';
import Image from 'next/image';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const DestinationsDetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch(`http://localhost:5000/destinations/${id}`)
    const destination = await res.json()

    const { _id, imageUrl, price, destinationName, duration, country, description } = destination;
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex items-center gap-3 justify-end'>
                <EditModal destination={destination} />
                <DeleteAlert destination={destination} />
            </div>
            <Image
                className='w-full h-100 object-cover'
                alt={destinationName}
                src={imageUrl}
                height={500}
                width={800}

            />

            <div className='p-4 flex flex-col flex-grow justify-between gap-3'>
                <div>
                    <div className='flex items-center gap-1 text-gray-600 text-sm mb-1'>
                        <LuMapPin className="text-cyan-500" /> <span>{country}</span>
                    </div>
                    <h2 className='text-xl font-bold line-clamp-1'>{destinationName}</h2>
                </div>

                <div className='flex justify-between items-center mt-auto gap-3'>
                    <div className='flex items-center gap-2 text-gray-500 text-sm'>
                        <FaRegCalendar className="text-cyan-500" />
                        <span>{duration}</span>
                    </div>
                    <div className='text-xl font-extrabold text-cyan-600 whitespace-nowrap'>
                        $ {price}
                    </div>
                </div>
                <h1 className='mt-2 text-2xl font-bold text-cyan-600'>Overview</h1>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default DestinationsDetailsPage;