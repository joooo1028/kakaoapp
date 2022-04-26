import React, { Component, useState, useEffect } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { FaCaretDown, FaSearch } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import profileimg from '../data/profileimg.json';
import axios from 'axios';
import ChatList from '../components/ChatList'
import '../styles/Chats.scss'
import { FaComment } from 'react-icons/fa'

function Chats() {
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
    <div className='chats'>
    <Header title="Chats" left_btn="Edit" title_icon={<FaCaretDown/>} />
    <div className='main'>
    <form className='search_box'>
        <fieldset className='search_inner'>
          <legend className='blind'>검색창</legend>
          <FaSearch />
          <input type="search" name='search' id='search' placeholder='Find firends, chats, Plus Friends' />
        </fieldset>
      </form>
      <section className='main_section'>
        <header className='blind'><h2>Friends</h2></header>
        <ul>
        {members.map((member,index) => {
      if (member.id > 1){
        return(<ChatList 
              key={member.id}
              id = {member.id}
              name = {member.name}
              email = {member.email}
              img = {profileimg[index].image} 
              message = {member.company.catchPhrase}
              />
              
              )
            }
          return false;
        })}
        </ul>
      </section>
      <div className='chat_fa_btn'><span><FaComment /></span></div>
    </div>
    <Nav chat="on"/>
    </div>
  )
}

export default Chats