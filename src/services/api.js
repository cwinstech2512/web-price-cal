const API_DELAY = 800

/**
 * 模擬 API 延遲，方便展示 loading 狀態與 async 流程
 * @param {unknown} data
 * @param {number} [delay]
 */
export function mockRequest(data, delay = API_DELAY) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay)
  })
}

/**
 * 模擬 API 錯誤
 * @param {string} message
 * @param {number} [delay]
 */
export function mockReject(message, delay = API_DELAY) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(message)), delay)
  })
}
