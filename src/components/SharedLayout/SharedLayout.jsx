import { Suspense, useState } from "react";
import { Outlet } from 'react-router-dom';
import { useAsideMenuIsOpen } from "../../hooks/useAsideMenuIsOpen";
import { Header } from './SharedLayout.styled';
import {Loader} from "../Loader/Loader";
import { NavBar } from "../NavBar/NavBar";
import { AsideMenu } from "../AsideMenu/AsideMenu";

export const SharedLayout = () => {
  // const [isOpen, setIsOpen] = useState(false)
  const { isOpen, setIsOpen } = useAsideMenuIsOpen();

  return (
    <>
      <Header>
        <NavBar setIsOpen={setIsOpen} />  
        <AsideMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>      
    </>
  );
};
