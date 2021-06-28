/// <reference types="react" />
import { SubMenuProps } from '../SubMenu';
declare const useSubMenu: (props: SubMenuProps) => {
    children: import("react").FunctionComponentElement<import("../MenuItem").MenuItemProps>[];
    visible: boolean;
    boxClass: string;
    ulClass: string;
    onTitleClick: ((e: React.MouseEvent) => void) | undefined;
    onUlHover: {
        onMouseEnter: ((e: React.MouseEvent) => void) | undefined;
        onMouseLeave: ((e: React.MouseEvent) => void) | undefined;
    };
};
export default useSubMenu;
