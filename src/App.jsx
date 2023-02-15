import React from 'react';
import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { useState } from "react";
import "./App.css";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SecondPage = lazy(() => import('./pages/SecondPage/SecondPage'));
const ThirdPage = lazy(() => import('./pages/ThirdPage/ThirdPage'));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="second" element={<SecondPage />} />        
          <Route path="third" element={<ThirdPage />} />        
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
   );
};

