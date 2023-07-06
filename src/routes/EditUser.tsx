import { useState, useEffect } from "react";
import { IUser } from "../interfaces.ts";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchUser, updateUser, deleteUser } from "../supabase";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";

function EditUser() {
  const [user, setUser] = useState<IUser | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);

  const params: any = useParams();
  const toast = useToast();
  const userId = params.userId;

  const navigate = useNavigate();

  useEffect(() => {
    fetchUser(userId).then((results) => {
      setUser(results[0]);
    });
  }, []);

  const updateValue = (key: string, value: string) => {
    setUser({
      ...user,
      [key]: value,
    } as IUser);
  };

  const handleEdit = () => {
    updateUser(user as IUser, () =>
      toast({
        title: "User Updated",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    ).then(() => navigate(`../user/${user?.id}`));
  };

  const handleDelete = () => {
    user &&
      deleteUser(user.id, () =>
        toast({
          title: "User Deleted",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      ).then(() => navigate(`../userlist/`));
  };

  return (
    user && (
      <Box
        maxW="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        backgroundColor={"white"}
      >
        <Box p="6">
          <Heading mb="10" fontWeight="normal" lineHeight="tight" size="lg">
            Edit User
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3}>
            <Box>
              <InputGroup mb="5">
                <InputLeftAddon children="Title" />
                <Input
                  placeholder="Title"
                  value={user.title ? user.title : ""}
                  onChange={(e) => updateValue("title", e.target.value)}
                />
              </InputGroup>

              <InputGroup mb="5">
                <InputLeftAddon children="First Name" />
                <Input
                  value={user.first_name ? user.first_name : ""}
                  placeholder="First Name"
                  onChange={(e) => updateValue("first_name", e.target.value)}
                />
              </InputGroup>

              <InputGroup mb="5">
                <InputLeftAddon children="Last Name" />
                <Input
                  value={user.last_name ? user.last_name : ""}
                  placeholder="Last Name"
                  onChange={(e) => updateValue("last_name", e.target.value)}
                />
              </InputGroup>

              <InputGroup mb="5">
                <InputLeftAddon children="City" />
                <Input
                  value={user.city ? user.city : ""}
                  placeholder="City"
                  onChange={(e) => updateValue("city", e.target.value)}
                />
              </InputGroup>

              <InputGroup mb="5">
                <InputLeftAddon children="State" />
                <Input
                  value={user.state ? user.state : ""}
                  placeholder="State"
                  onChange={(e) => updateValue("state", e.target.value)}
                />
              </InputGroup>

              <InputGroup mb="5">
                <InputLeftAddon children="Country" />
                <Input
                  value={user.country ? user.country : ""}
                  onChange={(e) => updateValue("country", e.target.value)}
                  placeholder="Country"
                />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup mb="5">
                <InputLeftAddon children="Email" />
                <Input
                  value={user.email ? user.email : ""}
                  placeholder="Email"
                  onChange={(e) => updateValue("email", e.target.value)}
                />
              </InputGroup>

              <InputGroup mb="5">
                <InputLeftAddon children="Phone Number" />
                <Input
                  value={user.phone ? user.phone : ""}
                  placeholder="Phone Number"
                  onChange={(e) => updateValue("phone", e.target.value)}
                />
              </InputGroup>

              <InputGroup mb="5">
                <InputLeftAddon children="Picture URL" />
                <Input
                  value={user.picture_url ? user.picture_url : ""}
                  placeholder="Picture URL"
                  onChange={(e) => updateValue("picture_url", e.target.value)}
                />
              </InputGroup>

              <InputGroup mb="5">
                <InputLeftAddon children="Status" />
                <Select
                  placeholder="Select status"
                  value={user.status}
                  onChange={(e) => updateValue("status", e.target.value)}
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
          <ButtonGroup spacing={2}>
            {deleteConfirm ? (
              <>
                <Button
                  size="md"
                  variant="outline"
                  colorScheme="red"
                  onMouseDown={handleDelete}
                >
                  Confirm Delete
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="md"
                  variant="outline"
                  colorScheme="blue"
                  onMouseDown={handleEdit}
                >
                  Save
                </Button>

                <Button
                  size="md"
                  variant="ghost"
                  onMouseDown={() => setDeleteConfirm(true)}
                >
                  Delete?
                </Button>
              </>
            )}
          </ButtonGroup>
        </Box>
      </Box>
    )
  );
}

export default EditUser;
