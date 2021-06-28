/*
 * @Description: Input 测试
 * @Date: 2021-06-25 11:46:33
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-06-25 14:47:39
 */

import Input, { InputProps } from '.'
import { render } from '@testing-library/react'

const baseProps: InputProps = {
  size: 'large',
  value: 'large input',
  suffix: 'input-suffix',
  prefix: 'input-prefix',
  className: 'input-test',
  style: { color: 'red' },
}

const testFn = (props: InputProps) => () => {
  const wrapper = render(<Input {...props} />)
  const element = wrapper.getByDisplayValue('large input')
}

describe('test input component', () => {
  it('input with different props', testFn(baseProps))
})
