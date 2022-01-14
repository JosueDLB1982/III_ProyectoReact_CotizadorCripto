import styled from "@emotion/styled"

const Label = styled.label`
    color: #FFF;
`

const useSelectMonedas = (label, opciones) => { /* Coloco como primer parémetro el label */
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label> {/* Usando {label} injecto el parámetro cuyo valor será el que asignamos en en el formulario */}
            <select name="" id="">
                <option value="">Seleccione</option>

                {opciones.map(opcion => ( /* Mapeando el arreglo monedas construyo el select */
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </select>
        </>
    )

    return [SelectMonedas]
}
export default useSelectMonedas
