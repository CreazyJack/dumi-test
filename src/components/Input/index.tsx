/*
 * @Description: Input 包含 autocomplete 等
 * @Date: 2021-06-23 16:06:16
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-07-02 17:29:15
 */

import React from 'react'
import { SizeType } from '../typings'
import useInput from './hooks/useInput'
import './styles/index.less'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'autoComplete'> {
  prefixCls?: string
  size?: SizeType
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
  prefix?: React.ReactNode // 前缀
  suffix?: React.ReactNode // 后缀
  allowClear?: boolean
  autoComplete?: (condition: string, extend?: {}) => string[] // 自动补全
}

export interface CompleteExtend {
  data?: string[]
}

export default (props: InputProps) => {
  const { suffixClassName, prefixClassName, inputProps } = useInput(props)
  return (
    <React.Fragment>
      {props.prefix ? <label className={prefixClassName}>{props.prefix}</label> : null}
      <input {...inputProps} />
      {props.suffix ? <label className={suffixClassName}>{props.suffix}</label> : null}
    </React.Fragment>
  )
}
