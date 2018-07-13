import axios from 'axios'

const serverUrl = ''

export default function query(url, body = {}) {
    return axios.post(serverUrl + url, body)
}