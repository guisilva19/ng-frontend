import { ToastContainer } from "react-toastify";
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
