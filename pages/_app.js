import "../styles/globals.scss";
import BaseLayout from "../components/Layout/BaseLayout";

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
