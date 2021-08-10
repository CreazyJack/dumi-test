/*
 * @Description: 自动补全 列表
 * @Date: 2021-07-03 09:57:59
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-07-30 11:08:29
 */

import classNames from 'classnames'
import React from 'react'

export interface AutoCompleteUlProps {
  data?: string[]
  customFn?: (condition: string, data: string[]) => string[]
  onSelected?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string) => void
}

export default (props: AutoCompleteUlProps) => {
  const ulClass = classNames('auto-complete-ul', {
    'fade-in-down': props?.data?.length
  })
  return (
    <ul className={ulClass}>
      {props?.data?.map((item) => (
        <li
          className="auto-complete-li"
          key={Math.random().toString()}
          onClick={(e) => {
            if (props.onSelected) {
              props.onSelected(e, item)
            }
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
