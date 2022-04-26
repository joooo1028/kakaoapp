import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import profileimg from '../data/profileimg.json';
import Header from '../components/Header';
import { FaCog, FaComment, FaSmile, FaPaintBrush, FaHandPeace, FaUserCircle, FaInfoCircle, FaUtensilSpoon,
    FaHome, FaTv, FaPencilAlt, FaGraduationCap, FaUniversity, FaWonSign, FaVideo} from 'react-icons/fa';
import Nav from '../components/Nav';
import '../styles/More.scss';

function More() {
    const [members, setmemebers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const userlist = async () => {
        try {
        setLoading(true);
        const users = await axios.get('https://jsonplaceholder.typicode.com/users');
        setmemebers(users.data);
        } catch(e){
        setError(e);
        }
        setLoading(false);
    };
    useEffect(() => {
        userlist()
    },[]);

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러가 발생했습니다.</div>;

    if(!members) return null;

  return (
    <div className='more'>
    <Header title="More" right_btn={<FaCog />}/>
    <div className='main'>
        <section className='user_info'>
            <h2 className='blind'>사용자 정보</h2>
            <span className='profile_img'><img src={profileimg[0].image} alt="내 프로필 이미지" /></span>
            <span className='profile_info'>
                <span className='profile_name'>{members[0]?.name}</span>
                <span className='profile_email'>{members[0]?.email}</span>
            </span>
            <span className='chat_img'><FaComment /></span>
        </section>
        <section className='user_menu'>
            <h2 className='blind'>사용자 메뉴</h2>
            <ul>
            <li><span><FaSmile />Emoticons</span></li>
            <li><span><FaPaintBrush />Themes</span></li>
            <li><span><FaHandPeace />Plus Friends</span></li>
            <li><span><FaUserCircle />Account</span></li>
            </ul>
        </section>
        <section className='plus_friends'>
            <header>
                <h2>Plus Friends</h2>
                <span><FaInfoCircle />Learn More</span>
            </header>
            <ul className='plus_list'>
            <li><span><FaUtensilSpoon />Order</span></li>
            <li><span><FaHome />Store</span></li>
            <li><span><FaTv />Tv Channel/Radio</span></li>
            <li><span><FaPencilAlt />Creation</span></li>
            <li><span><FaGraduationCap />Education</span></li>
            <li><span><FaUniversity />Politics/Society</span></li>
            <li><span><FaWonSign />Fianace</span></li>
            <li><span><FaVideo />Movies/Music</span></li>
            </ul>
        </section>
        <section className='more_app'>
            <h2 className='blind'>앱 더보기</h2>
            <ul>
            <li><span><span className='app_icon'></span>KaKao Stroy</span></li>
            <li><span><span className='app_icon'></span>Path</span></li>
            <li><span><span className='app_icon'></span>KaKao friends</span></li>
            </ul>
        </section>
    </div>
    <Nav more="on"/>
    </div>
  )
}

export default More