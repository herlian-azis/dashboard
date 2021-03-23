import React from 'react'
import styled from 'styled-components'
import CardItem from '../components/CardItem'
import { Table } from "antd";
import ReactExport from "react-export-excel";
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;




const Wrap = styled.div`
width: auto;
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

`

const Title = styled.div`
border-bottom: 1px solid grey
`
const TitleWrap = styled.div`
display: flex;
justify-content: space-between;
`
const P = styled.p`
margin: 2px 1px;
`


const columns = [
    {
        title: "Nama Usaha",
        dataIndex: "name"
    },
    {
        title: "Chinese Score",
        dataIndex: "chinese",
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3
        }
    },
    {
        title: "Math Score",
        dataIndex: "math",
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2
        }
    },
    {
        title: "English Score",
        dataIndex: "english",
        sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1
        }
    }
];

const data = [
    {
        key: "1",
        name: "John Brown",
        chinese: 98,
        math: 60,
        english: 70
    },
    {
        key: "2",
        name: "Jim Green",
        chinese: 98,
        math: 66,
        english: 89
    },
    {
        key: "3",
        name: "Joe Black",
        chinese: 98,
        math: 90,
        english: 70
    },
    {
        key: "4",
        name: "Jim Red",
        chinese: 88,
        math: 99,
        english: 89
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
}



const DataUmkm = () => {
    return (
        <>
            <Wrap>
                <Title>

                    <TitleWrap>
                        <p>     Data UMKM</p>
                        <ExcelFile filename="data-umkm"
                            element={
                                <Button icon={<DownloadOutlined />} style={{ background: "#FFCB2B", color: "black", borderColor: "#FFCB2B" }} >
                                    export to XLSX
                   </Button>
                            }
                        >
                            <ExcelSheet data={data} name="Employees"  >
                                <ExcelColumn label="Name" value="name" />
                                <ExcelColumn label="chinese" value="chinese" />
                                <ExcelColumn label="math" value="math" />
                                <ExcelColumn label="english" value="english" />
                            </ExcelSheet>
                        </ExcelFile>

                    </TitleWrap>
                </Title>

                <Column col="3">
                    <CardItem />
                    <CardItem />
                    <CardItem color="#FFCB2B"> <P> 522
                </P>
                        <P>
                            Umkm Tidak Aktif</P></CardItem>
                </Column>
            </Wrap>


                <Table columns={columns} dataSource={data} onChange={onChange} />
        </>
    )
}

export default DataUmkm