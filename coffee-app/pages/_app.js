import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer>
        <p>&copy; 2023 Coffee App</p>
      </footer>
    </>
  );
}

export default MyApp;
