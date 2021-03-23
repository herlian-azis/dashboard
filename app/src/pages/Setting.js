import React from 'react'
import { Row, Col, Card, Layout ,Button} from 'antd';

const Setting = () => {
  return (
    <Layout>
      <Card style={{ padding: '10px' }}>

        <Row>
          <Row justify={'space-between'} style={{width:'100%'}}>
            <Col>Peridode 2020 2020</Col>
            <Button type="primary" shape="round">Download</Button>
           
          </Row>
          <Row>
            <Col>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '500px' ,marginRight:"3rem"}}>
                <div >
                  <h1 style={{ padding: '10px 40px' }}>Harta</h1>
                  <div style={{ padding: '10px 40px' }}>
                    kas
              </div>
                  <Row style={{ width: '100%', backgroundColor: "#F9FAFB", padding: '10px 40px' }} justify={'space-between'}>
                    <Col >Kas kecil</Col>
                    <Col>5000000000</Col>
                  </Row>
                  <Row style={{ width: '100%', padding: '10px 40px' }} justify={'space-between'}>
                    <Col >Total Kas</Col>
                    <Col>5000000000</Col>
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
                    <Col>5000000000</Col>
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
              <Card style={{ width: '500px' , marginTop: '2rem' }}>
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
