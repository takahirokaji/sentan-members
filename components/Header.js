import React from "react";
import Image from "next/image";
import Logo from "../public/app_logo.png";
import styled from "styled-components";

const Header = () => {
  const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px;
    width: 100vw;
  `;

  const Spacer = styled.div`
    flex: 1;
  `;
  return (
    <Header>
      <Image src={Logo} alt="app_logo" width={250} height={100}></Image>
      <div>メンバー一覧</div>
      {/* <Spacer></Spacer>
      <div>みんなの情報</div> */}
    </Header>
  );
};

export default Header;
