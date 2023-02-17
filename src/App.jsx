import "./app.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Navbar,
  Hero,
  ProductCard,
  Button,
  Product,
  Products,
} from "./components";
import { Home, About, Footer, Categories } from "./pages";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
