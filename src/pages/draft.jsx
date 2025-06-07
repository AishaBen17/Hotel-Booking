import React from 'react'
import Title from '../components/Title'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';


const AllRooms = () => {
    const navigate = useNavigate()
    return (
        <div className='pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>

            <div className='flex flex-col items-start text-left mb-4 '>
                <h1 className='font-playfair text-4xl md:text-[40px]'>
                    Hotel Rooms</h1>
                <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-2xl'>
                    Take advantage of our limited-time offers and special packages to enhance
                    your stay and create unforgettable memories.</p>
            </div>


            {roomsDummyData.map((room) => (
                <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
                    <img src={room.images[0]} alt="hotel-img"
                        onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }}
                        className="max-w-sm rounded-xl shadow-lg object-cover cursor-pointer"
                        title="View Room Details" />

                    <div className='md:w-1/2 flex flex-col gap-2'>

                        <p className='text-gray-500'>{room.hotel.city}</p>
                        <p onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }}
                            className='text-gray-800 text-3xl font-playfair cursor-pointer'>{room.hotel.name}</p>
                        <div className='flex items-center'>
                            <StarRating />
                            <p className='ml-2'>200+ reviews</p>
                        </div>
                        <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                            <img src={assets.locationIcon} alt="location-icon" />
                            <span>{room.hotel.address}</span>
                        </div>

                        {/*Room Amenities*/}
                        <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                            {room.amenities.map((item, index) => (
                                <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                                    <img src={facilityIcons[item]} alt="facility-icon" className='w-5 h-5' />
                                    <p className='text-xs'>{item}</p>
                                </div>
                            ))}
                        </div>
                        {/*Room Price per Night*/}
                        <div>
                            <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
                        </div>
                    </div>

                </div>

            ))}

            {/*Filters*/}
            <div className='bg-white w-80 border border-gray-300 text-gray-600
             max-lg:mb-8 min-lg:mt-16'>

                <div className='text-base font-medium text-gray-800'>
                    <p>FILTERS</p>
                    <div className='text-xs cursor-pointer'>
                        <span className='lg:hidden'>HIDE</span>
                        <span className='hidden lg:block '>CLEAR</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllRooms
