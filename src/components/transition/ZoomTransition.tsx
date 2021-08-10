/*
 * @Description: ZoomTransition
 * @Date: 2021-05-08 11:06:22
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-14 20:03:09
 */

import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.less'

interface ZoomTransitionProps {
  active: boolean
  direction?: 'top' | 'right' | 'bottom' | 'left'
  timeout?: number
  unmountOnExit?: boolean
  wrapper?: boolean
  children?: React.ReactNode
}

export default (props: ZoomTransitionProps) => {
  return (
    <CSSTransition
      in={props.active}
      timeout={props.timeout ?? 300}
      classNames={`zoom-in-${props.direction ?? 'top'}`}
      unmountOnExit={props.unmountOnExit ?? true}
    >
      {props.wrapper ? <div>{props.children}</div> : props.children}
    </CSSTransition>
  )
}
