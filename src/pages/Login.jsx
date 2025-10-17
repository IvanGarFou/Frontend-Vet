import GoogleButton from "../components/GoogleButton";
import Menu from "../components/home/menu";

export default function Login() {
  const handleGoogleLogin = () => console.log("Google Sign-In");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <Menu />
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Inicia sesión</h1>
        <GoogleButton onClick={handleGoogleLogin} />
      </div>
    </div>
  );
}