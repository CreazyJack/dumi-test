import type { InputProps } from '..'
import classnames from 'classnames'

export default (props: InputProps) => {
  const size = props.size || 'middle'
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
  return {
    className,
    suffixClassName,
    prefixClassName,
    defaultValue: props.value != null ? undefined : props.defaultValue,
    value: props.value,
    onChange: props.onChange,
    placeholder: props.placeholder,
    type: 'text'
  }
}
