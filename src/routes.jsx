import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Documents from './steps/documents';
import Form from './steps/form';
import Video from './steps/video';

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Form />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/video" element={<Video />} />
    </Routes>
  );
}

export default AppRoutes;
