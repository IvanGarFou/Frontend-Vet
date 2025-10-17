const GoogleButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 text-gray-700 font-medium hover:bg-gray-100 transition duration-200"
  >
    <img
      src="https://www.svgrepo.com/show/355037/google.svg"
      alt="Google"
      className="w-5 h-5 mr-3"
    />
    Continuar con Google
  </button>
);
export default GoogleButton;