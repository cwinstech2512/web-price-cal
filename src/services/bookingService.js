import { mockRequest } from './api'

/**
 * @typedef {Object} BookingPayload
 * @property {string} categoryId
 * @property {string} courseId
 * @property {string} name
 * @property {string} phone
 * @property {number} price
 */

/**
 * @param {BookingPayload} payload
 * @returns {Promise<{ orderId: string }>}
 */
export async function submitBooking(payload) {
  await mockRequest(null, 1500)

  return {
    orderId: `NB-${Date.now().toString(36).toUpperCase()}`,
    ...payload,
  }
}
