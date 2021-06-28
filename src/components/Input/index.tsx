/*
 * @Description: Input 包含 autocomplete 等
 * @Date: 2021-06-23 16:06:16
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-06-28 16:54:21
 */

import React from 'react';
import { SizeType } from '../typings';
import useInput from './hooks/useInput';
import './styles/index.less';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  prefixCls?: string;
  size?: SizeType;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  prefix?: React.ReactNode; // 前缀
  suffix?: React.ReactNode; // 后缀
  allowClear?: boolean;
  bordered?: boolean;
}

export default (props: InputProps) => {
  const { className, suffixClassName, prefixClassName } = useInput(props);
  return (
    <>
      {props.prefix ? <label className={prefixClassName}>{props.prefix}</label> : null}
      <input
        type="text"
        className={className}
        style={props.style}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
      {props.suffix ? <label className={suffixClassName}>{props.suffix}</label> : null}
    </>
  );
};
