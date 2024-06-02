import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { ConfigProvider } from "antd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2999FB",
            colorBgContainer: "#2999FB",
            colorLinkActive: "#2999FB",
            colorLinkHover: "#2999FB",
            colorBorder: "#2999FB",
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
