import { useState, useEffect } from "react";
import { fetchUsers } from "../supabase";
import { DashboardMetric } from "../components/DashboardMetric.tsx";
import { IUser } from "../interfaces.ts";
import { SimpleGrid } from "@chakra-ui/react";

export function Dashboard() {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [ready, setReady] = useState(false);

  const [totalProspects, setTotalProspects] = useState(0);
  const [totalLeads, setTotalLeads] = useState(0);
  const [totalPitched, setTotalPitched] = useState(0);
  const [totalAccepted, setTotalAccepted] = useState(0);
  const [totalUnderReview, setTotalUnderReview] = useState(0);
  const [totalClosed, setTotalClosed] = useState(0);

  useEffect(() => {
    fetchUsers().then((results) => {
      setUsers(results);
    });
  }, []);

  useEffect(() => {
    !ready && calculateStats(), [users];
  });

  const calculateStats = () => {
    let totalUsers = 0;
    // go thru each user and add up the user.status field to each appropriate total
    users?.forEach((user) => {
      switch (user.status) {
        case "Prospect":
          setTotalProspects((prev) => prev + 1);
          break;
        case "Lead":
          setTotalLeads((prev) => prev + 1);
          break;
        case "Pitched":
          setTotalPitched((prev) => prev + 1);
          break;
        case "Accepted":
          setTotalAccepted((prev) => prev + 1);
          break;
        case "Under Review":
          setTotalUnderReview((prev) => prev + 1);
          break;
        case "Closed":
          setTotalClosed((prev) => prev + 1);
          break;
        default:
          break;
      }

      totalUsers++;
    });

    if (totalUsers === users?.length) {
      setReady(true);
    }
  };

  return (
    <>
      {ready ? (
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={3}>
          <DashboardMetric value={totalProspects} label="Prospect" />
          <DashboardMetric value={totalLeads} label="Lead" />
          <DashboardMetric value={totalPitched} label="Pitched" />
          <DashboardMetric value={totalAccepted} label="Accepted" />
          <DashboardMetric value={totalUnderReview} label="Under Review" />
          <DashboardMetric value={totalClosed} label="Closed" />
        </SimpleGrid>
      ) : (
        <></>
      )}
    </>
  );
}

export default Dashboard;
