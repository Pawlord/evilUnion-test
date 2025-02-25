import { styled } from "@linaria/react"

const ContainerLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px 6px;
    max-width: 470px;
`

export default function PockemonsLeft({ children }) {
    return (
        <>
            <ContainerLeft >
                <ButtonsContainer>
                    {children}
                </ButtonsContainer>
            </ContainerLeft>
        </>

    )
}