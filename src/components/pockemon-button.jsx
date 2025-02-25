import { styled } from "@linaria/react"

const Button = styled.button`
    border: none;
    outline: none;
    background-color: #1986ec;
    color: #fff;
    padding: 20px;

    font-size: 20px;
    font-family: Raleway;

    border-radius: 44px;
    transition: background-color .3s;

    &:hover{
        cursor: pointer;
        background-color:rgb(91, 176, 255); 
    }
`

export default function PockemonButton({ pockemonName, url, handleClick }) {
    return (
        <Button onClick={() => handleClick(url)}>{pockemonName}</Button>
    )
}