import type { InputProps } from '..'
import classnames from 'classnames'
import omitObj from '../../utils/omitObj'

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
  const baseProps = {
    suffixClassName,
    prefixClassName
  }
  const inputProps = {
    ...omitObj(props, ['size']),
    className,
    value: props.value,
    defaultValue: props.value != null ? undefined : props.defaultValue,
    type: props.type ?? 'text'
  }
  return {
    ...baseProps,
    inputProps
  }
}
