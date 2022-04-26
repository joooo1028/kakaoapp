import React, {useState} from 'react';
import '../styles/Nav.scss';
import {Link} from 'react-router-dom';
import { FaUser, FaComment, FaSearch, FaEllipsisH } from 'react-icons/fa';


function Nav({friend, chat, find, more}) {
  if(friend === undefined){friend = ''}
  if(chat === undefined){chat = ''}
  if(find === undefined){find = ''}
  if(more === undefined){more = ''}

  return (
    <div className='nav'>
      <ul>
        <li className={friend}><Link to="/"><FaUser /><span>Friends</span></Link></li>
        <li className={chat}><Link to="/chats"><FaComment /><span>Chats</span></Link></li>
        <li className={find}><Link to="/find"><FaSearch /><span>Find</span></Link></li>
        <li className={more}><Link to="/more"><FaEllipsisH /><span>More</span></Link></li>
      </ul>
    </div>
  )
}

export default Nav