import { useState } from "react"
import Resultados from "./Resultados";

export default function BarraBusqueda({items,itemsSeleccionados}){
    const [consulta,setConsulta]=useState("");
    const [resultados,setResultados]=useState([]);

    function handleChange(e){
        const value=e.target.value;
        setConsulta(value);
    }

    function handleResults(items){
        setResultados(items);
    }

    return(
        <div>
            {resultados&&<div>{resultados.length}Results</div>}
            <input type="text" onChange={handleChange} value={consulta}/>
            <Resultados 
            items={items}
            itemsSeleccionados={()=>{}}
            consulta={consulta}
            resulCalculados={handleResults} />
        </div>
    )
}