import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./ErrorPage.tsx";
import User from "./routes/User.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#d5d7de",
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "user/:userId/edit",
        element: <User edit />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
