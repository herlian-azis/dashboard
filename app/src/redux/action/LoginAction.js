import APIAccess from "../../helpers/APIAccess"
import Cookies from "js-cookie"
export const loginUser = user => {
  return async dispatch => {
    const data = {
      url: "/service/sysBack/admin/login",
      method: "POST",
      body: user
    }
    try {
      const response = await APIAccess(data)
      localStorage.setItem('auth', response.data.data.auth)
      localStorage.setItem('email', response.data.data.email)
      // var myHeaders = response.headers;
      // console.log(myHeaders["Set-Cookie"])
      // Cookies.set("express:sessd" , "g")
      // 
      // console.log(response.headers)
        console.log(response)
      // console.log()
      dispatch({
        type: "USER_lOGIN",
        payload: true
      })
    } catch (error) {
      // console.log(error)
      let errorMessage = ""
      if (error.response.data.message != undefined) {
        errorMessage = error.response.data.message
      }
      else if (error.response.data.email != undefined) {
        errorMessage = error.response.data.email[0]
      }
      else if (error.response.data.password) {
        errorMessage = error.response.data.password.toString()
      }
      dispatch({
        type: "ERROR_lOGIN",
        payload: errorMessage
      })
    }
  }
}