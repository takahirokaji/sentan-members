import Head from "next/head";
import MembersList from "../components/MembersList";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { useEffect } from "react";

export default function Home(props) {
  const gradeList = ["M2", "M1", "B4", "B3", "B2", "B1"];
  const members = props.members;
  useEffect(() => {});
  return (
    <>
      <Head>
        <title>先端メンバー 🤟</title>
        <meta name="description" content="for sentan 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {gradeList.map((grade) => {
        const membersPerGrade = members.filter((el) => el.grade === grade);
        return (
          <>
            <MembersList grade={grade} list={membersPerGrade} />
          </>
        );
      })}
    </>
  );
}

export const getServerSideProps = async () => {
  let members = [];
  const membersRef = collection(db, "sentan-2022-early");
  const q = query(membersRef, orderBy("grade", "desc"), orderBy("createdAt"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const member = {
      id: doc.id,
      name: data.name,
      iconURL: data.iconURL,
      grade: data.grade,
      portfolioURL: data.portfolioURL,
      belongTo: data.belongTo,
    };
    members.push(member);
  });
  return { props: { members } };
};
