import { ModalWrapper, Modal } from "./AsideMenu.styled";

export const AsideMenu = ({ isOpen, setIsOpen }) => {
  return (
    <ModalWrapper isOpen={isOpen} onClick={()=>setIsOpen(false)}>
      <Modal>modal content</Modal>
    </ModalWrapper>
  );
};

