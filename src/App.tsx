import { Outlet, Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Tab,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { TbAsteriskSimple } from "react-icons/Tb";
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
        {/* Top bar */}
        <Box
          bgColor="white"
          p={[5, null, 10]}
          borderBottomColor={"#ece9eb"}
          borderBottomWidth={1}
        >
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3}>
            <Flex
              mb={["20px", null, ""]}
              justifyContent={["center", null, "flex-start"]}
            >
              <Flex alignItems="center" gap="1">
                <TbAsteriskSimple size="2.5em" color="#BEE3F8" />
                <Heading size="lg">
                  <Text color="blue.700">Simple CRM</Text>
                </Heading>
              </Flex>
            </Flex>

            <Flex justifyContent={["center", null, "flex-end"]}>
              <Tabs
                orientation="vertical"
                colorScheme="gray"
                variant="soft-rounded"
              >
                <Link to={"../dashboard"}>
                  <Tab>Dashboard</Tab>
                </Link>
                <Link to={"../userlist/"}>
                  <Tab>Directory</Tab>
                </Link>
                <Link to={"../user/add"}>
                  <Tab>Add</Tab>
                </Link>
              </Tabs>
            </Flex>
          </SimpleGrid>
        </Box>

        {/* Main Content */}
        <Box bgColor="#f5f5f8" p={[2, null, 10]} w={"100%"}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default App;
