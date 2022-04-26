import React from 'react';
import '../styles/Profile.scss';
import {Link, useLocation} from 'react-router-dom';
import { FaComment, FaPencilAlt, FaTimes, FaUser } from 'react-icons/fa';
import Header from '../components/Header';


function Profile() {
    const location = useLocation();
    const {name,email,img} = location.state;

  return (
    <div className='profile'>
        <Header left_btn={<Link to='/'><FaTimes /></Link>} right_btn={<FaUser />}/>
        <div className='main'>
        <section className='background'><h2 className='blind'>My profile background</h2></section>
        <section className='profile_main'>
            <h2 className='blind'>my profile info</h2>
            <div className='profile_img'><img src={img} alt={name} /></div>
            <div className='profile_cont'>
                <span className='profile_name'>{name}</span>
                <input type="mail" className='profile_email' placeholder={email} />
                <ul className='profile_menu'>
                    <li><Link to="/chatting"><span><FaComment /></span>Chatroom</Link></li>
                    <li><Link to="/"><span><FaPencilAlt /></span>Edit Profile</Link></li>
                </ul>
            </div>
        </section>
        </div>
        </div>
  )
}

export default Profile