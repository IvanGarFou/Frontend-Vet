import { Route, Routes } from "react-router-dom";
import FormTemplate from "./pages/FormTemplate";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormTemplate />} />
        <Route path="/form/datos-de-vivienda" element={<FormTemplate />} />
        <Route path="/form/contrato" element={<FormTemplate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
}
export default AppRoutes;