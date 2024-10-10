import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact' 
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
    const [fact,setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    
    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res=>res.json())
        .then(data=> {
            const {fact} = data
            setFact(data.fact)
            const firstWord = fact.split(' ')[0] 
            //el token en este caso ' ' es lo que separa y el primer valor del array [0]
            

            fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const {url} = response
                const imageUrl = url; 
            
            }
                )
        })
    },[])
    
    return(
        <main>
            <h1>App</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first word for ${fact}`}/>}
        </main>
        
    )
}