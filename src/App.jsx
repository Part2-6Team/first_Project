/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './color.css';
import MainPage from './pages/MainPage';
import SendMessagePage from './pages/SendMessagePage';
import CreatedRollingPage from './pages/CreatedRollingPage';
import CreatedRolloingPageEdit from './pages/CreatedRollingPageEdit';
import ListPage from './pages/ListPage';
import MakePostPage from './pages/MakePostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="post/:id" element={<CreatedRollingPage />} />
        <Route path="post/:id/edit" element={<CreatedRolloingPageEdit />} />
        <Route path="post/:id/message" element={<SendMessagePage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="post" elemet={<MakePostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
