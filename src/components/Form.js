import React from "react";
import Input from "./Input";

function Form({ search, handleInputChange }) {
    return (
        <form className="text-center">
            <Input handleInputChange={handleInputChange} type="text" value="Search for a Movie!" />
        </form>
    )
}

export default Form;