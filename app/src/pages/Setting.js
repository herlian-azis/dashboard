import React from 'react'
import { Row, Col, Card, Layout } from 'antd';


// const TableList = () =>{
//     return ()
// }



const Setting = () => {
  return (
    <Layout>
      <Card style={{ padding: '10px' }}>

        <Row>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '500px' }}>
                <div >
                  <h1 style={{ padding: '10px 40px' }}>Harta</h1>
                  <div style={{ padding: '10px 40px' }}>
                    kas
              </div>
                  <div>
                    <Row style={{ width: '100%', backgroundColor: "#F9FAFB", padding: '10px 40px' }} justify={'space-between'}>
                      <Col >Kas kecil</Col>
                      <Col>5000000000</Col>
                    </Row>
                    <Row style={{ width: '100%', backgroundColor: "#F9FAFB", padding: '10px 40px' }} justify={'space-between'}>
                      <Col >Total Kas</Col>
                      <Col>5000000000</Col>
                    </Row>

                  </div>
                  <div></div>
                  <div></div>
                </div>
              </Card >
            </Col>
            <Col>
              <Card style={{ width: '500px' }}></Card>
            </Col>
          </Row>
        </Row>
      </Card>

    </Layout>


  )
}

export default Setting
