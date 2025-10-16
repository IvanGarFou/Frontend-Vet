import { useState, useRef } from "react";
import Input from "./Input";
{/*import MiFirma from "./Firma";*/}

function FormContract({ solicitante = { nombre: '', apellidoPaterno: '', apellidoMaterno: '', email: '' } }) {
  
  const [formData, setFormData] = useState({
    fechaVisita: new Date().toISOString().split("T")[0],
    numeroContrato: "",
    telefono: "",
    ine: "",
    calle: "",
    numExterior: "",
    numInterior: "",
    colonia: "",
    codigoPostal: "",
    mascotaNombre: "",
    mascotaSexo: "",
    mascotaEspecie: "",
    mascotaTamano: "",
    mascotaEsterilizado: "si",
    mascotaDescripcion: "",
    mascotaEstadoSalud: "",
  });

  const [firma, setFirma] = useState(null);
  const [errors, setErrors] = useState({}); 
  const formRef = useRef(); 

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  
  {/* function handleSaveFirma(dataUrl) {
    setFirma(dataUrl);
    console.log("Firma guardada!");
  }*/}

  // Validar el formulario
  const validateForm = () => {
    const newErrors = {};
    const numericRegex = /^[0-9]+$/;

    // Validación: Número de contrato
    if (!formData.numeroContrato || !numericRegex.test(formData.numeroContrato) || formData.numeroContrato.length < 12) {
      newErrors.numeroContrato = "Debe tener al menos 12 caracteres numéricos.";
    }

    // Validación: Calle
    if (!formData.calle || formData.calle.length <= 5) {
      newErrors.calle = "La calle debe tener más de 5 caracteres.";
    }

    // Validación: Código Postal
    if (!formData.codigoPostal || !numericRegex.test(formData.codigoPostal) || formData.codigoPostal.length !== 5) {
      newErrors.codigoPostal = "Debe tener 5 caracteres numéricos.";
    }

    return newErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // Detiene el envío si hay errores
    }
    
    setErrors({}); // Limpia los errores si todo está bien

    if (!firma) {
      alert("Por favor, guarda tu firma antes de generar el contrato.");
      return;
    }
    const contratoCompleto = {
      solicitante: solicitante,
      ...formData,
      firma,
    };
    console.log("Generando contrato con los siguientes datos:", contratoCompleto);
    alert("Contrato generado. Revisa la consola para ver los datos completos.");
  }
  
  function handleClearForm() {
    setFormData({
      fechaVisita: new Date().toISOString().split("T")[0],
      numeroContrato: "",
      telefono: "",
      ine: "",
      calle: "",
      numExterior: "",
      numInterior: "",
      colonia: "",
      codigoPostal: "",
      mascotaNombre: "",
      mascotaSexo: "",
      mascotaEspecie: "",
      mascotaTamano: "",
      mascotaEsterilizado: "si",
      mascotaDescripcion: "",
      mascotaEstadoSalud: "",
    });
    setFirma(null);
    setErrors({}); // Limpia de los errores
  }

  // Función para impresión
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Estilos para impresión */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #printableArea, #printableArea * {
              visibility: visible;
            }
            #printableArea {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>
      <div id="printableArea" ref={formRef} className="w-full max-w-4xl mx-auto p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-md mt-8 font-poppins text-[#4b4b4b]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Formulario de adopción
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* --- SECCIÓN GENERAL DEL CONTRATO --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6 border-b pb-6">
            <Input requiredInfo="Fecha de visita" type="date" name="fechaVisita" value={formData.fechaVisita} readOnly={true} />
            <Input requiredInfo="Número de contrato" type="text" name="numeroContrato" placeholder="000-000-0000" value={formData.numeroContrato} onChange={handleChange} error={errors.numeroContrato} />
          </div>

          {/* --- DATOS DEL Adoptante --- */}
          <h3 className="text-xl font-semibold mb-4">Datos del Adoptante</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6 border-b pb-6">
            <Input requiredInfo="Nombre(s)" type="text" value={solicitante.nombre} readOnly />
            <Input requiredInfo="Apellido Paterno" type="text" value={solicitante.apellidoPaterno} readOnly />
            <Input requiredInfo="Apellido Materno" type="text" value={solicitante.apellidoMaterno} readOnly />
            <Input requiredInfo="Correo electrónico" type="email" value={solicitante.email} readOnly />
            <Input requiredInfo="Teléfono" type="tel" name="telefono" placeholder="Tu número de contacto" value={formData.telefono} onChange={handleChange} />
            <Input requiredInfo="INE" type="text" name="ine" placeholder="Clave de elector" value={formData.ine} onChange={handleChange} />
          </div>

          {/* --- DOMICILIO --- */}
          <h3 className="text-xl font-semibold mb-4">Domicilio</h3>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-4 mb-6 border-b pb-6">
            <div className="md:col-span-6"><Input requiredInfo="Calle" type="text" name="calle" placeholder="Av. Principal" value={formData.calle} onChange={handleChange} error={errors.calle} /></div>
            <div className="md:col-span-2"><Input requiredInfo="Número exterior" type="text" name="numExterior" placeholder="123" value={formData.numExterior} onChange={handleChange} /></div>
            <div className="md:col-span-2"><Input requiredInfo="Número interior (opcional)" type="text" name="numInterior" placeholder="A-101" value={formData.numInterior} onChange={handleChange} /></div>
            <div className="md:col-span-2"><Input requiredInfo="Código Postal" type="text" name="codigoPostal" placeholder="55123" value={formData.codigoPostal} onChange={handleChange} error={errors.codigoPostal} /></div>
            <div className="md:col-span-6"><Input requiredInfo="Colonia" type="text" name="colonia" placeholder="Centro" value={formData.colonia} onChange={handleChange} /></div>
          </div>
          
          {/* --- DATOS DE LA MASCOTA --- */}
          <h3 className="text-xl font-semibold mb-4">Datos de la mascota</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6 border-b pb-6">
              <Input requiredInfo="Nombre" name="mascotaNombre" type="text" placeholder="Nombre de la mascota" value={formData.mascotaNombre} onChange={handleChange} />
              <Input requiredInfo="Sexo" name="mascotaSexo" type="text" placeholder="Macho / Hembra" value={formData.mascotaSexo} onChange={handleChange} />
              <Input requiredInfo="Especie" name="mascotaEspecie" type="text" placeholder="Perro / Gato / Otro" value={formData.mascotaEspecie} onChange={handleChange} />
              <Input requiredInfo="Tamaño" name="mascotaTamano" type="text" placeholder="Pequeño / Mediano / Grande" value={formData.mascotaTamano} onChange={handleChange} />
              <div className="md:col-span-2"><label className="block text-base mb-1 font-medium">Descripción</label><textarea name="mascotaDescripcion" value={formData.mascotaDescripcion} onChange={handleChange} rows="3" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none" placeholder="Color, señas particulares, comportamiento, etc."></textarea></div>
              <div className="md:col-span-2"><label className="block text-base mb-1 font-medium">Estado de salud</label><textarea name="mascotaEstadoSalud" value={formData.mascotaEstadoSalud} onChange={handleChange} rows="3" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none" placeholder="Enfermedades conocidas, tratamientos, alergias..."></textarea></div>
              <div><label className="block text-base mb-1 font-medium">Esterilización</label><select name="mascotaEsterilizado" value={formData.mascotaEsterilizado} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"><option value="si">Sí</option><option value="no">No</option><option value="no aplica">No aplica (cachorro)</option></select></div>
          </div>

          {/* --- FIRMA --- */}
          {/* <div className="mb-8">
            <label className="block text-base mb-2 font-medium">Firma del adoptante</label>
            <MiFirma onSave={handleSaveFirma} />
            {firma && <div className="mt-2 text-green-600 font-semibold">✓ Firma guardada correctamente.</div>}
          </div> */}

          {/* ---SECCIÓN DE IMPRESIÓN --- */}
          <div className="text-center border-t pt-6 mt-6">
            <p className="mb-4 text-gray-700 font-semibold">
              Imprime este formato, fírmalo y entrégalo en nuestras oficinas.
            </p>
            <button type="button" onClick={handlePrint} className="no-print w-full sm:w-auto bg-[#A8C3A0] text-[#4b4b4b] font-bold px-8 py-3 rounded-lg hover:bg-[#99b391] transition duration-300">
              Imprimir PDF
            </button>
          </div>

          {/* Botones de acción originales (se ocultan al imprimir) */}
          <div className="no-print flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <button type="submit" className="w-full sm:w-auto bg-[#D88C66] text-[#FAF8F3] font-semibold px-8 py-3 rounded-lg hover:bg-[#c97f5c] transition duration-300">
              Generar contrato
            </button>
            <button type="button" onClick={handleClearForm} className="w-full sm:w-auto bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
              Limpiar formulario
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default FormContract;