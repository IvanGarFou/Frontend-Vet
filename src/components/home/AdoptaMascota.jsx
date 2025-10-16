import React from 'react'

const AdoptaMascota = () => {
  return (
    <>
    <section id='AdoptaMascota_Contenedor-Home' className='px-8 py-1 flex flex-row justify-between w-full mt-4'>
      <div id='AdoptaMascota_Info-Home' className='md:w-3/5 lg:w-3/6 space-y-4 px-2 md:text-xl'> {/* Info */}
        <h1 className='md:text-3xl lg:text-5xl font-bold text-left'> ADOPTA A UNA MASCOTA</h1>
        <p className='md:text-1xl lg:text-3xl text-left'> Dale un hogar feliz a una mascota necesitada, explora a los peluditos en adopción hoy mismo.</p>
        <button className='cursor-pointer bg-[#D88C66] text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-500 transition'>Ver mascotas</button>
      </div>

      <img className='md:w-2/5 lg:w-2/6 mb-2 h-full' src='https://i.imgur.com/ZLGdVUt.jpeg' alt="Imagen de cachorro de Golden retriever" />
    </section>
    </>
    
  )
}

export default AdoptaMascota