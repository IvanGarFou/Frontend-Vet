import React from 'react'


const Donaciones = () => {
  return (
    <section id='Donaciones_Contenedor-Home' className=' p-1 flex flex-row justify-center'>
        <div className="md:w-2/5 lg:w-2/8 overflow-hidden relative flex flex-col justify-end">
          <img  src='https://images.pexels.com/photos/2759564/pexels-photo-2759564.jpeg'  alt="Gato gris"  className="w-full md:right-0 h-full object-cover" />
        </div>

        <div className='Donaciones_Info-Home w-3/6 p-4 space-y-4'>
            <h1 className='md:text-3xl lg:text-5xl font-bold m-0'>Donaciones</h1>
            <div className='bg-[#A8C3A0] px-12 py-8 rounded-4xl md:text-base lg:text-3xl'>
                <p>Puedes ayudar con donativos en especie o suma económica con ellos nos permites seguir ayudando a nuestros perros y gatos que han sido rescatados de situación de maltrato y/o abandono en su manutención, salud, rehabilitación física, emocional y conductual.</p>
                <div className='flex justify-center py-2 mt-2'>
                    <button className='cursor-pointer bg-[#D88C66] text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-500 transition'>Escríbenos para donar</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center'>
            <div class="w-0 h-0 
              border-t-[20px] border-t-transparent 
              border-b-[20px] border-b-transparent 
              border-l-[30px] border-l-[#D88C66]">
              </div>
        </div>
    </section>
  )
}

export default Donaciones