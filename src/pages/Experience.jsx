import React from "react";
import { motion } from "framer-motion";
import expImage from '../assets/experience.jpg';
import { Link } from 'react-router-dom';
import Title from "../components/Title";

const experienceItems = [
  {
    title: "Luxury Stays",
    desc: "Stay in world-class resorts, private villas, and beachfront hotels.",
    icon: "🏨",
  },
  {
    title: "Wellness & Spa",
    desc: "Relax with massage, yoga, and holistic wellness treatments.",
    icon: "🧘‍♀️",
  },
  {
    title: "Fine Dining",
    desc: "Savor gourmet meals prepared by renowned chefs.",
    icon: "🍽️",
  },
  {
    title: "Local Adventures",
    desc: "Explore culture-rich tours, safaris, and excursions.",
    icon: "🌍",
  },
  {
    title: "Special Occasions",
    desc: "Celebrate weddings, honeymoons, and events in style.",
    icon: "🎉",
  },
  {
    title: "Exclusive Services",
    desc: "Airport pickup, personal concierge, and tailored plans.",
    icon: "🛎️",
  },
];

const Experience = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${expImage})` }}
      >
        <div className="bg-black bg-opacity-70 p-6 rounded-xl text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Live the Ultimate Hotel Experience
          </h1>
          <p className="text-lg md:text-xl">
            Luxury, adventure, and unforgettable moments await you at every
            stay.
          </p>
        </div>
      </section>

      {/* Experiences Grid with Animation */}

      <section className="py-16 px-6 md:px-20 bg-gray-100">

        <Title title='What You Can Experience' subTitle=' We  invites you to Make Special Happen. Explore our newest collection of remarkable moments, from vibrant gatherings to intimate occasions, each a one-of-a-kind celebration.'/>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 ">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            //   viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-700 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready for Your Dream Stay?</h2>
        <p className="mb-6 text-lg">
          Book your next unforgettable experience with QuickStay today.
        </p>
        <Link
          to="/rooms"
          className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
        >
          Explore Stays
        </Link>
      </section>
    </div>
  );
};

export default Experience;
