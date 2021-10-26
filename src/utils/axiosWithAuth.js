import axios from "axios"
  const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(localStorage.getItem('token'))
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "https://wmp-api.herokuapp.com/"
    })
}

export default axiosWithAuth