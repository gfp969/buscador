import { useState, useMemo, useEffect } from "react";
import MarcarItem from "./MarcarItem";

export default function Resultados({items,itemsSeleccionados,consulta,resulCalculados}){
    const [resultados,setResultados]=useState([]);
    const filtroItems=useMemo(()=>encontrar(items,consulta),[items,consulta]);

    useEffect(()=>{
        resulCalculados(resultados);
    },[resultados])

    function encontrar(items,consulta){
        const res=items.filter(i=>{
            return i.title.toLowerCase().indexOf(consulta)>=0&& consulta.length>0; 
        });
        setResultados(res);
        return res;
    }

    return(
        <div>
            {consulta=!''?
            filtroItems.map(item=> <MarcarItem key={item.id} item={item} consulta={consulta} onClick={itemsSeleccionados} /> ):''}
        </div>
    )
}