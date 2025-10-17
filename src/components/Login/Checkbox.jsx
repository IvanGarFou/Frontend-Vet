const Checkbox = ({ label, error, ...rest }) => (
  <div className="flex items-center mb-2">
    <input type="checkbox" className="mr-2" {...rest} />
    <span>{label}</span>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
export default Checkbox;