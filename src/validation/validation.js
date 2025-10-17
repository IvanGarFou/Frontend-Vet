import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es obligatorio").min(3, "Mínimo 3 caracteres"),
  correo: Yup.string().required("El correo es obligatorio").email("Formato inválido"),
  edad: Yup.number().required("La edad es obligatoria").min(18, "Debes ser mayor de edad"),
  telefono: Yup.string().required("Teléfono obligatorio").matches(/^[0-9]{10}$/, "Debe tener 10 dígitos"),
  aceptaTerminos: Yup.boolean().oneOf([true], "Debes aceptar los términos"),
});
