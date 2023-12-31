import React, { useId } from "react";

function Select({ options = [], label, className = "", ...porps }, ref) {
  const id = useId();
  return (
    <div className="flex my-2 justify-center items-center">
      {label && <label htmlFor={id} className="me-2 text-gray-300">{label}</label>}
      <select id={id} ref={ref} className={`${className}`} {...porps}>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select); //Another way to use forwardRef()

