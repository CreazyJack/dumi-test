import React from 'react';
import './index.less';
interface ZoomTransitionProps {
    active: boolean;
    direction?: 'top' | 'right' | 'bottom' | 'left';
    timeout?: number;
    unmountOnExit?: boolean;
    wrapper?: boolean;
}
declare const ZoomTransition: React.FC<ZoomTransitionProps>;
export default ZoomTransition;
