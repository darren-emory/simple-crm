import { IUser } from "../interfaces.ts";
import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { RenderStatus } from "../components/RenderStatus.tsx";

interface UserCardProps {
  user: IUser;
  mini?: boolean;
}

export function UserCard(props: UserCardProps) {
  return props.mini ? (
    <RouterLink to={`../user/${props.user.id}`}>
      <Box borderWidth="1px" borderRadius="lg" backgroundColor={"white"}>
        <Box p="6">
          <Box display="flex" alignItems="center">
            <Box>
              <Avatar width={50} src={props.user.picture_url} marginRight={5} />
            </Box>

            <Box>
              <Text
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {props.user.title} {props.user.first_name}{" "}
                {props.user.last_name}
              </Text>
              <RenderStatus status={props.user.status} />
            </Box>
          </Box>
        </Box>
      </Box>
    </RouterLink>
  ) : (
    <Box
      maxW="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor={"white"}
    >
      <Box p="6">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3}>
          <Flex
            justifyContent={["center", null, "flex-start"]}
            mb={["5", null, "0"]}
          >
            <Box>
              <Avatar size="xl" src={props.user.picture_url} marginRight={5} />
            </Box>
            <Box>
              <Heading mt="1" fontWeight="normal" lineHeight="tight" size="lg">
                {props.user.title} {props.user.first_name}{" "}
                {props.user.last_name}
              </Heading>
              <RenderStatus status={props.user.status} />
            </Box>
          </Flex>

          <Box display="flex" justifyContent={["center", null, "flex-end"]}>
            <ButtonGroup spacing="2">
              <RouterLink to={`../user/${props.user.id}/edit`}>
                <Button variant="outline" colorScheme="blue">
                  Edit
                </Button>
              </RouterLink>
            </ButtonGroup>
          </Box>
        </SimpleGrid>

        <Divider mt="5" mb="5" />

        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3}>
          <Box>
            <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              {props.user.email && (
                <>
                  <EmailIcon boxSize={4} color="gray.400" mr="3" />
                  <>
                    <Link color="blue.500" href={`mailto:${props.user.email}`}>
                      {props.user.email}
                    </Link>
                  </>
                  <br />
                </>
              )}
              {props.user.phone && (
                <>
                  <>
                    <PhoneIcon boxSize={4} color="gray.400" mr="3" />
                    {props.user.phone}
                  </>
                  <br />
                </>
              )}
            </Text>
          </Box>
          <Box>
            <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              {props.user.city ? props.user.city + ", " : ""}
              {props.user.state}
              {props.user.country && (
                <>
                  <br />
                  <>{props.user.country}</>
                </>
              )}
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
