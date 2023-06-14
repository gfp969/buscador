import { useState } from "react"
import Resultados from "./Resultados";
import './style.css';
 
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
        <div className="container">
            <input type="text" onChange={handleChange} value={consulta} placeholder="Search" className="form-control rounded"/>
            <Resultados 
                items={items}
                itemsSeleccionados={itemsSeleccionados}
                consulta={consulta}
                resulCalculados={handleResults} />
            {resultados&&<div>{resultados.length}Results</div>}
        </div>
    )
}