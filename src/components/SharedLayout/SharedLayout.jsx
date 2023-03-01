import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Link, Header } from './SharedLayout.styled';
import {Loader} from "../Loader/Loader";
import { DarkMode } from "../DarkMode/DarkMode";
import { Logo } from "../Logo/Logo";

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/">
            <Logo />
          </Link>
          <div>
            <Link to="/projects">Projects</Link>
            <Link to="/third">Layout3</Link>
          </div>
          <DarkMode />
        </nav>        
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      
    </div>
  );
};
