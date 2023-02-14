import React from 'react'

export const Box = (props: any) => {
  return (
    <button className='boardBox' onClick={props.onClick}>{props.value}</button>
  )
}