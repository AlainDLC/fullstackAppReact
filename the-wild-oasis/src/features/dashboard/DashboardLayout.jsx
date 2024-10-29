/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Stats from "./Stats";
import Spinner from "../../ui/Spinner";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading, bookings } = useRecentBookings();
  const { cabins, isLoading: isLoadingCabin } = useCabins();
  const {
    isLoading: isLoadingStays,
    confirmedStays,
    numDayz,
  } = useRecentStays();

  if (isLoading || isLoadingStays || isLoadingCabin) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDayz}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDayz} />
    </StyledDashboardLayout>
  );
}
export default DashboardLayout;
