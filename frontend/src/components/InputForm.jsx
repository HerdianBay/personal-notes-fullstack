export default function InputForm({ formName, type, value, handleChange }) {
  return (
    <div>
      <label htmlFor={formName} className="text-2xl font-light">
        {formName}
      </label>
      <input
        type={type}
        name={formName}
        id={formName}
        value={value}
        onChange={handleChange}
        className="w-full border-2 text-lg rounded-lg mt-2 mb-4 p-2 leading-2.5"
      />
    </div>
  );
}
