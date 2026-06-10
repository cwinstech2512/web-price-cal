import { mockRequest } from './api'

const DEMO_CREDENTIALS = {
  account: 'demo',
  password: 'demo123',
  authcode: '1234',
}

/**
 * @typedef {Object} LoginPayload
 * @property {string} account
 * @property {string} password
 * @property {string} authcode
 */

/**
 * @typedef {Object} AuthUser
 * @property {string} id
 * @property {string} name
 * @property {string} account
 */

/**
 * @param {LoginPayload} payload
 * @returns {Promise<AuthUser>}
 */
export async function login(payload) {
  await mockRequest(null, 1000)

  const isValid =
    payload.account === DEMO_CREDENTIALS.account &&
    payload.password === DEMO_CREDENTIALS.password &&
    payload.authcode === DEMO_CREDENTIALS.authcode

  if (!isValid) {
    throw new Error('帳號、密碼或驗證碼錯誤，請再試一次。')
  }

  return {
    id: 'user_001',
    name: '示範會員',
    account: payload.account,
  }
}

export function getAuthCodeImage() {
  return `https://dummyimage.com/140x50/e5e7eb/6b7280.png&text=1234+${Date.now()}`
}
