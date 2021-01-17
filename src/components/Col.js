import React from "react"

function Col({ size, children }) {
    return (
        <div className={size}>
            {children}
        </div>
    )
}

export default Col;