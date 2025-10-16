import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonForm from "../components/Form/ButtonForm";
import FormPersonalData from "../components/Form/FormPersonalData";
import FormHousingData from "../components/Form/FormHousingData";
import FormContract from "../components/Form/FormContract";

function FormTemplate() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const currentPath = location.pathname;

  useEffect(() => {
    setActiveForm("personal");
  }, []);

  const [activeForm, setActiveForm] = useState("personal");

  // Detecta la ruta actual y ajusta el formulario mostrado
  useEffect(() => {
    if (currentPath === "/form/datos-de-vivienda") {
      setActiveForm("housing");
    } else if (currentPath === "/form/contrato") {
      setActiveForm("contract");
    } else if (currentPath === "/form") {
      setActiveForm("personal");
    }
  }, [currentPath]);

  // Función para cambiar de formulario y ruta
  const handleFormChange = (formType) => {
    setActiveForm(formType);
    if (formType === "personal") navigate("/form");
    if (formType === "housing") navigate("/form/datos-de-vivienda");
    if (formType === "contract") navigate("/form/contrato");
  };

  return (
    <div className="flex flex-col items-center py-10 sm:py-16 text-center px-4 bg-[#faf8f3]">
      {/* HEADER */}
      {activeForm === "personal" && (
        <div className="flex flex-col sm:flex-row items-center justify-center bg-[#D88C66] text-[#FAF8F3] rounded-xl p-6 max-w-3xl w-full">
          <img
            src="#TOBEDEFINED" // Coloca aquí la ruta de tu ilustración
            alt="Pet adoption"
            className="w-48 sm:w-64  object-contain mb-4 sm:mb-0 sm:mx-6"
          />
          <div className="px-8 sm:px-14">
            <h1 className="text-xl sm:text-3xl font-baloo font-extrabold">
              Completa el formulario y adopta a tu compañero de vida
            </h1>
          </div>
        </div>
      )}

      {/* SUBTÍTULO */}
      {(activeForm === "personal" || activeForm === "housing") && (
        <p className="mt-4 text-[#ee2337] font-fredoka font-semibold text-xl">
          Su nueva vida contigo, estás a un formulario de distancia
        </p>
      )}

      {/* BARRA DE PROGRESO */}
      <div className="flex justify-center items-center gap-2 mt-6 max-w-3xl w-full border-2 border-solid border-black rounded-lg">
        <ButtonForm
          style="selectForm"
          onClick={() => handleFormChange("personal")}
          active={activeForm === "personal"}
        >
          Datos personales
        </ButtonForm>
        <ButtonForm
          style="selectForm"
          onClick={() => handleFormChange("housing")}
          active={activeForm === "housing"}
        >
          Datos de vivienda
        </ButtonForm>
        <ButtonForm
          style="selectForm"
          onClick={() => handleFormChange("contract")}
          active={activeForm === "contract"}
        >
          Contrato
        </ButtonForm>
      </div>

      {/* FORMULARIO */}
      {activeForm === "personal" && <FormPersonalData />}
      {activeForm === "housing" && <FormHousingData />}
      {activeForm === "contract" && <FormContract />}
    </div>
  );
}

export default FormTemplate;