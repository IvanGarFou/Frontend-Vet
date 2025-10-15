import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const ContactUsCard = () => {
  return (
    <div className="flex flex-wrap items-stretch justify-center min-h-[250px]">
      <img
        src='https://images.pexels.com/photos/2759564/pexels-photo-2759564.jpeg'
        alt="Imagen de patitas de perrito"
        className="w-1/6 h-full object-cover"
      />

      <section className="flex flex-col items-center w-3/5 h-full">
        <h1 className="relative z-10 bg-[#F2D6C1] text-white font-bold md:text-2xl lg:text-4xl px-6 py-2 rounded-full mb-[-1.5rem]">
          Contáctanos
        </h1>
        <div className="flex flex-col items-center justify-center bg-[#D88B66] w-full p-12 flex-grow">
          <div className="flex items-center bg-white rounded-full px-4 py-2 w-[80%] mb-10 shadow-sm">
            <FaPhoneAlt className="text-[#D88C66] text-2xl mr-2" />
            <span className="text-gray-800 font-medium md:text-medium lg:text-2xl mx-auto">222-222-2222</span>
          </div>
          <div className="flex items-center bg-white rounded-full px-4 py-2 w-[80%] shadow-sm">
            <FiMail className="text-[#D88C66] text-2xl mr-2" />
            <span className="text-gray-800 font-medium md:text-medium lg:text-2xl mx-auto">pawmatch@email.com</span>
          </div>
        </div>
      </section>

      <img
        src='https://images.pexels.com/photos/2759564/pexels-photo-2759564.jpeg'
        alt="Imagen de patitas de perrito"
        className="w-1/6 h-full object-cover"
      />
    </div>
  );
};


export default ContactUsCard