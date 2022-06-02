import styled from "styled-components";
import Header from "../../components/Header";

const BaseLayout = ({ children }) => {
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
