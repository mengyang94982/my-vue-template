const devBaseURL='your development baseURL'
const proBaseURL='your production baseURL'
export const BASE_URL=process.dev.NODE_ENV==='development'?'devBaseURL':'proBaseURL'

export const TIMEOUT=10000
