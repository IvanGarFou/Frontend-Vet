import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validation/registerSchema";
import InputField from "../components/InputField";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import GoogleButton from "../components/GoogleButton";
import  { Menu } from "../components/home/menu";

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = (data) => console.log("Datos enviados:", data);
  const handleGoogleLogin = () => console.log("Google Sign-In");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Menu />
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Registro PawMatch</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField label="Nombre Completo*" type="text" {...register("nombre")} error={errors.nombre?.message} />
          <InputField label="Correo Electrónico*" type="email" {...register("correo")} error={errors.correo?.message} />
          <InputField label="Edad*" type="number" {...register("edad")} error={errors.edad?.message} />
          <InputField label="Teléfono*" type="tel" {...register("telefono")} error={errors.telefono?.message} />

          <Checkbox label="Acepto términos y condiciones" {...register("aceptaTerminos")} error={errors.aceptaTerminos?.message} />

          <Button text="Registrarme" />
        </form>

        <div className="mt-6 text-center">
          <p className="mb-2">O inicia sesión con:</p>
          <GoogleButton onClick={handleGoogleLogin} />
        </div>
      </div>
    </div>
  );
}
