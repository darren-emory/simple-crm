import { Outlet, Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import "./styles/styles.scss";

function App() {
  return (
    <>
      {/* App Container */}
      <Box
        m={[5, 4, 50]}
        maxW="990px"
        borderWidth="1px"
        borderRadius="30px"
        overflow="hidden"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <Flex>
          {/* Sidebar  */}
          <Box
            bgColor="white"
            p={10}
            w={["100%", "400px"]}
            borderRightColor={"#ece9eb"}
            borderRightWidth={1}
          >
            <Box>
              <h1>My new app!</h1>
              <Link to={"../dashboard"}>Dashboard</Link>
            </Box>
          </Box>

          {/* Main Content */}
          <Box bgColor="#f5f5f8" p={10} w={"100%"}>
            <Outlet />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default App;
