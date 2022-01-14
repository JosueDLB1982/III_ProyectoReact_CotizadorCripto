import { useState } from "react" /* La principal ventaja de crear un custon hook es el acceso a todas las herramientas de React */
import styled from "@emotion/styled"

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`

const useSelectMonedasOCriptos = (label, opciones) => { /* Coloco como primer parémetro el label y el segundo las opciones que vienen del archivo monedas */
    const [state, setState] = useState('')

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label> {/* Usando {label} injecto el parámetro cuyo valor será el que asignamos en en el formulario */}
            <Select
                value={state} /* El value será el state que contenga el componente, de ese modo se podrá reutilizar en cualquier useState */
                onChange={e => setState(e.target.value)}
            >
                <option value="">Seleccione</option>

                {opciones.map(opcion => ( /* Mapeando el arreglo monedas construyo el select */
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </Select>
        </>
    )

    return [state, SelectMonedas] /* retornar el state nos permitira usarlo en el <Formulario/> */
}
export default useSelectMonedasOCriptos
