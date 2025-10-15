// import './App.css'
// import Home from './pages/home.jsx'

// function App() {

//   return (
//     <>
//       <div className="min-h-screen flex flex-col">
//         <Home />
//       </div>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormTemplate from "./pages/FormTemplate";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormTemplate />} />
        <Route path="/form/datos-de-vivienda" element={<FormTemplate />} />
        <Route path="/form/contrato" element={<FormTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;