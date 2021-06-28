/// <reference types="react" />
import { ButtonProps } from '..';
declare const useButton: (props: ButtonProps) => {
    className: string;
    children: true | import("react").ReactChild | import("react").ReactFragment | import("react").ReactPortal;
    disabled: boolean | undefined;
    onClick: import("react").MouseEventHandler<HTMLElement> | undefined;
    target: string | undefined;
    href: string | undefined;
    style: import("react").CSSProperties | undefined;
};
export default useButton;
