import { useState, useEffect } from "react";
import { fetchUsers } from "../supabase";
import { IUser } from "../interfaces.ts";
import { UserCard } from "../components/UserCard.tsx";
import { Flex, Heading, Input, SimpleGrid, Spacer } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export function UserList() {
  const [users, setUsers] = useState<[] | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<[] | null>(null);
  const [filterKeyword, setFilterKeyword] = useState("");

  const params: any = useParams();
  const capitalizeStatus = () => {
    if (params.status) {
      switch (params.status) {
        case "underreview":
          return "Under Review";
        default:
          return params.status.charAt(0).toUpperCase() + params.status.slice(1);
      }
    }
  };
  const filterStatus = params ? capitalizeStatus() : null;

  useEffect(() => {
    if (filterStatus) {
      fetchUsers().then((results) => {
        let filteredResults = results.filter(
          (user: any) => user.status === filterStatus
        );
        setUsers(filteredResults);
        setFilteredUsers(filteredResults);
      });
    } else {
      fetchUsers().then((results) => {
        setUsers(results);
        setFilteredUsers(results);
      });
    }
  }, []);

  useEffect(() => {
    let updatedUsers = users?.filter((user: IUser) => {
      if (filterKeyword === "") return filteredUsers;
      if (
        (user.first_name &&
          user.first_name
            .toLowerCase()
            .includes(filterKeyword.toLowerCase())) ||
        (user.last_name &&
          user.last_name.toLowerCase().includes(filterKeyword.toLowerCase())) ||
        (user.title &&
          user.title.toLowerCase().includes(filterKeyword.toLowerCase()))
      ) {
        return user;
      }
    });

    setFilteredUsers(updatedUsers as any);

    if (filterKeyword === "") setFilteredUsers(users);
  }, [filterKeyword]);

  return (
    <>
      {filteredUsers ? (
        <>
          <Flex alignItems={"center"} mb="5">
            <Heading
              fontWeight="normal"
              lineHeight="tight"
              size="lg"
              display={["none", null, "block"]}
            >
              {filterStatus
                ? `All Users With Tag '${filterStatus}'`
                : "All Users"}
            </Heading>
            <Spacer />
            <Input
              value={filterKeyword}
              placeholder="Filter by name"
              onChange={(e) => setFilterKeyword(e.target.value)}
              bg="white"
              maxW={["100%", null, "32%"]}
            />
          </Flex>
          {filteredUsers.length > 0 ? (
            <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={3}>
              {filteredUsers.map((user: any) => (
                <UserCard key={user.id} user={user} mini />
              ))}
            </SimpleGrid>
          ) : (
            <p>No users found.</p>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default UserList;
