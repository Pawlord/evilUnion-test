import { styled } from "@linaria/react"

const ContainerRight = styled.div`
    width: 50%;
    height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 44px;

    background-color: #000;
    padding: 44px 44px 16px 44px;
    color: #A0A0A0;
`

export default function PockemonsRight({ children }) {
    return (
        <>
            <ContainerRight >
                {children}
            </ContainerRight>
        </>

    )
}