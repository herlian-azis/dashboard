import React from 'react'
import styled from "styled-components";
import CardItem from '../components/CardItem'
import Calender from '../components/Calender'


const Wrap = styled.div`
width: auto;
margin-left: 16rem;
position: relative;
padding: 0 4rem;
`;
const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.col ? props.col : "1")},
    1fr
  );
  grid-gap: 10px;
`;

const Title = styled.div`
border-bottom: 1px solid grey
`
const TitleWrap = styled.div`
display: flex;
justify-content: space-between;

`

const P = styled.p`
margin: 2px 1px;
font-size: 18px
`
const H1 = styled.h1`
margin: 2px 1px;
`
const Dashboard = () => {


    return (
        <>
            <Wrap>
                
                <TitleWrap>
                    <p>

                        Dashboard
                    </p>
                    <Calender />
                </TitleWrap>
                <Title />
                <Column col="3">

                    <CardItem >s</CardItem>
                    <CardItem>d</CardItem>
                    <CardItem color="#FFCB2B" >
                            <H1>
                                522
                                </H1>
                        <P>
                            Umkm Tidak Aktif</P></CardItem>
                    <CardItem></CardItem>
                    <CardItem>s</CardItem>
                    <CardItem color="#FFCB2B">d</CardItem>
                    <CardItem>dasdas</CardItem>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                </Column>
            </Wrap>
        </>
    )
}

export default Dashboard
