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
    return `${Math.floor(final / 60)}:${final % 60}`;
  }

  let sorted = [...props.users].sort((a, b) => {
    return a.timeEnd - a.timeStart - (b.timeEnd - b.timeStart);
  });

  console.log(sorted);
  return (
    <StyledSection>
      <h1>Leaderboard</h1>
      <table>
        <tbody>
          <tr>
            <th>User</th>
            <th>Time</th>
          </tr>
          {sorted.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{calculateFinalScore(user)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledSection>
  );
}
