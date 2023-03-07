import { Suspense, useState } from "react";
import { Outlet } from 'react-router-dom';
import { LinksWrapper, Link, Header } from './SharedLayout.styled';
import {Loader} from "../Loader/Loader";
import { DarkMode } from "../DarkMode/DarkMode";
import { Logo } from "../Logo/Logo";
import { ContactButton } from "../ContactButton/ContactButton";
import { ToolsMenu } from "../ToolsMenu/ToolsMenu";
import { AsideMenu } from "../AsideMenu/AsideMenu";

export const SharedLayout = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Header>
        <nav>
          <Link to="/">
            <Logo />
          </Link>
          <div>
            <Link to="/projects">Projects</Link>
            <Link to="/third">Layout3</Link>
          </div>
          <ToolsMenu /> 
          <button onClick={()=> setIsOpen(true)} type="button">open</button>  
        </nav>  
        <AsideMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      
    </>
  );
};
