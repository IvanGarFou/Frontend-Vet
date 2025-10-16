function Input({
  requiredInfo,
  type,
  accept,
  children,
  name,
  value,
  onChange,
  placeholder,
  readOnly = false,
  error,
}) {
  const readOnlyClasses = readOnly
    ? "bg-gray-100 cursor-not-allowed"
    : "bg-white";

  // Hover rojo ante error
  const errorClasses = error ? "border-red-500" : "border-gray-300";

  return (
    <div>
      <label className="block text-base mb-1 font-poppins text-[#4b4b4b] font-medium">
        {requiredInfo}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full border rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none ${readOnlyClasses} ${errorClasses}`}
        accept={accept}
      />
      {children}

      {/* Mensaje de Error */}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default Input;