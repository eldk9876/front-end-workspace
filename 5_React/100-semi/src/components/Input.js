const Input = ({ label, type, placeholder, value, onChange, onClick }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border focus:outline-none"
        onClick={onClick}
      />
    </div>
  );
};
export default Input;
