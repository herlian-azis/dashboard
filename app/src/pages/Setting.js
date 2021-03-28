import React, { createRef } from 'react'
import { Row, Col, Card, Layout, Button } from 'antd';
import Pdf from "react-to-pdf";


const Setting = () => {
  const ref = createRef();
  const options = {
    orientation: 'landscape',

  };
  return (
    <Layout >
      <Card style={{ padding: '10px' }}>

        <Row ref={ref}>
          <Row justify={'space-between'} style={{ width: '100%' }}>
            <Col>Peridode 2020 2020</Col>
            <Pdf options={options} targetRef={ref} filename="code-example.pdf" x={15} scale={0.9}>
              {({ toPdf }) => <Button type="primary" onClick={toPdf} shape="round">Download</Button>}
            </Pdf>

          </Row>
          <Row>
            <Col>
              Laporan yang mencatat informasi mengenai harta bisnis kamu. utang pada pihak-pihak yang terkait dalam operasional usaha, serta modal pada saat tertentu
          </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col>
              <Card style={{ width: '500px', marginRight: "3rem" }}>
                <div >
                  <h1 style={{ padding: '10px 40px' }}>Harta</h1>
                  <div style={{ padding: '10px 40px' }}>
                    kas
              </div>
                  <Row style={{ width: '100%', backgroundColor: "#F9FAFB", padding: '10px 40px' }} justify={'space-between'}>
                    <Col >Kas kecil</Col>
                    <Col >5.000.000.000</Col>
                  </Row>
                  <Row style={{ width: '100%', padding: '10px 40px' }} justify={'space-between'}>
                    <Col >Total Kas</Col>
                    <Col style={{ color: "#5C9DFF" }}>5.000.000.000</Col>
                  </Row>
                  <div style={{ padding: '10px 40px' }}>
                    Piutang
                  </div>
                  <Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                    <Col >Total Piutang</Col>
                    <Col>0</Col>
                  </Row>

                  <div style={{ padding: '10px 40px' }}>
                    Persediaan
                  </div>
                  <Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                    <Col >Total Persediaan</Col>
                    <Col>0</Col>
                  </Row>
                  <div style={{ padding: '10px 40px' }}>
                    Peralatan
                  </div>
                  <Row style={{ width: '100%', padding: '10px 40px' }} justify={'space-between'}>
                    <Col >Akumulasi Depresiasi Peralatan</Col>
                    <Col>0</Col>
                  </Row>
                  <Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                    <Col >Total Peralatan</Col>
                    <Col>0</Col>
                  </Row>
                  <div style={{ padding: '10px 40px' }}>
                    Kendaraan
                  </div>
                  <Row style={{ width: '100%', padding: '10px 40px' }} justify={'space-between'}>
                    <Col >Akumulasi Depresiasi Kendaraan</Col>
                    <Col>0</Col>
                  </Row>
                  <Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                    <Col >Total Kendaraan</Col>
                    <Col>0</Col>
                  </Row>
                  <div style={{ padding: '10px 40px' }}>
                    Properti
                  </div>
                  <Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                    <Col >Akumulasi Depresiasi Properti</Col>
                    <Col>0</Col>
                  </Row>
                  <Row style={{ width: '100%', padding: '10px 40px' }} justify={'space-between'}>
                    <Col >Total Properti</Col>
                    <Col>0</Col>
                  </Row>
                  <Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                    <Col >Total Harta</Col>
                    <Col style={{ color: "#5C9DFF" }}>5.000.000.000</Col>

                  </Row>

                </div>
              </Card >
            </Col>
            <Col>
              <Card style={{ width: '500px' }}>
                <h1 style={{ padding: '10px 40px' }}>Utang</h1>
                <div style={{ padding: '10px 40px' }}>
                  Utang Usaha
              </div>
                <Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                  <Col >Total Utang Usaha</Col>
                  <Col>0</Col>
                </Row>
                <div style={{ padding: '10px 40px' }}>
                  Utang Bank
              </div>
                <Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                  <Col >Total Utang Bank</Col>
                  <Col>0</Col>
                </Row>
                <div style={{ padding: '10px 40px' }}>
                  Utang lain
              </div>
                <Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                  <Col >Total Utang Bank</Col>
                  <Col>0</Col>
                </Row>
                <Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                  <Col >Total Utang </Col>
                  <Col>0</Col>
                </Row>

              </Card>
              <Card style={{ width: '500px', marginTop: '2rem' }}>
                <h1 style={{ padding: '10px 40px' }}>Modal</h1>
                <Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                  <Col >Laba Ditahan </Col>
                  <Col>0</Col>
                </Row><Row style={{ width: '100%', padding: '10px 40px', }} justify={'space-between'}>
                  <Col >Modal </Col>
                  <Col>0</Col>
                </Row><Row style={{ width: '100%', padding: '10px 40px', backgroundColor: "#F9FAFB" }} justify={'space-between'}>
                  <Col >Total Modal </Col>
                  <Col>0</Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Row>
      </Card>

    </Layout>


  )
}

export default Setting
