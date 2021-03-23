import React from 'react'
import { Row, Col, Button, Divider, Card } from 'antd'

const Box = () =>{
  

}


const AnalisaMenchatat = () => {
  return (
    <>
      <Row justify={"space-between"}>
        <Col>Analisa Menchatat UMKM</Col>
        <Col><Button>Export</Button></Col>
      </Row>
      <Divider />
      <Row gutter={[24, 24]}>
  
  <Col span={8}>
      <Card style={{width:"346px", height:'111px'}}>tes</Card>
    </Col>
    
</Row>
    </>
  )
}

export default AnalisaMenchatat
