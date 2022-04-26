import React, { Component, useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import profileimg from '../data/profileimg.json';
import '../styles/Friends.scss';
import Header from '../components/Header';
import Nav from '../components/Nav';
import MemberList from '../components/MemberList';
import { FaCog, FaSearch, FaTimes } from 'react-icons/fa';

 function Friends(){
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
    <div className='friends'>
    <Header title="Friends" friendsnum="1" left_btn="Manage" right_btn={<FaCog />} />
    <div className='main'>
      <form className='search_box'>
        <fieldset className='search_inner'>
          <legend className='blind'>검색창</legend>
          <FaSearch />
          <input type="search" name='search' id='search' placeholder='Find firends, chats, Plus Friends' />
        </fieldset>
      </form>
      <section className='main_section'>
      <header><h2>My Profile</h2></header> 
        <Link to="/more">
        <span className='myimg'><img src={profileimg[0].image} alt="내프로필 이미지" /></span>
        <span className='myname'>{members[0]?.name}</span>
        </Link>
      </section>
    <section className='main_section'>
    <header><h2>friends</h2></header> 
    <ul>
    {members.map((member,index) => {
      if (member.id > 1){
        return(<MemberList 
              key={member.id}
              id = {member.id}
              name = {member.name}
              email = {member.email}
              img = {profileimg[index].image} />
              )
            }
          return false;
        })}
    </ul>
    </section>
     </div>
    <Nav friend="on" />
    </div>
  )
}

export default Friends