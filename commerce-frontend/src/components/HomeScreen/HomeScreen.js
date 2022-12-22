import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { listProducts } from "../../actions/productActions";
import Product from "../Product/Product";
import Meta from "../Meta/Meta";
import Message from "../Message/Message";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { keyword, pageNumber = 1 } = useParams();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products, pages, page } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-dark">
          Back to Main
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
