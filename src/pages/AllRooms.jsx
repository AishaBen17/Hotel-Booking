import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const CheckBox = ({ label, selected = false, onChange = () => { } }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
    <input
      type="checkbox"
      checked={selected}
      onChange={(e) => onChange(e.target.checked, label)}
    />
    <span className="font-light select-none">{label}</span>
  </label>
);

const RadioButton = ({ label, selected = false, onChange = () => { } }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
    <input
      type="radio"
      name="sortOption"
      checked={selected}
      onChange={() => onChange(label)}
    />
    <span className="font-light select-none">{label}</span>
  </label>
);

const AllRooms = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [openFilters, setOpenFilters] = useState(false);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedSort, setSelectedSort] = useState('');

  const params = new URLSearchParams(location.search);
  const destination = params.get('destination');

  const roomTypes = ['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite'];
  const priceRanges = ['0 to 500', '500 to 1000', '1000 to 2000', '2000 to 3000'];
  const sortOptions = ['Price Low to High', 'Price High to Low', 'Newest First'];

  const handleRoomTypeChange = (checked, label) => {
    setSelectedRoomTypes((prev) =>
      checked ? [...prev, label] : prev.filter((item) => item !== label)
    );
  };

  const handlePriceRangeChange = (checked, label) => {
    const value = label.replace('$ ', '');
    setSelectedPriceRanges((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSortChange = (label) => {
    setSelectedSort(label);
  };

  const clearAllFilters = () => {
    setSelectedRoomTypes([]);
    setSelectedPriceRanges([]);
    setSelectedSort('');
  };

  // Filtering
  let filteredRooms = roomsDummyData.filter((room) => {
    const matchesCity =
      !destination || room.hotel.city.toLowerCase() === destination.toLowerCase();

    const matchesRoomType =
      selectedRoomTypes.length === 0 ||
      selectedRoomTypes.includes(room.roomType || room.type);

    const matchesPrice =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.some((range) => {
        const [min, max] = range.split(' to ').map(Number);
        return room.pricePerNight >= min && room.pricePerNight <= max;
      });

    return matchesCity && matchesRoomType && matchesPrice;
  });

  // Sorting
  if (selectedSort === 'Price Low to High') {
    filteredRooms.sort((a, b) => a.pricePerNight - b.pricePerNight);
  } else if (selectedSort === 'Price High to Low') {
    filteredRooms.sort((a, b) => b.pricePerNight - a.pricePerNight);
  } else if (selectedSort === 'Newest First') {
    filteredRooms.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Room List */}
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-2xl">
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>

        {filteredRooms.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
          >
            <img
              src={room.images[0]}
              alt="hotel-img"
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="max-w-sm rounded-xl shadow-lg object-cover cursor-pointer"
              title="View Room Details"
            />

            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating rating={room.rating} />
                <p className="ml-2">200+ reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>

              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
                  >
                    <img src={facilityIcons[item]} alt="facility-icon" className="w-5 h-5" />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xl font-medium text-gray-700">${room.pricePerNight} /night</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div
          className={`flex items-center justify-between px-5 py-2.5 lg:border-b border-gray-300 ${openFilters && 'border-b'
            }`}
        >
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xs cursor-pointer flex gap-4">
            <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">
              {openFilters ? 'HIDE' : 'SHOW'}
            </span>
            <span onClick={clearAllFilters} className="hidden lg:block hover:underline">
              CLEAR
            </span>
          </div>
        </div>

        <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto overflow-hidden transition-all duration-700'}`}>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox
                key={index}
                label={room}
                selected={selectedRoomTypes.includes(room)}
                onChange={handleRoomTypeChange}
              />
            ))}
          </div>

          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox
                key={index}
                label={`$ ${range}`}
                selected={selectedPriceRanges.includes(range)}
                onChange={handlePriceRangeChange}
              />
            ))}
          </div>

          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort by</p>
            {sortOptions.map((option, index) => (
              <RadioButton
                key={index}
                label={option}
                selected={selectedSort === option}
                onChange={handleSortChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
