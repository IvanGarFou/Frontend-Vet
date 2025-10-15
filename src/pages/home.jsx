import React from "react";
import About from "../components/home/about.jsx";
import Footer from "../components/home/footer.jsx";
import Menu from "../components/home/menu.jsx";
import Whatddo from "../components/home/whatddo.jsx";

function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Menu />
            <Whatddo />
            <About />
            <Footer />
        </div>
    )
}

export default Home;