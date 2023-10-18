import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  // console.log('Id: ', id)
  // console.log('Ref: ', ref)
  return (
    <div>
      {label && <label>{label}</label>} 
      <input type={type} ref={ref} {...props} id={id} className={className}/>
    </div>
  );
});

export default Input;
