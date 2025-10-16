import React from "react";
import About from "../components/home/about.jsx";
import Footer from "../components/home/footer.jsx";
import Menu from "../components/home/menu.jsx";
import Whatddo from "../components/home/whatddo.jsx";

import AdoptaMascota from '../components/home/AdoptaMascota'
import Donaciones from '../components/home/Donaciones'
import Mensaje from '../components/home/Mensaje'
import NavegationCards from '../components/home/NavegationCards'
import ContactUsCard from '../components/home/ContactUsCard'

function Home() {
    return (
        <>
            <Menu />
            <AdoptaMascota />
            <Donaciones />
            <Whatddo />
            <Mensaje />
            <div className='flex flex-wrap justify-evenly m-4'>
        <NavegationCards 
        text = 'ADOPCIÓN'
        image = 'https://images.pexels.com/photos/2759564/pexels-photo-2759564.jpeg'
        alternativeText = 'Perrito Beagle'
        />
        <NavegationCards 
        text = 'BLOG'
        image = 'https://images.pexels.com/photos/2759564/pexels-photo-2759564.jpeg'
        alternativeText = 'Casita para perro de paredes blancas y techo café'
        />
        <NavegationCards 
        text = 'INICIAR SESIÓN'
        image = 'https://images.pexels.com/photos/2759564/pexels-photo-2759564.jpeg'
        alternativeText = 'Galletas para perro'
        />
      </div>
            <About />
            <ContactUsCard />
            <Footer />
        </>
    )
}

export default Home;