// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PetProfile from './components/PetProfile';

// Datos de ejemplo para un perro (esto lo pasarías desde una API o un estado)
const bosterData = {
  name: "Boster",
  breed: "Boyero de Entlebuch",
  gender: "Macho",
  age: "2 Años",
  description: "Con su mirada tierna y su energía inagotable, Boster sueña con un hogar donde pueda correr libre, jugar y compartir cada día con una familia que lo quiera tanto como él sabrá quererlos. Es un perro noble, muy inteligente y con un corazón enorme: siempre está dispuesto a acompañarte, ya sea en una aventura al aire libre o en una tarde tranquila en casa.",
  story: "Su historia comenzó en la calle, donde pasó días difíciles hasta ser rescatado, и ahora solo espera la oportunidad de tener una familia que lo abrace para siempre.",
  status: "Boster está vacunado, sano y listo para convertirse en ese amigo fiel que nunca te dejará solo. Dale la oportunidad de ser parte de tu vida... ¡él está esperando por ti!",
  // --- ¡AQUÍ ESTÁ EL CAMBIO! ---
  // Reemplaza los viejos links con los nuevos
  mainImage: "https://images.dog.ceo/breeds/entlebucher/n02108000_263.jpg",
  galleryImages: [
    "https://images.dog.ceo/breeds/entlebucher/n02108000_209.jpg",
    "https://images.dog.ceo/breeds/entlebucher/n02108000_1099.jpg",
    "https://images.dog.ceo/breeds/entlebucher/n02108000_1287.jpg",
  ]
};

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <PetProfile pet={bosterData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;