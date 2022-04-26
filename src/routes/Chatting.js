import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import '../styles/Chatting.scss';
import { FaPlus, FaSmile, FaMicrophone, FaAngleLeft, FaSearch, FaBars } from 'react-icons/fa';

function Chatting() {
    const now = new Date();
    const today = now.getDay();
    const newday = now.getDate();
    const newmonth = now.getMonth();
    const newyear = now.getFullYear();
    const nowhours = now.getHours();
    const nowminutes = now.getMinutes();
    let week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
    const todayLabel = week[today];
    let monthly = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
    const thismonth = monthly[newmonth];
    
    const location = useLocation();
    const {name,img} = location.state;

  return (
    <div className='chatting'>
    <Header title="Friend Name" left_btn={<Link to='/chats'><FaAngleLeft /></Link>} right_btn={<FaBars />}/>
    <div className='main'>
        <span className='date_info'>{todayLabel},{thismonth} {newday}, {newyear}</span>
        <div className='chat_box my'>
            <span className='chat'>Hello!</span>
            <span className='chat'>Hello! THis is a test message.</span>
            <span className='chat'>This is a test message</span>
            <span className='chat_time'><span>{nowhours}</span>:<span>{nowminutes}</span></span>
        </div>
        <div className='chat_box other'>
            <div className='other_info'>
                <Link to='/profile'><span className='profile_img'><img src={img} alt={name} /></span></Link>
                <span className='profile_name'>{name}</span>
            </div>
            <span className='chat'>And this is an answer</span>
            <span className='chat'>And this is an answer</span>
            <span className='chat'>And this is an answer</span>
            <span className='chat_time'><span>{nowhours}</span>:<span>{nowminutes}</span></span>
        </div>
    </div>
    <div className='footer'>
        <span className='plus_btn'><span><FaPlus /></span></span>
        <form action='/' method='post'>
            <fieldset className='text_box'>
                <legend className='blind'>채팅 입력창</legend>
                <label className='blind'>채팅입력</label>
                <input type="text" id='chatting' className='text_field' />
                <span className='emoticon_btn'><FaSmile /></span>
                <span className='voice_btn'><FaMicrophone /></span>
            </fieldset>
        </form>
    </div>
    </div>
  )
}

export default Chatting