import Home from "../src/compoents/Home/Home";
import { Outlet } from "react-router-dom";
import Header from "./compoents/SmallComponents/Header";
import Newsletter from "./compoents/SmallComponents/Newsletter";
import Footer from "./compoents/SmallComponents/Footer";
import ProductData from "./actions/ProductData";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductData());
  }, []);

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
