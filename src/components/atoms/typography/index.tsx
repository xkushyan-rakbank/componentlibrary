import React from 'react'
export interface ITypography {
  text: string
}
export const Typography = ({ text }: ITypography) => {
  return <div className="text">This is test text: {text}</div>
}
