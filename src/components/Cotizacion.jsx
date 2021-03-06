import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Img = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 25px;
    span {
        font-weight: 700;
    }
`

const Cotizacion = ({ cotizacion }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion
    return (
        <Contenedor>
            <Img
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Imagen Criptomoneda"
            />

            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación Últimas 24 Horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Cotizacion
