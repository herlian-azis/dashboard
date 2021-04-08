import React from 'react'
import { Row, Col, Button, Divider, Card, Layout, Table, Image } from 'antd' 

import Bag from '../image/Bag2.svg'

const backgroundColor = "#002F79"
const backgroundColor2 = "#FFCB05"


const columns = [
  {
    title: "Nama Usaha",
    dataIndex: "NamaUsaha"
  },
  {
    title: "Nama User",
    dataIndex: "NamaUser",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3
    }
  },
  {
    title: "No HP",
    dataIndex: "NoHP",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2
    }
  },
  {
    title: "Lokasi",
    dataIndex: "Lokasi",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1
    }
  },
  {
    title: "jenis usaha",
    dataIndex: "JenisUsaha",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1
    }
  },
];

const data = [
  {
    key: "1",
    NamaUsaha: "Warung Zeus",
    NamaUser: "zeus",
    NoHP: 600000,
    Lokasi: 70,
    JenisUsaha: 'ritel'
  },
  {
    key: "2",
    NamaUsaha: "Toko Spartan",
    NamaUser: "spartan",
    NoHP: 631236,
    Lokasi: 89,
    JenisUsaha: 'jasa'

  },
  {
    key: "3",
    NamaUsaha: "olympus Store",
    NamaUser: "hercules",
    NoHP: 90,
    Lokasi: 70,
    JenisUsaha: 'ritel'

  },
  {
    key: "4",
    NamaUsaha: "Etopia Market",
    NamaUser: "atena",
    NoHP: 312312,
    Lokasi: 89,
    JenisUsaha: 'ritel'

  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
const AnalisaMenchatat = () => {
  return (
    <>
      <Layout>

        <Row justify={"space-between"}>
          <Col>Analisa Menchatat UMKM</Col>
          <Col><Button type="primary" >Export</Button></Col>
        </Row>
        <Divider />
        <Row gutter={[24, 24]}>

          <Col span={8}>
            <Card style={{ width: "346px", height: '111px', backgroundColor: backgroundColor, color: 'white' }}>
              <Row align={"middle"} justify={"space-between"}>

                <Col>
                  <Row style={{ fontSize: "30px" }}> 2312</Row>
                  <Row> UMKM  Terdaftar</Row>
                </Col>
                <Col>
                  <Image src={Bag} width={50} />
                </Col>
              </Row>

            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ width: "346px", height: '111px', backgroundColor: backgroundColor, color: 'white' }}>
              <Row align={"middle"} justify={"space-between"}>
                <Col>
                  <Row style={{ fontSize: "30px" }}> 3000</Row>
                  <Row> UMKM Aktif Mencatat</Row>
                </Col>
                <Col>
                  <Image src={Bag} width={50} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ width: "346px", height: '111px', backgroundColor: backgroundColor2, color: backgroundColor }}> 
              <Row align={"middle"} justify={"space-between"}>
                <Col>
                  <Row style={{ fontSize: "30px" }}> 5000</Row>
                  <Row>  UMKM Tidak Aktif</Row>
                </Col>
                <Col>
                  <Image src={Bag} width={50} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Card style={{ marginTop: 20 }}>
          <Table columns={columns} dataSource={data} onChange={onChange} />

        </Card>
      </Layout>

    </>
  )
}

export default AnalisaMenchatat
