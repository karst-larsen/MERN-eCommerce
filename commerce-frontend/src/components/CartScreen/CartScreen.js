import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../Message/Message";
import Loader from "../Loader/Loader";
import { addToCart } from "../../actions/cartActions";
import { useParams, useSearchParams } from "react-router-dom";
/**
 *
 * Any time redux state is being used within a component,
 * useDispatch and useSelector should be imported
 */

const CartScreen = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const quantity = searchParams.get("quantity")
    ? searchParams.get("quantity")
    : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity));
    }
  }, [dispatch, id]);

  return <div>Cart</div>;
};

export default CartScreen;
