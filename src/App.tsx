import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home';
import CV from './pages/CV';
import Books from './pages/Books';
import Posts from './pages/Posts';
import Lists from './pages/Lists';
import Projects from './pages/Projects';

const App = () => {
  return (
    <>
      <Helmet defaultTitle="aishere.xyz" titleTemplate="%s | aishere.xyz">
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/books" element={<Books />} /> */}
        <Route path="/posts" element={<Posts />} />
        {/* <Route path="/lists" element={<Lists />} /> */}
        {/* Redirect all other routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;