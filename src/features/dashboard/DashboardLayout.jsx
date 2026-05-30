import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
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
