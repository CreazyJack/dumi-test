/*
 * @Description: debounce hook
 * @Date: 2021-05-10 16:42:45
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-06-29 18:52:29
 */

import { useRef } from 'react'

type Fn = (...args: unknown[]) => void

type UseDebounceType = (fn: Fn, delay?: number) => Fn

const useDebounce: UseDebounceType = (fn, delay = 300) => {
  // 使用 useRef 来存储之前的 timer，避免 timer 不会被清除
  const { current } = useRef<{ timer: NodeJS.Timeout | null }>({ timer: null })

  return (...args) => {
    if (current.timer) clearTimeout(current.timer)
    current.timer = setTimeout(() => fn(...args), delay)
  }
}

export default useDebounce
