import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Chatting from './routes/Chatting';
import Find from './routes/Find';
import More from './routes/More';
import Profile from './routes/Profile';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<Friends/>} />
      <Route path='/chats' element={<Chats/>} />
      <Route path='/chatting' element={<Chatting />} />
      <Route path='/find' element={<Find />} />
      <Route path='/more' element={<More />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
