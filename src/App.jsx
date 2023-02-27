import React from 'react';
import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { useState } from "react";
import "./App.css";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/ProjectsPage'));
const ThirdPage = lazy(() => import('./pages/ThirdPage/ThirdPage'));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />        
          <Route path="third" element={<ThirdPage />} />        
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
   );
};

