import React from "react";
import { motion } from "framer-motion";
import staffImage from '../assets/staff.jpg';
import heroImage from '../assets/aboutimage.jpg';
import Title from "../components/Title";


const About = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-[70vh] bg-cover bg-center flex items-center justify-center relative" 
      style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="bg-black/60 absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center z-10 max-w-3xl px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Your Journey Begins Here</h1>
          <p className="text-xl text-gray-300">
            Discover the story behind our passion for seamless luxury stays.
          </p>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          <div className="space-y-6">
           
            <Title title='Who We Are' />
            <p className="text-lg text-gray-600">
              We're a team of explorers and curators. From world-class hotels to local gems, we bring you experiences worth remembering.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Authentic experiences</li>
              <li>Luxury tailored to you</li>
              <li>Real-time support, everywhere</li>
            </ul>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img src={staffImage} alt="Team" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-900 text-white">
        <Title title='Our Journey' />
       
        <div className="space-y-10 max-w-4xl mx-auto px-6 mt-3">
          {[
            { year: "2019", text: "Founded with a dream to redefine travel." },
            { year: "2021", text: "Partnered with 100+ boutique hotels worldwide." },
            { year: "2023", text: "Launched personalized booking engine." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center gap-6"
            >
              <div className="text-3xl font-bold text-blue-400">{item.year}</div>
              <div className="h-px flex-1 bg-blue-400" />
              <p className="text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision + Mission Cards */}
      <section className="py-20 bg-white text-black">
        <div className="text-center mb-12">
               <Title title='What Drives Us' subTitle='Our guiding lights in every journey' />
        
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-blue-50 rounded-xl shadow hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>To become the go-to destination for those seeking curated, effortless, luxurious experiences around the world.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-blue-50 rounded-xl shadow hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p>To connect people with places through technology and passion for discovery, ensuring every journey is personal and unforgettable.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Your next adventure starts with us</h2>
        <p className="mb-6 text-lg">Let’s make memories that last.</p>
        <a
          href="/experience"
          className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Explore Experiences
        </a>
      </section>
    </div>
  );
};

export default About;
