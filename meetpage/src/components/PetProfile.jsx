// src/components/PetProfile.jsx

import React from 'react';

function PetProfile({ pet }) {
  return (
    // ----- ¡AQUÍ ESTÁ EL CAMBIO! -----
    // Cambiamos "bg-white" por "bg-background" para que coincida con el fondo de la página.
    <div className="bg-background rounded-lg shadow-xl p-6 md:p-10 max-w-4xl mx-auto my-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-text-main">
        Conoce a <span className="text-accent">{pet.name}</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            src={pet.mainImage}
            alt={`Imagen principal de ${pet.name}`}
            className="rounded-lg shadow-lg mb-6 w-full max-w-sm md:max-w-none object-cover"
            style={{ maxHeight: '550px' }}
          />
          <div className="flex gap-4 overflow-x-auto justify-center w-full">
            {pet.galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Miniatura ${index + 1} de ${pet.name}`}
                className="w-24 h-24 object-cover rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2">
          {/* Le he puesto un fondo blanco a esta sección para que se pueda leer bien */}
          <div className="flex justify-around bg-white/50 rounded-lg p-3 mb-6 font-semibold text-center text-text-main">
            <div className="flex-1">
              <p className="text-sm opacity-75">Raza</p>
              <p>{pet.breed}</p>
            </div>
            <div className="border-l border-primary mx-2"></div>
            <div className="flex-1">
              <p className="text-sm opacity-75">Sexo</p>
              <p>{pet.gender}</p>
            </div>
            <div className="border-l border-primary mx-2"></div>
            <div className="flex-1">
              <p className="text-sm opacity-75">Edad</p>
              <p>{pet.age}</p>
            </div>
          </div>

          <p className="leading-relaxed mb-4">{pet.description}</p>
          <h3 className="text-xl font-semibold mb-2 mt-6">Su historia comenzó en la calle</h3>
          <p className="leading-relaxed mb-4">{pet.story}</p>
          <p className="leading-relaxed italic mb-8">{pet.status}</p>

          <button className="w-full bg-button-bg text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-accent transition-colors shadow-lg">
            Adoptar a {pet.name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetProfile;