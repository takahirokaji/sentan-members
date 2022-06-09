import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import throttle from "lodash.throttle";

const BaseLayout = ({ children }) => {
  // const [mainPosition, setMainPosition] = useState(0);
  // const [scroll, setScroll] = useState(0);
  // const mainElements = useRef(null);
  // const testRef = useRef(null);
  // useEffect(() => {
  //   console.log(mainElements);
  // }, []);

  // const handleScroll = () => {
  //   mainElements.window.scrollY ? setScroll(true) : setScroll(false);
  // };

  // const toggleVisibility = () => {
  //   window.scrollY > 10 ? setIsVisible(true) : setIsVisible(false);
  // };
  // const toggleVisibility = () => {
  //   window.scrollY > 10 ? setIsVisible(true) : setIsVisible(false);
  // };

  // const handleScroll = throttle((event) => {
  //   this.setState({
  //     scrollTop: this.node.scrollTop,
  //   });
  // }, 100);

  // const handleScroll = () => {
  //   if (!isVisible) {
  //     // testRef.current.scrollIntoView({
  //     //   behavior: "smooth",
  //     //   block: "end",
  //     // });
  //   }
  //   setIsVisible(true);
  // };

  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility);
  //   // if (mainElements && mainElements.current) {
  //   //   mainElements.current.addEventListener("scroll", toggleVisibility);
  //   // }
  //   return () => window.removeEventListener("scroll", toggleVisibility);
  //   // mainElements.current.removeEventListener("scroll", toggleVisibility);
  // }, []);
  return (
    <>
      <AppContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <Main>{children}</Main>
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  /* color: black; */
`;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10000000;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(4px);
`;

const Main = styled.main`
  background-color: aliceblue;
  padding: 48px;
`;

export default BaseLayout;
