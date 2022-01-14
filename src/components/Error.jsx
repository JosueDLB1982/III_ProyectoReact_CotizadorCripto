import styled from "@emotion/styled"

const Mensaje = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({ children }) => {
    return (
        <Mensaje>
            {children}
        </Mensaje>
    )
}

export default Error
