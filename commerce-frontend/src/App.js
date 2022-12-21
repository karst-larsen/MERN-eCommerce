import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ProductScreen from "./components/ProductScreen/ProductScreen.js";
import CartScreen from "./components/CartScreen/CartScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import RegisterScreen from "./components/RegisterScreen/RegisterScreen";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import ShippingScreen from "./components/ShippingScreen/ShippingScreen";
import PaymentScreen from "./components/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "./components/PlaceOrderScreen/PlaceOrderScreen";
import OrderScreen from "./components/OrderScreen/OrderScreen";
import UserListScreen from "./components/UserListScreen/UserListScreen";
import UserEditScreen from "./components/UserEditScreen/UserEditScreen";
import ProductListScreen from "./components/ProductListScreen/ProductListScreen";
import ProductEditScreen from "./components/ProductEditScreen/ProductEditScreen";
import OrderListScreen from "./components/OrderListScreen/OrderListScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/search/:keyword" element={<HomeScreen />} />
            <Route path="/page/:pageNumber" element={<HomeScreen />} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen />}
            />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/login/shipping" element={<ShippingScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/cart" element={<CartScreen />}>
              <Route path=":id" element={<CartScreen />} />
            </Route>
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/orders/:id" element={<OrderScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route
              path="/admin/user/:userId/edit"
              element={<UserEditScreen />}
            />
            <Route path="/admin/productlist" element={<ProductListScreen />} />
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductListScreen />}
            />
            <Route
              path="/admin/product/:productId/edit"
              element={<ProductEditScreen />}
            />
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
