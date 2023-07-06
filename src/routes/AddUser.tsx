import { useState } from "react";
import { IUser } from "../interfaces.ts";
import { insertUser } from "../supabase";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";

function AddUser() {
  const [user, setUser] = useState<any | null>({ status: "Prospect" });
  const navigate = useNavigate();
  const toast = useToast();

  const updateValue = (key: string, value: string) => {
    setUser({
      ...user,
      [key]: value,
    } as IUser);
  };

  const handleSubmit = () => {
    insertUser(user as IUser, () =>
      toast({
        title: "User Added",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    ).then((response) => navigate(`../user/${response[0].id}`));
  };

  return (
    <Box
      maxW="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor={"white"}
    >
      <Box p="6">
        <Heading mb="10" fontWeight="normal" lineHeight="tight" size="lg">
          Add User
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3}>
          <Box>
            <InputGroup mb="5">
              <InputLeftAddon children="Title" />
              <Input
                placeholder="Title"
                value={user?.title}
                onChange={(e) => updateValue("title", e.target.value)}
              />
            </InputGroup>

            <InputGroup mb="5">
              <InputLeftAddon children="First Name" />
              <Input
                value={user?.first_name}
                placeholder="First Name"
                onChange={(e) => updateValue("first_name", e.target.value)}
              />
            </InputGroup>

            <InputGroup mb="5">
              <InputLeftAddon children="Last Name" />
              <Input
                value={user?.last_name}
                placeholder="Last Name"
                onChange={(e) => updateValue("last_name", e.target.value)}
              />
            </InputGroup>

            <InputGroup mb="5">
              <InputLeftAddon children="City" />
              <Input
                value={user?.city}
                placeholder="City"
                onChange={(e) => updateValue("city", e.target.value)}
              />
            </InputGroup>

            <InputGroup mb="5">
              <InputLeftAddon children="State" />
              <Input
                value={user?.state}
                placeholder="State"
                onChange={(e) => updateValue("state", e.target.value)}
              />
            </InputGroup>

            <InputGroup mb="5">
              <InputLeftAddon children="Country" />
              <Input
                value={user?.country}
                onChange={(e) => updateValue("country", e.target.value)}
                placeholder="Country"
              />
            </InputGroup>
          </Box>
          <Box>
            <InputGroup mb="5">
              <InputLeftAddon children="Email" />
              <Input
                value={user?.email}
                placeholder="Email"
                onChange={(e) => updateValue("email", e.target.value)}
              />
            </InputGroup>

            <InputGroup mb="5">
              <InputLeftAddon children="Phone Number" />
              <Input
                value={user?.phone}
                placeholder="Phone Number"
                onChange={(e) => updateValue("phone", e.target.value)}
              />
            </InputGroup>

            <InputGroup mb="5">
              <InputLeftAddon children="Picture URL" />
              <Input
                value={user?.picture_url}
                placeholder="Picture URL"
                onChange={(e) => updateValue("picture_url", e.target.value)}
              />
            </InputGroup>

            <InputGroup mb="5">
              <InputLeftAddon children="Status" />
              <Select
                placeholder="Select status"
                onChange={(e) => updateValue("status", e.target.value)}
                value={user.status}
              >
                {[
                  "Prospect",
                  "Lead",
                  "Pitched",
                  "Accepted",
                  "Under Review",
                  "Closed",
                ].map((option) =>
                  user.status === option ? (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ) : (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  )
                )}
              </Select>
            </InputGroup>
          </Box>
        </SimpleGrid>
        <Divider mt="5" mb="5" />
        <Button
          size="md"
          variant="outline"
          colorScheme="blue"
          onMouseDown={handleSubmit}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default AddUser;
