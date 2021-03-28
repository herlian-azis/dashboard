import React from 'react'
import styled from 'styled-components'
import ReactExport from "react-export-excel";
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Button, Divider, Card, Layout, Table, Image } from 'antd'
import Bag from '../image/Bag2.svg'


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dummy = [
    { name: "UMKM Terdaftar", Total: "10,600"  }, { name: "UMKM Aktif Mendaftar", Total: "400,600" }, { name: "UMKM Tidak Aktif", Total: "4,600" },
]




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
    const backgroundColor = "#002F79"
    const backgroundColor2 = "#FFCB05"
    return (
        <Layout>

            <Row justify={"space-between"}>
                <Col>Data UMKM</Col>
                <Col>
                    <ExcelFile filename="data-umkm"
                        element={
                            <Button icon={<DownloadOutlined />} style={{ background: "#FFCB2B", color: "black", borderColor: "#FFCB2B" }} >
                                export to XLSX</Button>
                        }
                    >
                        <ExcelSheet data={data} name="Employees"  >
                            <ExcelColumn label="Name" value="name" />
                            <ExcelColumn label="chinese" value="chinese" />
                            <ExcelColumn label="math" value="math" />
                            <ExcelColumn label="english" value="english" />
                        </ExcelSheet>
                    </ExcelFile>
                </Col>
            </Row>
            <Divider />
            <Row gutter={[24, 24]}>

                {dummy.map((data ,i) =>{

              return  (<Col span={8} key={i}>
                    <Card style={{ width: "346px", height: '111px', backgroundColor: i==2 ? backgroundColor2 : backgroundColor, color:  i==2 ? backgroundColor :"white" }}>
                        <Row align={"middle"} justify={"space-between"}>
                            <Col>
                                <Row style={{ fontSize: "30px" }}> {data.Total}</Row>
                                <Row>  {data.name}</Row>
                            </Col>
                            <Col>
                                <Image src={Bag} width={50} />
                            </Col>
                        </Row>
                    </Card>
                </Col>)
                }) }
            </Row>
            <Card style={{ marginTop: 20 }}>
                <Table columns={columns} dataSource={data} onChange={onChange} />

            </Card>
        </Layout>

    )
}

export default DataUmkm