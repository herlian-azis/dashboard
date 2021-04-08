import Axios from 'axios'
// Axios.defaults.withCredentials = true
const APIAccess = async ({ url, method, body }) => {
  // console.log({ url, method, body })
  try {
    const result = await Axios({
      method: method,
      url: `https://azaradigital.com/${url}`,
      headers: {
        'Authorization': 'Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0',
        'Content-Type': 'application/json',
    
      },
       withCredentials:true,
      data: body
    })
    // console.log(result)
    return result
  } catch (error) {
    throw error
  }
}
export default APIAccess