import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import MandiriBlue from '../image/MandiriBlue.svg';
import Logo from '../image/ChatatLogo.svg';
import { Row, Col, Image } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/action/loginAction'



const LoginWrapper = styled.div`
height: 100vh;
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow-y: auto;
`
const LoginWrapper2 = styled.div`
margin: auto;
  padding: 10px;
`
const LoginCard = styled.div`
background-color: #f5f6fa !important;
  border-radius: 5px !important;
  border: 1px solid #dbdfea;
    padding: 50px 60px;
  width: 539px;
  @media (max-width: 520px) {
    flex-direction: column;
  }
`
const LoginHead = styled.div`
  margin-bottom: 30px;
    padding-left: 10px;
    border-left: 4px solid #f6bd3d
`
const FormLoginGroub = styled.form`
display: flex;
flex-wrap: wrap;
`
const FormLogin = styled.div`
margin-bottom: 20px;
width: 100%;
position: relative;
`
const FormLabel = styled.span`
margin-bottom: 4px;
display: inline-block
`
const FormField = styled.div`
width: 100%;
display: flex;
margin: auto;

`
const Input = styled.input`
width: 100%;
padding: 5px 10px;
font-size: 13px;
height: 30px;

`
const PasswordInput = styled.input`
width: 100%;
padding: 5px 10px;
font-size: 13px;
height: 30px;

`
const Icons = styled.div`
padding: 6px;
  height: 30px;
background: #dbdfea;
`
const IconsEmail = styled(Icon.Mail)`
fill: white;
width: 18px;
height: 18px;
`
const IconsPassword = styled(Icon.Key)`
fill: white;
width: 18px;
height: 18px;
`
const IconsSeePassword = styled(Icon.Eye)`
fill: white;
width: 18px;
height: 18px;
cursor: pointer;

`
const PositionButton = styled.div`
position: relative;

`
const ForgotButton = styled(Link)`
  font-size: 13px;
  line-height: 5px;
  text-decoration: none;
color: #15498d;
position: relative;
left: 310px;
margin-bottom: 20px;

`
const ButtonLogin = styled.button`
border-radius: 10px;
padding: 10px 25px;
margin-bottom: 20px;
  cursor: pointer;
  width: 100%;
  border: none;
  outline: none;

    color: #fff;
    background: #15498d;
    border-color: #15498d;
    &:hover{
      background: #0e3261;
      cursor: pointer;
  }
  
  `


const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { error } = useSelector(state => state.errorHandling)
  const { isLogin } = useSelector(state => state.loginReducer)
  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onChange = (e) => {
    let { name, value } = e.target
    const dataInput = { ...input, [name]: value }
    setInput(dataInput)
  }
  useEffect(() => {
    if (isLogin) history.push(`/dashboard`)
  }, [isLogin, history])
  console.log(isLogin)
  const goSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(input))
  }
  return (
    <div>
      <LoginWrapper>
        <LoginWrapper2>
          <center>
            <Image width={300} height={150} preview={false} src={MandiriBlue} />
          </center>
          <LoginCard>
            <LoginHead>
              <h2> silahkan login dahulu</h2>
            </LoginHead>
            {error && <h4 style={{ color: "red" }} >  {error}</h4>}
            <FormLoginGroub onSubmit={(e) => goSubmit(e)}>
              <FormLabel>
                E-mail
              </FormLabel>
              {/* Email form */}
              <FormField>
                {/* /icons */}
                <Icons>
                  <IconsEmail />
                </Icons>
                {/* input */}
                <FormLogin>
                  <Input onChange={onChange} name="email" type="email" placeholder="E-mail" />
                </FormLogin>
              </FormField>
              {/* password form */}
              <FormLabel>
                Password
              </FormLabel>
              {/* password Form */}
              <FormField>
                {/* /icons */}
                <Icons>
                  <IconsPassword edge="end" />
                </Icons>
                {/* input */}
                <FormLogin>
                  <PasswordInput onChange={onChange} name="password" type={passwordShown ? "text" : "password"} placeholder="Password" />
                </FormLogin>
                <PositionButton>
                  <Icons>
                    <IconsSeePassword onClick={togglePasswordVisiblity} />
                  </Icons>
                </PositionButton>
              </FormField>
              <ForgotButton>
                Forgot a password?
              </ForgotButton>
              <ButtonLogin className="primary"> Sign In</ButtonLogin>
            </FormLoginGroub>
          </LoginCard>
          <Row style={{ marginTop: "20px", width: "100%" }} justify={'center'}>
            <Col style={{ marginTop: "5px", marginRight: "5px" }}>
              Powered By
              </Col>
            <Col>
              <Image src={Logo} width={125} preview={false} />
            </Col>
          </Row>
        </LoginWrapper2>
      </LoginWrapper>
    </div>
  )
}
export default Login
