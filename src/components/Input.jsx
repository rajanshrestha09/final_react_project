import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  // console.log('Id: ', id)
  // console.log('Ref: ', ref)
  return (
    <div className="flex justify-center items-center">
      {label && <label htmlFor={id} className="text-gray-300">{label}</label>} 
      <input type={type} ref={ref} {...props} id={id} className={`${className} rounded-sm w-64 ms-2`} />
    </div>
  );
});

export default Input;
