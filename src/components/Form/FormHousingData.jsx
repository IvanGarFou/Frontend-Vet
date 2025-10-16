import { useNavigate } from "react-router-dom";

function FormHousingData() {
  const navigate = useNavigate();
  return (
    <form
      className="bg-white border-2 border-[#A8C3A0]  rounded-xl  mt-8 p-6 max-w-2xl w-full text-left"
    >
      <h2 className="text-lg font-semibold text-center mb-4 text-[#4b4b4b]">
        FORMULARIO DATOS DE VIVIENDA
      </h2>
{/* 1 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
              Tipo de Vivienda
            </label>
             <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="tipoVivienda">
                <option value="" disabled selected></option>
                <option value="1">Casa propia</option>
                <option value="2">Casa rentada</option>
                <option value="3">Departamento propio</option>
                <option value="4">Departamento rentado</option>
              </select>
      </div>

{/* 2 */}
      <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            ¿Tienes patio o terraza?
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="patioTerraza">
              <option value="" disabled selected></option>
              <option value="1">Patio</option>
              <option value="2">Terraza</option>
              <option value="3">Ambos</option>
              <option value="4">Ninguno</option>
            </select>          
        </div>

{/* 3 */}
    <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            Tipo de Zona
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="zona">
              <option value="" disabled selected></option>
              <option value="1">Urbana</option>
              <option value="2">Suburbana</option>
              <option value="3">Rural</option>
            </select>          
        </div>

{/* 4 */}
    <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            ¿Hay niños en casa?
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="niños">
              <option value="" disabled selected></option>
              <option value="1">Si</option>
              <option value="2">No</option>
            </select>          
        </div>
    


{/* 5 */}
    
      <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
              Numero de personas que viven contigo
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="numopersonas">
                <option value="" disabled selected></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10 o más</option>
              </select>
              </div>

{/* 6 */}
    <div className="space-y-7">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            Tu vivienda es compartida con
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="compartida">
              <option value="" disabled selected></option>
              <option value="1">Familiares</option>
              <option value="2">Roomies</option>
            </select>          
        </div>
        </div>
<div>
{/* 7 */}
  <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
    <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            ¿Actualmente tienes otras mascotas?(En caso afirmativo, indica especie, raza y edad)
            </label>
            <textarea className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="mascotas" rows="3" placeholder="Escribe aquí..."></textarea>          
    </div>
    
{/* 8 */}
    <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            ¿Donde permanecera la mascota la mayor parte del tiempo?
            </label>
            <textarea className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="mascotiempo" rows="3" placeholder="Escribe aquí..."></textarea>          
    </div>

{/* 9 */}
    <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            ¿Cuentas con transporte propio o acceso facil para llevar a tu mascota al veterinario en caso de emergencia? (Especifica)
            </label>
            <textarea className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="acceso" rows="3" placeholder="Escribe aquí..."></textarea>          
    </div>

{/* 10 */}
    <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            ¿Con que frecuencia estara sola la mascota al dia?
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="frecuencia">
              <option value="" disabled selected></option>
              <option value="1">1 vez a la semana</option>
              <option value="2">2-3 veces a la semana</option>
              <option value="3">4-5 veces a la semana</option>
              <option value="4">Todos los días</option>
            </select>          
        </div>

{/* 11 */}
    <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            ¿La mascota tendra acceso a todos los espacios del hogar o solo a ciertas areas??
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="frecuencia">
              <option value="" disabled selected></option>
              <option value="1">Acceso a todos los espacios</option>
              <option value="2">Acceso a ciertas áreas</option>
            </select>          
        </div>

{/* 12 */}
  <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
    <div>
      <label class="block text-base mb-1 font-poppins text-[#4b4b4b] font-medium">
        Adjunta una foto del area donde vivira la mascota</label>
        <input accept="" class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none appearance-none" type="file" name="croquis"></input>
      <div class="text-sm text-gray-500 mt-1">Tamaño máximo de archivo: 3MB</div>
    </div>
{/* Imagen */}
      <img className="w-full h-40 object-cover rounded-lg" src="https://i.postimg.cc/vTLsM8h8/R3ba14fd74b0d1437c4cb025070c9d0e9.jpg" alt="" />
      </div>

      </div> 
      
      <div class="flex flex-row items-center mt-8 space-y-4 justify-center w-full">
        <button class="px-4 py-2 font-semibold hover:ring-offset-2 hover:ring-2  transition rounded-full mt-2 bg-[#D88C66] hover:ring-[#D88C66] text-[#FAF8F3]"
        onClick={() => navigate("/FormContract")}
        >Siguiente</button>      </div>
      </div >
      
    </form>
    
  );
}

export default FormHousingData;
