import React from 'react';
import './index.less';
interface RotateTransitionProps {
    active: boolean;
    timeout?: number;
    wrapper?: boolean;
}
declare const RotateTransition: React.FC<RotateTransitionProps>;
export default RotateTransition;
