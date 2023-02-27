import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Link, Header } from './SharedLayout.styled';
import {Loader} from "../Loader/Loader";
import { DarkMode } from "../DarkMode/DarkMode";

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/third">Layout3</Link>
        </nav>
      <DarkMode />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      
    </div>
  );
};
