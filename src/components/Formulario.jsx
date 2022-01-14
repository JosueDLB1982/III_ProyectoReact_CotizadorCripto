import { useEffect } from "react"
import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 30px;
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
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas) /* Las opciones vendrán del arreglo de objetos monedas */

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado.Data)
        }
        consultarAPI()
    }, []) /* Al no pasar dependencia se ejecuta una sola vez */

    return (
        <form>
            <SelectMonedas/>

            <InputSubmit
                type="submit"
                value="cotizar"
            />
        </form>
    )
}

export default Formulario
