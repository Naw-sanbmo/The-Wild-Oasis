import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isPending: isPending1, bookings } = useRecentBookings();
  const { isPending: isPending2, stays, confirmedStays } = useRecentStays();

  if (isPending1 || isPending2) return <Spinner />;
  console.log(confirmedStays);

  return (
    <StyledDashboardLayout>
      <div>statistic</div>
      <div>Today activities</div>
      <div>chart of duration</div>
      <div>Chart of sale</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
