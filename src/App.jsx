import React from 'react';
import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import "./App.css";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/ProjectsPage'));
const AboutMePage = lazy(() => import('./pages/AboutMePage/AboutMePage'));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />        
          <Route path="about" element={<AboutMePage />} />        
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
   );
};

