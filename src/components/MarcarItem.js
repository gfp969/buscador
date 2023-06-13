import { useMemo } from "react";

export default function MarcarItem({item,consulta,onClick}){

    const {izq,cen,der}=useMemo(()=>obtenerPosicion
    (item,consulta),[item,consulta]);

    function obtenerPosicion(item,consulta){
        const indice=item.title.toLowerCase().indexOf(consulta);
        const izq=item.title.slice(0,indice);
        const der=item.title.slice(indice+consulta.length);
        const cen=item.title.slice(indice,indice+consulta.length);

        return {izq,cen,der};
    }

    return (
        <button>
            {izq} 
            <span style={{fontWeight:'bolder', backgroundColor:'yellow'}} >{cen}</span> 
            {der}
        </button>
    )
}