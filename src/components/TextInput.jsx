import React from "react";

const TextInput = ({
  label,
  name,
  id,
  value,
  handleChange,
  touched,
  error,
  type = "text",
}) => {
  return (
    <div className="relative z-0 w-full">
      <input
        type={type}
        id={id}
        name={name}
        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#08D76F] focus:outline-none focus:ring-0 focus:border-[#08D76F] peer"
        placeholder=" "
        value={value}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className="absolute text-sm lg:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#08D76F] peer-focus:dark:text-[#08D76F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
      <p className="text-red-400 text-xs mt-1">{touched && error && error}</p>
    </div>
  );
};

export default TextInput;
