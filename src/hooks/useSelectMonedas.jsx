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

const useSelectMonedas = (label, opciones) => { /* Coloco como primer parémetro el label */
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label> {/* Usando {label} injecto el parámetro cuyo valor será el que asignamos en en el formulario */}
            <Select name="" id="">
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

    return [SelectMonedas]
}
export default useSelectMonedas
