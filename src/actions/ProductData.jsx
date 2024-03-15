import { getData } from "../Reducer/Reducer";
import { isTrueMethod } from "../Reducer/Reducer";

const ProductData = () => (dispatch) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      dispatch(getData(data)), dispatch(isTrueMethod(false));
    });
};

export default ProductData;
