import './App.css'
import { useCatImage } from "./hooks/useCatImage.js"
import { useCatFact } from "./hooks/useCatFact.js"



export function App() {
    // const [hecho, setHecho] = useState(null)
    const {fact, refreshFact} = useCatFact()
    const {imageUrl} = useCatImage({fact})
      

 //Fetch con async await
    // useEffect( () => 
    //     {
    //         const fetchFact = async () => {
    //             const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    //             if(!res.ok) {
    //                 throw new Error('error en el segundo fetching')
    //             }
    //             const dato = await res.json();
    //             const { fact } = dato;
    //             setHecho(fact);
                
    //         }
    //         fetchFact();
    //     },[])

    const handleClick = async ()=>{
        refreshFact()
    }    
    
    return (
        <main>
        <h1>Prueba técnica Gatos</h1>
        <button onClick={handleClick}>Get new fact</button>
        {( fact && <p>{fact}</p>)}
        {/* {( <p>{hecho}</p>)} */}
        
        {( imageUrl && <img src={imageUrl} alt="Gato con las tres primeras palabras del hecho"/>)}
        </main>
    )
}


