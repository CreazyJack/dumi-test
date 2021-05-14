/*
 * @Description: menuItem
 * @Date: 2021-05-02 12:34:46
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-14 16:13:43
 */

import React, { CSSProperties, FC, ReactNode } from 'react';
import { SelectCallback } from '.';
import useMenuItem from './hooks/useMenuItem';

export interface MenuItemProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  index?: string;
  disabled?: boolean;
  onClick?: SelectCallback;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { children, ...params } = useMenuItem(props);
  return <li {...params}>{children}</li>;
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
