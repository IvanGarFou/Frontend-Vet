import React from "react";
import About from "../components/home/about.jsx";
import Footer from "../components/home/footer.jsx";
import Menu from "../components/home/menu.jsx";
import Whatddo from "../components/home/whatddo.jsx";

function Home() {
    return (
        <>
            <Menu />
            <Whatddo />
            <About />
            <Footer />
        </>
    )
}

export default Home;