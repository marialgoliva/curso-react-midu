import { useState, useEffect } from "react";

export const Component = () => {
    const [value,setValue] = useState(false)

    useEffect(()=>{
        console.log('El código a ejecutar')
    },[])
}

