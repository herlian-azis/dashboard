import React, { createRef } from 'react'
import CardItem from '../components/CardItem'
import Calender from '../components/Calender'
import styled from "styled-components";
import Pdf from "react-to-pdf";
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


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
  grid-gap: 5px;
`;

const Title = styled.div`
border-bottom: 1px solid grey
`
const TitleWrap = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: nowrap;

`

const P = styled.p`
margin: 0px 0px;
font-size: 18px
`
const Label = styled.p`
margin: 0px 0px;
font-size: 13px
`
const H1 = styled.h1`
margin: -5px 0px;
font-size: 23px
`

const FlexRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const AnalisaBisnis = () => {
  const ref = createRef();
  const options = {
    orientation: 'landscape',
    
};
  return (
    <div>
      <Wrap>
        <TitleWrap>
          <P>
            Analisa Bisnis
                    </P>
          <FlexRow>
            <Calender />
            <Pdf options={options} targetRef={ref} filename="code-example.pdf" x={15} scale={0.9}>
              {({ toPdf }) => <Button icon={<DownloadOutlined />} onClick={toPdf} style={{ background: "#FFCB2B", color: "black", borderColor: "#FFCB2B" }} >
                export to PDF
                   </Button>}
            </Pdf>
          </FlexRow>
        </TitleWrap>
        <Title />
        <Column col="3" ref={ref} >
          <CardItem margin='10px' color="#DDE4EB" >
          <Label>
              Info Usaha
            </Label>
            <H1> Kelontong
                </H1>
            <P>
              Zeus</P>
          </CardItem>
          <CardItem margin='10px' color="#DDE4EB">  <Label>
              Kontak
            </Label>
            <H1> 08123457889
                </H1>
            <P>
              asus@gmail.com</P>
              </CardItem>
          <CardItem margin='10px' color="#DDE4EB">
            <Label>
              Jenis Usaha
            </Label>
            <H1> Jasa
                </H1>
            <P>
              Bandung</P>
              </CardItem>
          <CardItem margin='10px'></CardItem>
          <CardItem margin='10px'>s</CardItem>
          <CardItem margin='10px'>d</CardItem>
          <CardItem margin='10px'>dasdas</CardItem>
          <CardItem margin='10px'></CardItem>
          <CardItem margin='10px'></CardItem>
          <CardItem margin='10px'></CardItem>
          <CardItem margin='10px'></CardItem>
          <CardItem margin='10px' color="#FFCB2B"></CardItem>
          <CardItem margin='10px'></CardItem>
          <CardItem margin='10px'></CardItem>
          <CardItem margin='10px' color="#FFCB2B"></CardItem>

        </Column>
      </Wrap>
    </div>
  )
}

export default AnalisaBisnis
