import { ReactNode } from 'react';
import { MenuItemProps } from '../MenuItem';
declare const useMenuItem: (props: MenuItemProps) => {
    children: ReactNode;
    className: string;
    style: import("react").CSSProperties | undefined;
    index: string;
    onClick: () => void;
};
export default useMenuItem;
