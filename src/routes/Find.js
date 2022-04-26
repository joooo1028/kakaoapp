import React from 'react'
import Header from '../components/Header'
import { FaAddressBook, FaQrcode, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import Nav from '../components/Nav'
import '../styles/Find.scss'

function Find() {
  return (
    <div className='find'>
    <Header title="Find" left_btn="Edit" />
    <div className='main'>
        <ul className='find_method'>
        <li><span><FaAddressBook />Find</span></li>
        <li><span><FaQrcode />QR Code</span></li>
        <li><span><FaMobileAlt />Shake</span></li>
        <li><span><FaEnvelope />Invite via SNS</span></li>
        </ul>
        <section className='recommend_section'>
            <header><h2>Recommended Friends</h2></header>
            <ul>
                <li>You Have no recommended friends.</li>
            </ul>
        </section>
    </div>
    <Nav find="on"/>
    </div>
  )
}

export default Find