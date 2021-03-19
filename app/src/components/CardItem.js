import react from 'react'
import styled from 'styled-components'

const  Card = styled.div`
    height: 100px;
    background-color: ${(props) => (props.color ? props.color : "#0070fb" )};
    padding: 0.8rem;
    margin:  ${(props) => (props.margin ? props.margin : "10px" )}

`
const Container = styled.div`
margin: 0px 1px;
`
const CardItem = ({color,children})=>{
    return(
        <>
    <Card color={color}> 
    <Container>

     {children} 
    </Container>
     </Card>

        </>
    )
}


export default CardItem