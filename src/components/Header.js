import React from 'react'
import '../styles/Header.scss';
import { FaWifi, FaPlane, FaBluetoothB, FaBatteryFull, FaRegMoon } from 'react-icons/fa';

function Header({title,left_btn,right_btn,friendsnum,title_icon}) {
  if(title === undefined){title = ''}
  if(left_btn === undefined){left_btn = ''}
  if(right_btn === undefined){right_btn = ''}
  if(friendsnum === undefined){friendsnum = ''}
  if(title_icon === undefined){title_icon = ''}

  return (
    <div className='header'>
      <div className='status_bar'>
        <div className='left_item'><FaPlane /><FaWifi /></div>
        <div className='center_item'><span>17</span>:<span>33</span></div>
        <div className='right_item'><FaRegMoon /><FaBluetoothB /><span><span>100</span>%</span><FaBatteryFull /></div>
      </div>
      <div className='title_bar'>
        <h1>{title} {title_icon}<span>{friendsnum}</span></h1>
        <div className='left_item'>{left_btn}</div>
        <div className='right_item'>{right_btn}</div>
      </div>
    </div>
  )
}

export default Header