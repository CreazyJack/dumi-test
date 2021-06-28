/*
 * @Description: 未添加描述
 * @Date: 2021-05-08 11:06:22
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-14 20:03:09
 */

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.less';

interface ZoomTransitionProps {
  active: boolean;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  timeout?: number;
  unmountOnExit?: boolean;
  wrapper?: boolean;
}

const ZoomTransition: React.FC<ZoomTransitionProps> = (props) => {
  const { children, direction, active, unmountOnExit, timeout, wrapper } = props;
  return (
    <CSSTransition
      in={active}
      timeout={timeout ?? 300}
      classNames={`zoom-in-${direction ?? 'top'}`}
      unmountOnExit={unmountOnExit ?? true}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

export default ZoomTransition;
