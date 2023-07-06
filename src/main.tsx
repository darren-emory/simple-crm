import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./ErrorPage.tsx";
import User from "./routes/User.tsx";
import EditUser from "./routes/EditUser.tsx";
import AddUser from "./routes/AddUser.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import UserList from "./routes/UserList.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "user/:userId",
        element: (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <User />
          </motion.div>
        ),
      },
      {
        path: "user/:userId/edit",
        element: (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <EditUser />
          </motion.div>
        ),
      },
      {
        path: "user/add",
        element: (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AddUser />
          </motion.div>
        ),
      },
      {
        path: "userlist",
        element: (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <UserList key={Math.floor(Math.random() * 200)} />
          </motion.div>
        ),
      },
      {
        path: "userlist/:status",
        element: (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <UserList />
          </motion.div>
        ),
      },
      {
        path: "dashboard",
        element: (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Dashboard />
          </motion.div>
        ),
      },
      {
        path: "",
        element: (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Dashboard />
          </motion.div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
