import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationsPage = async() => {
    const res = await fetch('http://localhost:5000/destinations')
    const destinations = await res.json()

    return (
        <div className='max-w-7xl mx-auto'>
            <h1>All Destinations</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destinations={destination}/>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;