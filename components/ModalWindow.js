import styled from "styled-components";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { storage, db } from "../Firebase/firebase";
import Image from "next/image";
const StyledModalWindow = styled.div`
  ${({ isClose, isShow }) =>
    isClose
      ? `visibility: hidden;`
      : isShow
      ? `visibility: visible;`
      : `visibility: hidden;`}
  z-index: 1000;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vmin;
  text-align: center;
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  height: 90vh;
  width: 80vh;
  z-index: 2;
  > span {
    position: absolute;
    top: 4vmin;
    right: 4vmin;
  }
`;

const Content = styled.div`
  form {
    display: flex;
    flex-direction: column;
    height: 90%;
    div {
      padding: 12px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      input {
        border: 4px solid #eee;
        background-color: #eee;
        font-size: 20px;
        height: 40px;
        width: 100%;
        /* padding-left: 8px; */
        border-radius: 5px;
        :hover {
          cursor: pointer;
        }
        :focus {
        }
      }
      label {
        font-size: 16px;
      }
      select {
        font-size: 20px;
        /* width: px; */
        padding-left: 10px;
        height: 40px;
        color: #4e4e4e;
        border: #eee 2px solid;
        border-radius: 5px;
        option {
          font-size: 16px;
        }
      }
    }
  }
`;

const CloseButton = styled.span`
  display: block;
  position: relative;
  width: 30px;
  height: 30px;
  border: 2px solid #f44;
  border-radius: 50%;
  background: #fff;
  transition: background-color 0.4s linear;
  :hover {
    cursor: pointer;
    background: #f44;
    ::before,
    ::after {
      background: #fff;
    }
  }

  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 16px;
    background: #f44;
  }

  ::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  ::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const ModalWindow = ({ className, isShow, isShowCloseButton }) => {
  const [isClose, setIsClose] = useState(false);

  const [state, setState] = useState({
    name: "",
    iconURL: "",
    grade: "",
    belongTo: "",
    portfolioURL: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSelectBox = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(event);
    setState({ ...state, [event.target.name]: event.target.id });
  };

  const handleFile = async (event) => {
    let file = event.target.files[0];
    let fileName = file.name;
    // const ImageRef = ref(storage, fileName);
    const ImagesRef = ref(storage, `images/${fileName}`);

    let uploadedFileURL;

    await uploadBytes(ImagesRef, file);
    await getDownloadURL(ref(storage, ImagesRef)).then((url) => {
      uploadedFileURL = url;
    });

    setState({ ...state, iconURL: uploadedFileURL });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // await addDoc(collection(db, "sentan-2022-early"), {
    //   name: state.name,
    //   iconURL: state.iconURL,
    //   grade: state.grade,
    //   belongTo: state.belongTo,
    //   portfolioURL: state.portfolioURL,
    //   createdAt: Timestamp.now(),
    // });
    await addDoc(collection(db, "sentan-2022-early"), {
      name: state.name,
      iconURL: "https://source.unsplash.com/1000x1000",
      grade: state.grade,
      belongTo: state.belongTo,
      portfolioURL: "https://www.google.com/?hl=ja",
      createdAt: Timestamp.now(),
    }).then(() => {
      setIsClose(true);
    });
  };

  const grade = ["M2", "M1", "B4", "B3", "B2", "B1"];
  const belongTo = [
    "行動情報学科",
    "情報社会学科",
    "情報科学科",
    "総合科学技術研究科",
  ];
  return (
    <StyledModalWindow className={className} isShow={isShow} isClose={isClose}>
      <Overlay />

      <ContentWrapper>
        {/* <h1>投稿フォーム</h1> */}
        {!isClose && (
          <CloseButton
            onClick={() => {
              setIsClose(!isClose);
            }}
          ></CloseButton>
        )}
        <Content>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label>名前を入力してください</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={state.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>ポートフォリオのURLを入力してください</label>
              <input
                type=""
                id="portfolioURL"
                name="portfolioURL"
                required
                value={state.portfolioURL}
                onChange={handleChange}
                placeholder="https://example.com"
                pattern="https://.*"
              ></input>
            </div>
            <div>
              <label>学年を選択してください</label>
              <select required onChange={handleChange} name="grade">
                <option hidden>選択してください</option>
                {grade.map((data, i) => {
                  return (
                    <>
                      <option value={data} id={i}>
                        {data}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            <div>
              <label>学科を選択してください</label>
              <select required onChange={handleChange} name="belongTo">
                <option hidden>選択してください</option>
                {belongTo.map((data, i) => {
                  return (
                    <>
                      <option value={data} id={i} name="belongTo">
                        {data}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            <div>
              <input type="file" onChange={handleFile} />
              {state.iconURL && (
                <Image src={state.iconURL} width={140} height={140}></Image>
              )}
            </div>
            <div>
              <input type="submit" value="投稿する" />
            </div>
          </form>
        </Content>
      </ContentWrapper>
    </StyledModalWindow>
  );
};

export default ModalWindow;
