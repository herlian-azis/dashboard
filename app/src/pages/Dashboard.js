import React,{useState,useEffect} from 'react'
import { Row, Col, Button, Divider, Card, Layout, Table, Image } from 'antd'
import Bag from '../image/Bag2.svg'
import Calender from '../components/Calender'
import {useDispatch,useSelector} from 'react-redux'
import { getUmkmTerdaftar } from '../redux/action/userAction'

const Dashboard = () => {
    const dummy = [
        { name: "UMKM Terdaftar", Total: "10,600"  }, { name: "UMKM Aktif Mendaftar", Total: "400,600" }, { name: "UMKM Tidak Aktif", Total: "4,600" },
        { name: "Total Aset UMKM", Total: "3,600" }, { name: "UMKM Kondisi Profit", Total: "99,300" }, { name: "UMKM Kondisi Rugi", Total: "4,600" },
        { name: "Total Jumlah Transaksi", Total: "4,600" }, { name: "Total Jumlah Pemasukan", Total: "4,600" }, { name: "Total jumlah Pengeluaran", Total: "4,055" }
    ]
    const [currentPage, setWaktu] = useState()
    // const { getUmkmTerdaftar } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const backgroundColor = "#003D79"
    const backgroundColor2 = "#FFCB05"
    useEffect(() => {
        
        console.log(currentPage)
    }, [dispatch, currentPage])
    // getUmkmTerdaftar()
    return (
        <Layout>
            <Row justify={"space-between"}>
                <Col>Dashboard</Col>
                <Col><Calender makan={"das"} waktu={page => setWaktu(page)}/></Col>
            </Row>
            <Divider />
            <Row gutter={[24, 24]}>
                {
                    dummy.map((data,i) => {
                        return (
                            <Col key={i} span={8}>
                                <Card style={{ width: "346px", height: '111px', backgroundColor: i==2 || i==5 ? backgroundColor2 : backgroundColor , color: 'white' }}>
                                    <Row align={"middle"} justify={"space-between"}>
                                        <Col>
                                            <Row style={{ fontSize: "30px" }}> {data.Total}</Row>
                                            <Row>{data.name}</Row>
                                        </Col>
                                        <Col>
                                            <Image src={Bag} width={50} />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Layout>
    )
}

export default Dashboard
