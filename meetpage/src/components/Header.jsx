import React from 'react';

function Header() {
  return (
    // CAMBIO: Se usó "bg-primary" en lugar de "bg-pawmatch-orange"
    <header className="bg-primary py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          {/* CAMBIO: Se usó "text-text-main" */}
          <span className="text-xl font-bold text-text-main">PawMatch</span>
        </div>

        <nav>
          {/* CAMBIO: Se usó "text-text-main" */}
          <ul className="flex space-x-6 text-lg font-semibold text-text-main">
            <li>
              {/* CAMBIO: Se usó "hover:text-accent" */}
              <a href="#" className="hover:text-accent transition-colors">
                Adopciones
              </a>
            </li>
            <li>
              {/* CAMBIO: Se usó "hover:text-accent" */}
              <a href="#" className="hover:text-accent transition-colors">
                Tienda
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;