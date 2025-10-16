function Input({
  requiredInfo,
  type,
  accept,
  children,
  name,
  value,
  onChange,
  error,
}) {
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
        accept={accept}
        className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none appearance-none"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {children}
    </div>
  );
}

export default Input;
