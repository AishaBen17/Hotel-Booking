import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
    return (

        <Link
            to={'/rooms/' + room._id}
            onClick={() => window.scrollTo(0, 0)}
            key={room._id}
            className="block bg-white rounded-2xl shadow-md max-w-72 w-full overflow-hidden">
            <div className="relative">
                <img
                    src={room.images[0]}
                    alt="room-image"
                    className='w-full '
                />

                {index % 2 === 0 && (
                    <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow'>
                        Best Seller
                    </p>
                )}
            </div>

            <div className='pt-5 p-4 text-gray-500  '>
                <div className='flex items-center justify-between'>
                    <p className='font-playfair text-xl font-medium text-gray-800'>{room.hotel.name}</p>
                    <div className='flex items-center gap-1'>
                        <img src={assets.starIconFilled} alt="star-icon" /> 4.5
                    </div>
                </div>
                <div className='flex items-center gap-1 text-sm'>
                    <img src={assets.locationIcon} alt="location-icon" />
                    <span>{room.hotel.address}</span>
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p><span className='text-gray-800 text-xl'>${room.pricePerNight}</span>/night</p>
                    <button className='py-2 px-4 text-sm font-medium border border-gray-300
                     rounded hover:bg-gray-100 transition-all cursor-pointer'>Book Now</button>
                </div>
            </div>
        </Link>
    )

}

export default HotelCard
