import MainContext from "../context/main";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainContext>
      <Component {...pageProps} />
    </MainContext>
  );
}

export default MyApp;
