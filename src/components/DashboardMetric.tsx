import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface DashboardMetricProps {
  value: number;
  label: string;
}

export function DashboardMetric(props: DashboardMetricProps) {
  const renderColor = () => {
    switch (props.label) {
      case "Prospect":
        return "green";
      case "Lead":
        return "blue";
      case "Pitched":
        return "purple";
      case "Accepted":
        return "orange";
      case "Under Review":
        return "teal";
      case "Closed":
        return "red";
    }
  };
  return (
    <>
      <Link to={`../userlist/${props.label.toLowerCase().split(" ").join("")}`}>
        <Box borderWidth="1px" borderRadius="lg" backgroundColor="white">
          <Box p="6">
            <Box>
              <Box>
                <Text
                  fontWeight="regular"
                  as="h4"
                  fontSize={"50px"}
                  lineHeight="tight"
                  noOfLines={1}
                  textAlign={"center"}
                  color={renderColor() + ".400"}
                >
                  {props.value}
                </Text>
              </Box>

              <Box>
                <Text
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                  textAlign={"center"}
                >
                  {(props.label === "Lead" && props.value > 1) ||
                  (props.label === "Prospect" && props.value > 1)
                    ? props.label + "s"
                    : props.label}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
}
