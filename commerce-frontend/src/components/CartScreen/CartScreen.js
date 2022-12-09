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
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { useParams, useSearchParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
/**
 *
 * Any time redux state is being used within a component,
 * useDispatch and useSelector should be imported
 */

const CartScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const quantity = searchParams.get("quantity")
    ? Number(searchParams.get("quantity"))
    : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity));
    }
  }, [dispatch, id]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty. <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => {
              return (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        //Instead of state quantity as in ProductScreen, this quantity value is controlled by the mapped item from cartItems
                        value={item.quantity}
                        onChange={(e) => {
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          );
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={(e) => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash mx-2"></i>Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal: (
                {cartItems.reduce(
                  (accumulator, item) => accumulator + item.quantity,
                  0
                )}
                ) items
              </h2>
              $
              {cartItems
                .reduce(
                  (accumulator, item) =>
                    //   Accumulator (0) plus the quantity of the items in the cart multiplied by the price of the item, iterated over the cart array
                    accumulator + item.quantity * item.price,
                  0
                )
                .toFixed(2)}
              {/* toFixed stops the decimal value at two digits to represent cents */}
            </ListGroup.Item>
          </ListGroup>
          <Button
            type="button"
            className="btn-block"
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Proceed to Checkout
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
