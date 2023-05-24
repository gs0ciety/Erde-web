import { Provider } from "react-redux";
import Content from "../Content/Content";
import NavBar from "../Navbar/Navbar";
import { store } from "../../Store/Store";

function Erde() {
  return (
    <Provider store={store}>
      <NavBar />
      <Content />
    </Provider>
  );
}

export default Erde;
