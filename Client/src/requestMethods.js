import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjgzYTM4ZmVjODM0ODk3MjJjNjI2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTMyODM2MywiZXhwIjoxNjY5NTg3NTYzfQ.2RuoUd-Pe2tGNLvin001EhouTmas9HFfPhOeZEvwGds"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})
