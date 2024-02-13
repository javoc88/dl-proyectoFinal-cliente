import "./App.css";
import MyNavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductProvider from "./context/ProductProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <ProductProvider>
        <Banner />
        <MyNavBar />
        <AppRouter />
        <Footer />
      </ProductProvider>
    </>
  );
}

export default App;
