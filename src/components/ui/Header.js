import React from 'react'
import MenuItems from './MenuItems'
import Imagen from './Imagen'
import img from '../../assets/image/logo-fares.svg'
import './Header.css'

const Header = () => {
  const menus = ['Home', 'About Us', 'Contact Us']
  return (
    <div className='bg-header'>
      <div className='header-container'>
        <Imagen img={ img } type='logo' alt='fares' />
        <MenuItems items={ menus } direction='horizontal' />
      </div>
    </div>
  )
}

export default Header