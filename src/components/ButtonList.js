import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name='All' />
      <Button name='Game' />
      <Button name='Song' />
      <Button name='Live' />
      <Button name='Cricket' />
      <Button name='Socer' />
      <Button name='Nems' />
      <Button name='Coocking' />
      <Button name='Valentines' />
    </div>
  )
}

export default ButtonList