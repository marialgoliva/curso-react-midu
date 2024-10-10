import { useEffect, useState } from "react"
//Dentro de un custom hook podemos llamar a otros hooks dentro de una función no
export function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState(null)
    useEffect(()=>{
        if (!fact) return
        const firstWord = fact.split(' ', 3).join(' ')
        setImageUrl(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
    },[fact])

    return {imageUrl}
}