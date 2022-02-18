import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10em;
`;

export default function Leaderboard() {
  return (
    <StyledSection>
      <h1>Leaderboard</h1>
    </StyledSection>
  );
}
