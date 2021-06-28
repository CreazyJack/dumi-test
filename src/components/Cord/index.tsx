/*
 * @Description: Card
 * @Date: 2021-06-25 10:35:17
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-06-25 10:35:47
 */

import './index.less'

type CardProps = {
  children?: React.ReactNode
  title?: React.ReactNode
  bodyStyle?: React.CSSProperties
  headStyle?: React.CSSProperties
}

export default (props: CardProps) => {
  return (
    <section className='sp-card'>
      {props.title ? (
        <div className='sp-card-head' style={props.headStyle}>
          {props.title}
        </div>
      ) : null}
      <div className='sp-card-body' style={props.bodyStyle}>
        {props.children}
      </div>
    </section>
  )
}
