function Whatddo() {
    return (
        <section className="bg-[#A8C3A0] text-black rounded-lg shadow-md m-4">
            {/* The card */}
            <div className="w-full h-full flex shadow-lg rounded-lg overflow-hidden">
                {/* Left side - Text */}
                <div className="w-1/2 h-full p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4">Lorem ipsum dolor sit amet.</h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla nobis impedit at tenetur.
                    </p>
                </div>
                {/* Left side - Image */}
                <div className="w-1/2 h-full">
                    <img
                        src="../src/assets/dog.jpg"
                        alt="Card visual"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Whatddo;
