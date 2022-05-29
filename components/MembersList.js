import styled from "styled-components";
import Image from "next/image";

const MembersList = ({ list }) => {
  console.log(list);
  const List = styled.div`
    overflow-x: scroll;
    display: flex;
    width: calc(100vw - 96px);
    height: 460px;
    column-gap: 60px;
  `;
  const Member = styled.div`
    border: 1px solid rgb(240, 240, 240, 0.6);
    flex-basis: 20%;
    flex-shrink: 0;
    width: 250px;
    height: 400px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background-color: white;
    -moz-box-shadow: 32px 36px 50px -51px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 32px 36px 50px -51px rgba(0, 0, 0, 0.58);
    -ms-box-shadow: 32px 36px 50px -51px rgba(0, 0, 0, 0.58);
    box-shadow: 32px 36px 50px -51px rgba(0, 0, 0, 0.58);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Spacer = styled.div`
    flex: 1;
  `;

  const Name = styled.h1`
    font-size: 36px;
    color: #4e4e4e;
    font-weight: bold;
  `;

  const Avater = styled.div`
    flex-shrink: 0;
    img {
      border-radius: 100%;
    }
  `;

  const LinkButton = styled.button`
    width: 100%;
    height: 45px;
    color: #000;
    background-color: #fff;
    border: 0.5px solid #4e4e4e;
    border-radius: 45px;
    position: relative;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;

    :hover {
      border: none;
      background: #56ccf2;
      background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
      background: linear-gradient(to right, #2f80ed, #56ccf2);

      background-color: #2eb7e5;
      box-shadow: 0px 10px 10px rgba(46, 229, 157, 0.2);
      color: #fff;
      transform: translateY(-4px);
    }

    a {
      display: block;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      font-weight: 500;
    }
  `;
  const LinkButtonWrap = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const MemberInformationContainer = styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <List>
      {list.map((data) => {
        return (
          <Member key={data.id}>
            <Spacer />
            <MemberInformationContainer>
              <Avater>
                <Image src={data.iconURL} width={140} height={140}></Image>
              </Avater>
              <Name>{data.name}</Name>
              <p>{data.belongTo}</p>
            </MemberInformationContainer>
            <Spacer />
            <LinkButtonWrap>
              <LinkButton>
                <a
                  target="_blank"
                  href={data.portfolioURL}
                  rel="noopener noreferrer"
                >
                  click here
                </a>
              </LinkButton>
            </LinkButtonWrap>
            <Spacer />
          </Member>
        );
      })}
    </List>
  );
};

export default MembersList;
