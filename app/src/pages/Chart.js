
import { Option } from 'antd/lib/mentions';
import React, { useState, useEffect, useRef } from 'react';
import { Line, defaults } from 'react-chartjs-2';
import styled from "styled-components";
defaults.global.legend.align = 'start'
// defaults.global.legend.labels.boxWidth = 20

const labelState = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasetState = [{
    label: 'Sales',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointStyle: 'cirlce',
    pointHoverRadius: 5,
    pointRadius: 4,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40],

}];

function Graph() {
    const [labels] = useState(labelState);
    const [datasets, setDatasets] = useState(datasetState);
    const interval = useRef();

    useEffect(() => {
        interval.current = setInterval(() => {
            const oldDataSet = datasets[0];
            const newData = [];

            for (let x = 0; x < labels.length; x += 1) {
                newData.push(Math.floor(Math.random() * 100));
            }

            const newDataSet = {
                ...oldDataSet
            };

            newDataSet.data = newData;

            setDatasets([newDataSet]);
        }, 5000);
        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return (
        <Line data={{ labels, datasets }} />
    );
}

const Wrap = styled.div`
width: auto;
position: relative;
padding: 0 4rem;
`;

const Box = styled.div`
width: 70rem;
border: 1px solid;
margin-right: 10px;
padding: 20px 10px 20px 30px
`
const Box2 = styled.div`
width: 35rem;
border: 1px solid;
margin-right: 10px;
padding: 10px 10px 10px 10px

`
const FlexWrap = styled.div`
display: flex;
`

const Table = styled.table`
&&& {
    table,
    th,
    td {
      border-collapse: collapse;
    }
    th,
    td,
    tr {
      padding: 20px;

    }
    th {
      text-align: left;

    }
    table {
      width: 100%;
    }
  }
`
const WrapUl = styled.div`
display: flex;
justify-content: flex-start
`
const UlStyle = styled.ul`
list-style-type: none;

li:before { 
    background-color: #14CCBB;
    border-radius: 50%;
    content: "";
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 2px;
    margin-top: 25px;
    height: 5px;
    width: 5px;
  }
`
const P1 = styled.p`
margin: 0px 0px 0px 0px
`
const P = styled.p`
margin: 7px 0px 0px 14px
`
const H3 = styled.h3`
margin-left: 20px
`
const H1 = styled.h1`
margin: 0px
`


const DataVoucher = () => {
    return (
        <>
            <Wrap>
                DataVoucher
            <FlexWrap>
                    <Box>

                        <H1>Sales / Omset Overview</H1>
                        <P1>Grafik pergerakan omset usaha</P1>
                        <Graph />
                    </Box>
                    <Box2>
                        <UlStyle>
                            <WrapUl>
                                <div>
                                    <li>
                                        Total Sales
                               </li>
                                    <P>
                                        IDR 95.000.000
                               </P>
                                </div>
                                <div>

                                    <li>
                                        Number Of Transaction
                               </li>
                                    <P>
                                        94
                               </P>
                                </div>
                            </WrapUl>
                        </UlStyle>`
                        <H3>Top 3 Product Sales</H3>
                        <Table>
                            <tr>
                                <th>product</th>
                                <th>sales</th>
                                <th>transaction</th>
                            </tr>
                            <tr>
                                <td>paket Basic</td>
                                <td>38.000</td>
                                <td>38 </td>

                            </tr>
                            <tr>
                                <td>paket Basic</td>
                                <td> 8.000.000</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>paket Premium</td>
                                <td> 8.000.000 </td>
                                <td> 38</td>
                            </tr>
                        </Table>
                    </Box2>
                </FlexWrap>
            </Wrap>
        </>
    )
}

export default DataVoucher
