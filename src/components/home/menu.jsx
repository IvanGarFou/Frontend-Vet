import { User, Search } from "lucide-react";

function Menu() {
    return (
        <nav className="flex items-center justify-between bg-[#F2D6C1] px-6 py-3 shadow">
            {/* Left side - Navigation links */}
            <ul className="flex items-center space-x-6">
                <li><a href="#" className="hover:underline"><strong>PawMatch</strong></a></li>
                <li><a href="#" className="hover:underline">Adopt</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>

            {/* Middle - Search bar */}
            <div className="flex items-center flex-1 mx-6">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />

            </div>

            {/* Right side - Login icon */}
            <div className="flex items-center">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <User className="w-6 h-6 text-gray-700" />
                </button>
            </div>
        </nav>
    )
}

export default Menu;
