import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { GlobalStyle } from "./global/globalStyle";
import RoutesMain from "./routes";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <RoutesMain />
    </>
  );
}

export default App;
