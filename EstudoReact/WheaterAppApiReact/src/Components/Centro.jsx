import { getWheater } from "../Hooks/GetWheater"
import { useEffect, useState } from "react";
function Centro() {
    const { data, isLoading, error } = getWheater();

    console.log(error)
  


    return (
        <div className="container p-5 bg-dark">
            {error ? (
                <span className="text-light">Error</span>
            ) : (
                <span className="text-light">Certo</span>
            )}

        </div>

    )
}

export default Centro