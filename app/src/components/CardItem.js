import react from 'react'
import styled from 'styled-components'

const  Card = styled.div`
    height: 70px;
    background-color: ${(props) => (props.color ? props.color : "#0070fb" )};
    padding: 0.8rem;
    margin: 1rem

`
const CardItem = ({color,children})=>{
    return(
        <>
    <Card color={color}>{children} </Card>

        </>
    )
}


export default CardItem