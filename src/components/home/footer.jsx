import { Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-[#F2D6C1] text-black ">
            <div className="w-full h-full flex">
                <div className="w-2/4 h-full p-12 flex flex-col ">
                    <ul className="items-left space-y-2 text-left">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                        <li><a href="#" className="hover:underline">Policies</a></li>
                        <li><a href="#" className="hover:underline">Tips</a></li>
                    </ul>
                </div>
                <div className="w-2/4  h-full p-12 flex flex-col">
                    <p>Put below your email to receive more info</p>
                    <div className="mt-2 flex items-center">
                        <input
                            type="text"
                            placeholder="Your email"
                            className="flex-1 min-w-0 border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                        <button className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 shrink-0">Subscribe</button>
                    </div>
                    <div className="mt-6 text-center bg-black p-1 rounded-full text-white">
                        <p className="mt-4">Follow us on social media</p>
                    </div>
                    <div className="mt-4 flex justify-center">

                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="p-2 hover:bg-gray-100 rounded-full"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6 text-blue-600" />
                            </a>
                            <a
                                href="#"
                                className="p-2 hover:bg-gray-100 rounded-full"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-6 h-6 text-blue-400" />
                            </a>
                            <a
                                href="#"
                                className="p-2 hover:bg-gray-100 rounded-full"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6 text-pink-500" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <p className="text-center">
                    &copy; {new Date().getFullYear()} PawMatch. All rights reserved.
                </p>
                <p className="text-center text-sm mt-2">
                    Made with ❤️ for animal lovers.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
