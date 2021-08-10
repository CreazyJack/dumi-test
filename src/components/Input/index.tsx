/*
 * @Description: Input 包含 autocomplete 等
 * @Date: 2021-06-23 16:06:16
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-08-03 09:59:18
 */

import React from 'react'
import AutoCompleteUl, { AutoCompleteUlProps } from './AutoCompleteUl'
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
  autoComplete?: AutoCompleteUlProps // 自动补全
}

export default (props: InputProps) => {
  const { suffixClassName, prefixClassName, autoCompleteData, inputProps } = useInput(props)
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {props.prefix ? <label className={prefixClassName}>{props.prefix}</label> : null}
      <input {...inputProps} />
      {props.suffix ? <label className={suffixClassName}>{props.suffix}</label> : null}
      {autoCompleteData.data?.length ? <AutoCompleteUl {...autoCompleteData} /> : null}
    </span>
  )
}
