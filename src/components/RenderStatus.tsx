import { Badge } from "@chakra-ui/react";

interface RenderStatusProps {
  status: string;
}

export function RenderStatus(props: RenderStatusProps) {
  const renderBadge = () => {
    switch (props.status) {
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
    <Badge borderRadius="full" px="2" colorScheme={renderBadge()}>
      {props.status}
    </Badge>
  );
}
