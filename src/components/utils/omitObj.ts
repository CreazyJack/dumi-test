/*
 * @Description: 去除条件中的字段，返回新的 object
 * @Date: 2021-07-02 14:27:46
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-07-02 15:10:49
 */

import { ReactText } from 'react'
import { Obj } from './types'

export default (obj: Obj, condition: ReactText[] | Obj) => {
  const result: Obj = {}
  const keys = Object.keys(obj)
  if (Array.isArray(condition)) {
    keys
      .filter((item) => !condition.includes(item))
      .forEach((key) => {
        result[key] = obj[key]
      })
  } else {
    const ks = Object.keys(condition)
    keys
      .filter((item) => !ks.includes(item))
      .forEach((key) => {
        result[key] = obj[key]
      })
  }

  return result
}
