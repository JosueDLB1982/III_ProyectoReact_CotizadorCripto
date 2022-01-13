import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = () => {
    const [SelectMonedas] = useSelectMonedas('Elije tu Moneda') /* Le paso como valor inicial el select  */
    const [SelectCriptomonedas] = useSelectMonedas('Elije tu Criptomoneda')

    return (
        <form>
            <SelectMonedas/>

            <SelectCriptomonedas/>

            <InputSubmit
                type="submit"
                value="cotizar"
            />
        </form>
    )
}

export default Formulario
