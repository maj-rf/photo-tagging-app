import styled from 'styled-components';
import { calculateFinalScore } from '../utils/utils';
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10em;
`;

export default function Leaderboard(props) {
  let sorted = [...props.users].sort((a, b) => {
    return a.timeEnd - a.timeStart - (b.timeEnd - b.timeStart);
  });
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
