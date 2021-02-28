import React, { useState } from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




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
  width: 398px;
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
height: 15px;

`
const PasswordInput = styled.input`
width: 100%;
padding: 5px 10px;
font-size: 13px;
height: 15px;

`


const Icons = styled.div`
padding: 6px;
  height: 18px;
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
left: 23px;

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

  &.primary {
    color: #fff;
    background: #15498d;
    border-color: #15498d;
  }`


const Login = () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0");
  myHeaders.append("Content-Type", "application/json");

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

  const goSubmit = (e) => {
    e.preventDefault()
    var raw = JSON.stringify(input);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://azaradigital.com/service/sysBack/admin/login", requestOptions)
      .then(response => response.text())
      .then((result) => {
        // if (condition) {

        // }
        toast.error("email atau password salah");
        console.log(result.data)
      })
      .catch(error => {
        console.log('error', error)
      });
  }



  return (
    <div>
      <ToastContainer />

      <LoginWrapper>
        <LoginWrapper2>
          <LoginCard>
            <LoginHead>
              <h3> silahkan login dahulu</h3>
            </LoginHead>
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
                  <IconsPassword />
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
              {/* <ForgotButton>
                Forgot a password?
                            </ForgotButton> */}



              <ButtonLogin className="primary"> Sign In</ButtonLogin>
            </FormLoginGroub>
          </LoginCard>
        </LoginWrapper2>

      </LoginWrapper>
    </div>
  )
}

export default Login
