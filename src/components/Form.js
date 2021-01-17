import React from "react";
import Input from "./Input";

function Form({ search }) {
    return (
        <form className="text-center">
            <Input type="text" value="Search for a Movie!" />
            <button onClick={search}>search</button>
        </form>
    )
}

export default Form;