import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"


//const Token = () =>{
 // if (JSON.parse(localStorage.getItem("user")).isAdmin){
  //    return  JSON.parse(localStorage.getItem("user")).accessToken
  // } else {
  //      return ""
   // }
//};
const Token =  JSON.parse(localStorage.getItem("user"))?.accessToken

//const  Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDQ4ZjNlYmRmMDYxNzA2M2NhNDI2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMTY2NzI5MiwiZXhwIjoxNzA0MjU5MjkyfQ.er_xJa2Xu2lVwmeR2wKACCeeHWnzKoCa1qDHT8WxaTM"

console.log(Token)

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})








//const TOKEN = JSON.parse( JSON.parse( localStorage.getItem("user")).currentUser)

export const userRequest = axios.create({
    baseURL: BASE_URL, 
    headers: {token: `Bearer ${Token}`},
})