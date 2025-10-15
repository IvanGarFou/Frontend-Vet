import { useState } from "react";
import ButtonForm from "./ButtonForm";
import Input from "./Input";

function FormPersonalData() {
  // VALIDACIONES
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    fecha: "",
    ciudad: "",
    cp: "",
    direccion: "",
    ine: null,
  });

  // Estado de errores
  const [errors, setErrors] = useState({});

  // Función que se ejecuta al escribir en un campo
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Validaciones básicas
  const validate = () => {
    const newErrors = {};

    // Nombre: solo letras y espacios
    if (!formData.name?.trim()) {
      newErrors.name = "El nombre es obligatorio";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(formData.name?.trim())) {
      newErrors.name =
        "Ingresa un nombre válido (solo letras, mínimo 3 caracteres)";
    }

    // Correo electrónico
    if (!formData.email?.trim()) {
      newErrors.email = "El correo es obligatorio";
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email?.trim())
    ) {
      newErrors.email = "Correo electrónico no válido";
    }

    // Teléfono: debe tener 10 dígitos
    if (!formData.number) {
      newErrors.number = "El número es obligatorio";
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = "El número debe tener 10 dígitos";
    }

    // Fecha de nacimiento
    if (!formData.date) {
      newErrors.date = "Selecciona una fecha de nacimiento";
    }

    // Ciudad
    if (!formData.city) {
      newErrors.city = "Selecciona una ciudad";
    }

    // Código postal
    if (!formData.cp) {
      newErrors.cp = "El código postal es obligatorio";
    } else if (!/^\d{5}$/.test(formData.cp)) {
      newErrors.cp = "El código postal debe tener 5 dígitos";
    }

    // Dirección
    if (!formData.address?.trim()) {
      newErrors.address = "La dirección es obligatoria";
    } else if (formData.address?.trim().length < 5) {
      newErrors.address = "La dirección debe tener al menos 5 caracteres";
    }

    // Archivo INE (PDF)
    if (!formData.ine) {
      newErrors.ine = "Debes subir tu INE en formato PDF";
    } else if (formData.ine.type !== "application/pdf") {
      newErrors.ine = "El archivo debe ser un PDF";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Formulario enviado correctamente ✅");
      console.log("Datos válidos:", formData);
    } else {
      alert("Por favor, corrige los errores antes de continuar ❌");
    }
  };

  console.log(formData);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-2 border-[#A8C3A0]  rounded-xl  mt-8 p-6 max-w-md w-full text-left"
    >
      <h2 className="text-lg font-semibold text-center mb-4 text-[#4b4b4b]">
        Datos Personales
      </h2>

      <div className="space-y-4">
        {/* Nombre */}
        <div>
          <Input
            requiredInfo="Nombre Completo *"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
        </div>
        {/* Correo */}
        <Input
          requiredInfo="Correo Electrónico *"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* Teléfono y fecha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            requiredInfo="Número Telefónico *"
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            error={errors.number}
          />
          <Input
            requiredInfo="Fecha de nacimiento *"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            error={errors.date}
          />
        </div>

        {/* Ciudad y CP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
              Ciudad *
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Selecciona tu estado</option>
              <option value="ags">Aguascalientes</option>
              <option value="bc">Baja California</option>
              <option value="bcs">Baja California Sur</option>
              <option value="camp">Campeche</option>
              <option value="chis">Chiapas</option>
              <option value="chih">Chihuahua</option>
              <option value="cdmx">Ciudad de México</option>
              <option value="coah">Coahuila</option>
              <option value="col">Colima</option>
              <option value="com">Durango</option>
              <option value="edomex">Estado de México</option>
              <option value="gto">Guanajuato</option>
              <option value="gro">Guerrero</option>
              <option value="hgo">Hidalgo</option>
              <option value="jal">Jalisco</option>
              <option value="mich">Michoacán</option>
              <option value="mor">Morelos</option>
              <option value="nay">Nayarit</option>
              <option value="nl">Nuevo León</option>
              <option value="oax">Oaxaca</option>
              <option value="pue">Puebla</option>
              <option value="qro">Querétaro</option>
              <option value="qroo">Quintana Roo</option>
              <option value="slp">San Luis Potosí</option>
              <option value="sin">Sinaloa</option>
              <option value="son">Sonora</option>
              <option value="tab">Tabasco</option>
              <option value="tamps">Tamaulipas</option>
              <option value="tlax">Tlaxcala</option>
              <option value="ver">Veracruz</option>
              <option value="yuc">Yucatán</option>
              <option value="zac">Zacatecas</option>
            </select>
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>
          <Input
            requiredInfo="Código Postal *"
            type="number"
            name="cp"
            value={formData.cp}
            onChange={handleChange}
            error={errors.cp}
          />
        </div>

        {/* Dirección */}
        <Input
          requiredInfo="Dirección *"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={errors.address}
        />

        {/* INE */}
        <div>
          <Input
            requiredInfo="INE (Agrega tu foto en PDF) *"
            type="file"
            accept=".pdf"
            name="ine"
            onChange={handleChange}
            error={errors.ine}
          >
            <ButtonForm style="actionGreen">Agregar</ButtonForm>
          </Input>
        </div>
      </div>

      {/* SUBMIT FORMULARIO */}
      <div className="flex flex-row items-center mt-8 space-y-4 justify-center w-full">
        <ButtonForm style="actionOrange" type="submit">
          Siguiente
        </ButtonForm>
        <img
          src="#TOBEDEFINED"
          alt="Paw"
          className="w-20 sm:w-44 sm:h-44 object-contain m-4  sm:m-6 rotate-45"
        />
      </div>
    </form>
  );
}

export default FormPersonalData;
