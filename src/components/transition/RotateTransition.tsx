/*
 * @Description: rotate transition
 * @Date: 2021-05-08 12:00:53
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-08-03 14:16:48
 */

import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.less'

interface RotateTransitionProps {
  active: boolean
  timeout?: number
  wrapper?: boolean
  children?: React.ReactNode
}

export default (props: RotateTransitionProps) => {
  const { children, active, timeout, wrapper } = props
  return (
    <CSSTransition in={active} timeout={timeout ?? 300} classNames="rotate-transition">
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}
