function About() {
    return (
        <section className="bg-[#F2D6C1] text-black rounded-lg shadow-md m-4">
            {/* The card */}
            <div className="w-full h-full flex shadow-lg rounded-lg overflow-hidden">
                {/* Left side - Image */}
                <div className="w-1/2 h-full">
                    <img
                        src="../src/assets/dog.jpg"
                        alt="Card visual"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right side - Text */}
                <div className="w-1/2 h-full p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4">Lorem ipsum dolor sit.</h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla labore ad distinctio porro!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;