import React, { Component, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MemberList({id,name,email,img}) {

  return (
    <>
    <li>
    <Link to="/profile" state={{name,email,img}}>
        <span className='profile_img'><img src={img} alt={name}/></span>
        <span className='profile_name'>{name}</span>
        <span className='profile_messages'>{email}</span>
      </Link>
    </li>
    </>
  );
}



export default MemberList