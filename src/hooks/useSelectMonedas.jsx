import styled from "@emotion/styled"

const Label = styled.label`
    color: #FFF;
`

const useSelectMonedas = (label) => { /* Coloco como primer parémetro el label */
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label> {/* Usando {label} injecto el parámetro cuyo valor será el que asignamos en en el formulario */}
        </>
    )

    return [SelectMonedas]
}
export default useSelectMonedas
