import { ref, readonly } from 'vue'

/** @typedef {'success' | 'error' | 'info' | 'warning'} ToastType */

/** @typedef {{ id: number, message: string, type: ToastType }} ToastItem */

const toasts = ref(/** @type {ToastItem[]} */ ([]))
let nextId = 0

/**
 * 全域 Toast 通知 composable
 * 使用 module-level state，適合輕量全域 UI 回饋
 */
export function useToast() {
  const add = (message, type = 'info', duration = 3500) => {
    const id = ++nextId
    toasts.value.push({ id, message, type })

    if (duration > 0) {
      setTimeout(() => remove(id), duration)
    }
  }

  const remove = (id) => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  return {
    toasts: readonly(toasts),
    success: (message) => add(message, 'success'),
    error: (message) => add(message, 'error'),
    info: (message) => add(message, 'info'),
    warning: (message) => add(message, 'warning'),
    remove,
  }
}
