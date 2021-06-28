/// <reference types="react" />
import './index.less';
declare type CardProps = {
    children?: React.ReactNode;
    title?: React.ReactNode;
    bodyStyle?: React.CSSProperties;
    headStyle?: React.CSSProperties;
};
declare const _default: (props: CardProps) => JSX.Element;
export default _default;
