import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10em;
`;

export default function Leaderboard(props) {
  function calculateFinalScore(user) {
    let final = user.timeEnd - user.timeStart;
    return `${user.name} : ${Math.floor(final / 60)}:${final % 60}`;
  }
  return (
    <StyledSection>
      <h1>Leaderboard</h1>
      {props.scores.map((user) => {
        return <div key={user.id}>{calculateFinalScore(user)}</div>;
      })}
    </StyledSection>
  );
}
