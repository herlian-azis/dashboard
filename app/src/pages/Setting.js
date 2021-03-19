import React from 'react'
import styled from 'styled-components'
const Wrap = styled.div`
width: auto;
margin-left: 16rem;
position: relative;
padding: 0 4rem;

`;

const Box = styled.div`
height: 744px;
width: auto;
box-shadow: -2px 12px 12px -6px rgba(0,0,0,0.5);
margin-bottom: 12rem;
`

const TitleFlex = styled.div`
display: flex;
justify-content: space-between
`

const Table = styled.div`
border: 1px solid
`
const Setting = () => {
    return (
        <Wrap>
            <Box>
                <TitleFlex>
                    <TitleFlex>

                        <h1>
                            settingsa
            </h1>
                        <h1>
                            settingsafdsffd
            </h1>
                    </TitleFlex>
                    <h1>dasd</h1>

                </TitleFlex>
                <TitleFlex>

                <Table>
                    <p>Harta</p>
                    <tr>
                        <td>kas</td>
                        <td>kas kecil</td>
                        <th>Total Kas</th>
                    </tr>
                    <tr>
                        <td>piutang</td>
                        <th>Total piutang</th>
                    </tr>
                    <tr>
                        <td>persedian</td>
                        <th>Total persedian</th>
                    </tr>
                    <tr>
                        <td>perlatan</td>
                        <td>Akumulasi Depersiasi Perlatan</td>
                        <th>Total Peralatan</th>
                    </tr>
                    <tr>
                        <td>Kendaraan</td>
                        <td>Akumulasi Depersiasi Kendaraan</td>
                        <th>Total Kendaraan</th>
                    </tr>
                    <tr>
                        <td>Properti</td>
                        <td>Akumulasi Depersiasi Properti</td>
                        <th>Total Properti</th>
                    </tr>
                    <tr>
                       
                        <th>Total Harta</th>
                    </tr>

                </Table>
                <Table>
                    <p>Harta</p>
                    <tr>
                        <td>kas</td>
                        <td>kas kecil</td>
                        <th>Total Kas</th>
                    </tr>
                    <tr>
                        <td>piutang</td>
                        <th>Total piutang</th>
                    </tr>
                    <tr>
                        <td>persedian</td>
                        <th>Total persedian</th>
                    </tr>
                    <tr>
                        <td>perlatan</td>
                        <td>Akumulasi Depersiasi Perlatan</td>
                        <th>Total Peralatan</th>
                    </tr>
                    <tr>
                        <td>Kendaraan</td>
                        <td>Akumulasi Depersiasi Kendaraan</td>
                        <th>Total Kendaraan</th>
                    </tr>
                    <tr>
                        <td>Properti</td>
                        <td>Akumulasi Depersiasi Properti</td>
                        <th>Total Properti</th>
                    </tr>
                    <tr>
                       
                        <th>Total Harta</th>
                    </tr>

                </Table>
                </TitleFlex>

            </Box>

        </Wrap>
    )
}

export default Setting
