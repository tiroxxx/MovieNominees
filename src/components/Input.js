import React from "react";

function Input({ type, value, handleInputChange }) {
    return (
        <input onChange={handleInputChange} type={type} placeholder={value} />
    )
}

export default Input;