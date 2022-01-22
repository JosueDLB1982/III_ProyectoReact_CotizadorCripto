import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Spinner from './components/Spinner'
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: lato, sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 20px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Personalizacion = styled.a`
  display: block;
  font-family: 'Lato', sans-serif;
  color: gray;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  margin-top: 20px;

  &:hover {
      color: greenyellow; 
  }
`

function App() {
  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      setCargando(true)
      setCotizacion({})

      const { moneda, criptomoneda } = monedas
      const cotizarCripto = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}` /* Esto hará que se consulte la API según las opciones que elija el usuario */
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCotizacion(resultado.DISPLAY[criptomoneda][moneda]) /* Para hacerlo dinámico usamos esta sintaxis, que nos permite inyectar las keys dinámicamente, esas las podemos ver en la estructura de la respuesta de la API */

        setCargando(false)
      }
      cotizarCripto()
    }
  }, [monedas])

  return (
    <Contenedor>

      <Imagen
        src={ImagenCripto}
        alt='imagen criptomonedas'
      />

      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Personalizacion href="https://github.com/JosueDLB1982" target="blanck">Josue Lopez - Developer Treinee</Personalizacion>
        <Formulario
          setMonedas={setMonedas}
        />

        {cargando && <Spinner />}
        {cotizacion.PRICE && <Cotizacion cotizacion={cotizacion} />}
      </div>

    </Contenedor>
  )
}

export default App
