import axios from 'axios'

const apiLaravel = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export {
  apiLaravel
}