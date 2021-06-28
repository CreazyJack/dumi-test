import { FunctionComponentElement } from 'react';
import { MenuProps, SelectCallback } from '..';
import { MenuItemProps } from '../MenuItem';
declare const useMenu: (props: MenuProps) => {
    children: (FunctionComponentElement<import("../SubMenu").SubMenuProps> | FunctionComponentElement<MenuItemProps>)[];
    className: string;
    style: import("react").CSSProperties | undefined;
    onSelect: SelectCallback;
    activeIndex: string;
};
export default useMenu;
