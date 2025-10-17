import React from 'react';

function Footer() {
  return (
    // CAMBIO: Se usó "bg-primary" en lugar de "bg-pawmatch-orange"
    <footer className="bg-primary py-6 shadow-inner mt-8">
      <div className="container mx-auto text-center px-4">
        <div className="flex justify-center items-center mb-4">
          {/* CAMBIO: Se usó "text-text-main" */}
          <span className="text-xl font-bold text-text-main">PawMatch</span>
        </div>
        {/* CAMBIO: Se usó "text-text-main" */}
        <p className="text-text-main text-sm">
          © {new Date().getFullYear()} PawMatch. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;