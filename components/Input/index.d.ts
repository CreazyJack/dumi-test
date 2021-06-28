import React from 'react';
import { SizeType } from '../typings';
import './styles/index.less';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
    prefixCls?: string;
    size?: SizeType;
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    allowClear?: boolean;
    bordered?: boolean;
}
declare const _default: (props: InputProps) => JSX.Element;
export default _default;
