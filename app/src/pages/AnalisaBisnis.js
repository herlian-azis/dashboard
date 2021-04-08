import React, { createRef, useState } from 'react'
import Calender from '../components/Calender'
import Pdf from "react-to-pdf";
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Divider, Card, Layout, Table, Image } from 'antd'
import Bag from '../image/Bag2.svg'
import DataTransaksi from "../pages/Setting"
import Setting from '../pages/Setting';


const dummy = [
  { name: "UMKM Terdaftar", Total: "10,600", info: 'Info Usaha' }, { name: "UMKM Aktif Mendaftar", Total: "400,600", info: 'Kontak' }, { name: "UMKM Tidak Aktif", Total: "4,600", info: "jenis USaha" },
  { name: "Total Aset UMKM", Total: "3,600" }, { name: "UMKM Kondisi Profit", Total: "99,300" }, { name: "UMKM Kondisi Rugi", Total: "4,600" },
  { name: "Total Jumlah Transaksi", Total: "4,600" }, { name: "Total Jumlah Pemasukan", Total: "4,600" }, { name: "Total jumlah Pengeluaran", Total: "4,055" },
  { name: "Total Jumlah Transaksi", Total: "4,600" }, { name: "Total Jumlah Pemasukan", Total: "4,600" }, { name: "Total jumlah Pengeluaran", Total: "4,055" },
  { name: "Total Jumlah Transaksi", Total: "4,600" }, { name: "Total Jumlah Pemasukan", Total: "4,600" }, { name: "Total jumlah Pengeluaran", Total: "4,055" }
]


const AnalisaBisnis = () => {
  const backgroundColor = "#002F79"
  const backgroundColor2 = "#FFCB05"
  const backgroundColor3 = "#D9DCE8"
  const [hidden, setHidden] = useState(false);
  const ref = createRef();
  const options = {
    orientation: 'landscape',

  };
  console.log(hidden == false)
  return (
    <Layout>
      <Row justify={"space-between"}>
        <Col>AnalisaBisnis</Col>
        <Col>
          {/* <Calender /> */}
          <Pdf options={options} targetRef={ref} filename="code-example.pdf" x={15} scale={0.9}>
            {({ toPdf }) => <Button icon={<DownloadOutlined />} onClick={toPdf} style={{ background: "#FFCB2B", color: "black", borderColor: "#FFCB2B" }} >
              export to PDF
                   </Button>}
          </Pdf>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[24, 24]} ref={ref} style={{ rowGap: hidden ? 10 : 24 }}>
        {
          dummy.map((data, i) => {
            return (
              <Col key={i} span={8}>
                <Card hidden={i > 2 && hidden} style={{ width: "346px", height: '111px', backgroundColor: i < 3 ? backgroundColor3 : i == 11 || i == 14 ? backgroundColor2 : backgroundColor, color: i < 3 ? backgroundColor : "white" }}>
                  <Row align={"middle"} justify={"space-between"}>
                    {
                      i == 11 || i == 14 ?
                        <Button onClick={() => setHidden(!hidden)} type="link" style={{ fontWeight: "bold", color: backgroundColor }}>
                          <Col > {i == 11 ? "Lihat Laporan Keuangan" : "Lihat Transaksi"}</Col>
                        </Button>
                        :
                        <Col>
                          {data.info ? <Row >{data.info}</Row> : null}
                          <Row style={{ fontSize: "20px" }}> {data.Total}</Row>
                          <Row>{data.name}</Row>
                        </Col>
                    }
                    <Col>
                      <Image src={Bag} preview={false} width={50} />
                    </Col>
                  </Row>
                </Card>
              </Col>
            )
          })
        }
      </Row>
      { hidden == true ? <Setting /> : null}
    </Layout>
  )
}
export default AnalisaBisnis