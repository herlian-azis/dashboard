import React, { useState } from 'react'
import "antd/dist/antd.css";
import { DatePicker, Space, Select } from "antd";
import moment from "moment";

const { Option } = Select



const Calender = () => {
    const { RangePicker } = DatePicker;
    const [type, setType] = useState('date')
    const dateFormat = "YYYY/MM/DD";
    const date = new Date()
    const yesterday = new Date(Date.now() - 86400000)

    const PickerWithType = ({ type, onChange }) => {

        return(
        <RangePicker size={"small"}
        picker={type}
        defaultValue={[
            moment(yesterday, dateFormat),
            moment(date, dateFormat)
        ]}
        onChange={onChange}
        format={dateFormat}
    />)

    
}
const time =(d ) =>{
    // console.log(new Date(d[0]._d).getTime())
    // console.log(d[0]._d)
    // console.log(d[1]._d)
     
}
    return (
        <div>
            {/* <RangePicker size={"small"}
                picker="month"
                defaultValue={[
                    moment(yesterday, dateFormat),
                    moment(date, dateFormat)
                ]}
                format={dateFormat}
            /> */}
            <PickerWithType type={type} onChange={time} />
            <Select size={"small"} value={type} onChange={setType}>
                <Option value="date">By Date</Option>
                <Option value="month">By Month</Option>
                <Option value="year">By Year</Option>

            </Select>
        </div>
    )
}

export default Calender
