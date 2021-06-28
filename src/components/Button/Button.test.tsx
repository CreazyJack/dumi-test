/*
 * @Description: Test Button
 * @Date: 2021-05-13 15:38:35
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-14 15:10:07
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from '.';

const defaultProps: ButtonProps = { type: 'default', shape: 'round', size: 'middle' };

const differentProps: ButtonProps = {
  ...defaultProps,
  size: 'large',
  type: 'primary',
  danger: true,
  onClick: jest.fn(),
  className: 'test-btn',
};

const linkProps: ButtonProps = {
  ...differentProps,
  type: 'link',
  href: 'https://www.baidu.com',
};

const disabledProps: ButtonProps = {
  ...differentProps,
  disabled: true,
};

const disabledLinkProps: ButtonProps = {
  ...linkProps,
  ...disabledProps,
};

const testFn = (props: ButtonProps) => () => {
  const { type, className, size, disabled, onClick, danger } = props;
  const tagname = type === 'link' ? 'A' : 'BUTTON';
  const text = 'this is button text';
  const isDisabledLink = disabled && type === 'link';
  const wrapper = render(<Button {...props}>{text}</Button>);
  const element = wrapper.getByText(text);
  // base test
  expect(element.tagName).toBe(tagname);
  expect(element.className.includes('sp-btn')).toBeTruthy();
  // className test
  if (className) expect(element.className.includes(className)).toBeTruthy();
  if (size) expect(element.className.includes(`btn-${size}`)).toBeTruthy();
  if (type) expect(element.className.includes(`btn-${type}`)).toBeTruthy();
  if (disabled) expect(element.className.includes('btn-disabled')).toBeTruthy();
  if (danger) expect(element.className.includes('btn-danger')).toBeTruthy();
  if (isDisabledLink) expect(element.className.includes('btn-disabled-link')).toBeTruthy();
  // click test
  if (onClick) {
    fireEvent.click(element);
    if (!disabled) expect(onClick).toHaveBeenCalled();
    else expect(onClick).toHaveBeenCalledTimes(2);
  }
  // native props test
  if (disabled) {
    expect(element.onclick).toBeFalsy();
    if (type !== 'link') expect((element as HTMLButtonElement).disabled).toBeTruthy();
    else {
      expect((element as HTMLAnchorElement).href).toBeFalsy();
      expect((element as HTMLAnchorElement).target).toBeFalsy();
    }
  }
};

describe('test button component', () => {
  it('default button', testFn(defaultProps));
  it('based on different props', testFn(differentProps));
  it('link and href is provided', testFn(linkProps));
  it('disabled', testFn(disabledProps));
  it('disabled link', testFn(disabledLinkProps));
});
