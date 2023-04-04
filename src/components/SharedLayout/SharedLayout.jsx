import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAsideMenuIsOpen } from "../../hooks/useAsideMenuIsOpen";
import { Header } from "./SharedLayout.styled";
import { Loader } from "../Loader/Loader";
import { NavBar } from "../NavBar/NavBar";
import { AsideMenu } from "../AsideMenu/AsideMenu";
import { BoxSection } from "../Section/Section";
import { Connect } from "../Connect/Connect";
import { Footer } from "../Footer/Footer";
import { GoToTop } from "../GoToTop/GoToTop";

export const SharedLayout = () => {
  // const [isOpen, setIsOpen] = useState(false)
  const { isOpen, setIsOpen } = useAsideMenuIsOpen();

  return (
    <>
      <Header>
        <NavBar setIsOpen={setIsOpen} />
        <AsideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <BoxSection bgColor="isDark">
        <Connect />
      </BoxSection>
      <Footer />
      <GoToTop />
    </>
  );
};
