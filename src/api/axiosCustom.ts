import axios from "axios";

const BASE_API_URL = process.env.NEXT_PUBLIC_FRONT_API_URL;
const PROXY_BASE_API_URL = process.env.NEXT_PUBLIC_PROXY_API_URL;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN_API;
const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL;

export const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export const axiosServer = axios.create({
  baseURL: BASE_API_URL,
  params: {
    token: TOKEN
  },
  headers
})

export const axiosClient = axios.create({
  baseURL: PROXY_BASE_API_URL,
  params: {
    token: TOKEN
  },
  headers
})
