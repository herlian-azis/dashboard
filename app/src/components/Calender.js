import React, { useState } from 'react'
import "antd/dist/antd.css";
import { DatePicker, Space, Select } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux'
import { getUmkmTerdaftar } from '../redux/action/userAction'

const { Option } = Select

const Calender = (props) => {
  const { RangePicker } = DatePicker;
  const [type, setType] = useState('date')
  const dateFormat = "YYYY/MM/DD";
  const date = new Date()
  const yesterday = new Date(Date.now() - 86400000)
  const [rangeTime , setRangeTime] = useState()
  const [rangeTime1 , setRangeTime1] = useState()
  const dispatch = useDispatch()
  // const { getUmkmTerdaftar } = useSelector(state => state.userReducer)

  const PickerWithType = ({ type, onChange }) => {
    return (
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
  const time = (d) => {
    if (d != null) {
      const start = GetFormattedDated(d[0]._d)
      const finish = GetFormattedDated(d[1]._d)
      // console.log(finish,start)
    setRangeTime(start)
    setRangeTime1(finish)
  }
}
const okebut = () =>{
    dispatch( getUmkmTerdaftar(rangeTime,rangeTime1))

  }
  const GetFormattedDated = (time) => {
    var todayTime = time;
    var month = todayTime.getMonth() + 1;
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return year + "-" + month + "-" + day;
  }

// console.log(finish,start)
  return (
    <div style={{ marginRight: "20px" }}>
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
      <button onClick={okebut}>ok</button>
    </div>
  )
}

export default Calender
