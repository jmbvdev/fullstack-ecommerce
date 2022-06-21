import axios from "axios";

const BASE_URL= "http://localhost:5000/api/"
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFkMjQ1ZGU1ZmU0ZThkOWU5YWQxOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTU4NDg5NDcsImV4cCI6MTY1NjEwODE0N30.QEnstx88wcxqdRDbEgywAh1bUI1KWEnmkBCDyvJUO_8"

export const publicRequest= axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})