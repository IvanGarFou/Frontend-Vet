const InputField = ({ label, type, error, ...rest }) => (
  <div className="mb-4">
    <input
      type={type}
      placeholder={label}
      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
      {...rest}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
export default InputField;