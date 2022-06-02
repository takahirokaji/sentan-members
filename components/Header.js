import React from "react";
import Image from "next/image";
import Logo from "../public/app_logo.png";
import styled from "styled-components";
import { useState } from "react";
import ModalWindow from "./ModalWindow";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  // const [modalwindowIsShown, setModalwindowIsShown] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  return (
    <StyledHeader>
      <Image src={Logo} alt="app_logo" width={250} height={100}></Image>
      <Spacer>
        <PageList>
          <li className="selected">Members</li>
        </PageList>
      </Spacer>
      <ModalWindow isShow={isShow}></ModalWindow>
      <AddMemberButton onClick={() => setIsShow(true)}>
        ＋ メンバー追加
      </AddMemberButton>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 100vw;
`;

const Spacer = styled.div`
  flex: 1;
`;

const PageList = styled.ul`
  display: flex;
  li {
    list-style: none;
    margin-left: 20px;
    font-size: 16px;
  }
  .selected {
    color: #61d4b3;
    font-weight: bold;
  }
`;

const AddMemberButton = styled.button`
  font-size: 16px;
  width: 10em;
  height: 2.5em;
  background-color: unset;
  border: 1px solid #f26166;
  color: #f26166;
  font-weight: bold;
  border-radius: 100px;
  transition: all 0.3s ease 0s;
  :hover {
    cursor: pointer;
    background-color: #f26166;
    color: #fff;
    box-shadow: 0px 10px 10px rgba(46, 229, 157, 0.2);
    border: none;
    transform: translateY(-4px);
  }
`;
export default Header;
