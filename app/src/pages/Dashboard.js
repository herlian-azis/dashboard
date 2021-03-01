import React from 'react'
import styled from "styled-components";
import CardItem from '../components/CardItem'


const Container = styled.div`
width: auto;
margin-left: 16rem;
position: relative;
padding: 0 4rem;
`;
const Col = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.col ? props.col : "1")},
    1fr
  );
  grid-gap: 10px;
`;
const Dashboard = () => {


    return (
        <Container>
            <Col col="3">

                <CardItem >s</CardItem>
                <CardItem>d</CardItem>
                <CardItem color="#FFCB2B" >
                    <h4> 522
                </h4></CardItem>
                <CardItem></CardItem>
                <CardItem>s</CardItem>
                <CardItem color="#FFCB2B">d</CardItem>
                <CardItem>dasdas</CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
            </Col>
        </Container>
    )
}

export default Dashboard
