/*
 * @Description: SubMenu
 * @Date: 2021-05-06 10:08:14
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-14 19:57:08
 */

import React, { CSSProperties, FC, FunctionComponentElement, ReactNode } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { MenuItemProps } from './MenuItem';
import ZoomTransition from '../transition/zoom';
import RotateTransition from '../transition/rotate';
import useSubMenu from './hooks/useSubMenu';

export type SubMenuChildrenType =
  | FunctionComponentElement<MenuItemProps>
  | Array<FunctionComponentElement<MenuItemProps>>;

export interface SubMenuProps {
  className?: string;
  style?: CSSProperties;
  title: string;
  children?: ReactNode;
}

const SubMenu: FC<SubMenuProps> = (props) => {
  const { children, onUlHover, onTitleClick, boxClass, ulClass, visible } = useSubMenu(props);
  return (
    <li className={boxClass} {...onUlHover}>
      <div className="sub-menu-title" onClick={onTitleClick}>
        <div>{props.title}</div>
        <div className="sub-menu-title-suffix">
          <RotateTransition active={visible}>
            <FiChevronDown className="sub-menu-title-suffix-icon" />
          </RotateTransition>
        </div>
      </div>
      <ZoomTransition active={visible}>
        <ul className={ulClass}>{children}</ul>
      </ZoomTransition>
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
