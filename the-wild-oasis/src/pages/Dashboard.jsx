/* eslint-disable no-unused-vars */
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import { useRecentBookings } from "../features/dashboard/useRecentBookings";
import { useRecentStays } from "../features/dashboard/useRecentStays";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <p>TEST</p>
      </Row>
      <DashboardFilter />
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
