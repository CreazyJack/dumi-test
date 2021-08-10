/*
 * @Description: input hook
 * @Date: 2021-06-28 17:01:24
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-07-30 17:57:22
 */

import React from 'react'
import classnames from 'classnames'
import omitObj from '../../utils/omitObj'
import { InputProps } from '..'
import { AutoCompleteUlProps } from '../AutoCompleteUl'

export default (props: InputProps) => {
  const size = props.size || 'middle'
  const [value, setValue] = React.useState(props.value || props.defaultValue || '')
  const [autoCompleteList, setAutoCompleteList] = React.useState<string[]>([])
  const className = classnames(
    'sp-input',
    `sp-input-${size}`,
    {
      'sp-input-has-prefix': props.prefix != null,
      'sp-input-has-suffix': props.suffix != null
    },
    props.className
  )
  const suffixClassName = classnames('sp-input-suffix-label', `sp-input-${size}`)
  const prefixClassName = classnames('sp-input-prefix-label', `sp-input-${size}`)

  // including input onChange and auto complete
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (props.onChange) props.onChange(e)
    if (props.autoComplete) {
      const { data = [], customFn } = props.autoComplete
      if (e.target.value) {
        if (customFn) setAutoCompleteList(customFn(e.target.value, data))
        else setAutoCompleteList(data.filter((item) => item.includes(e.target.value)))
      } else setAutoCompleteList([])
    }
  }

  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    ...omitObj(props, ['size']),
    className,
    value,
    type: props.type ?? 'text',
    onChange
  }

  const autoCompleteData: AutoCompleteUlProps = {
    data: autoCompleteList,
    onSelected: (e, v) => {
      setValue(v)
      if (props.autoComplete?.onSelected) props.autoComplete?.onSelected(e, v)
      setAutoCompleteList([])
    }
  }

  return { inputProps, suffixClassName, prefixClassName, autoCompleteData }
}
