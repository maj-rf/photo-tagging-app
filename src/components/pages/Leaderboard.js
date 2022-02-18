import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { calculateFinalScore } from '../utils/utils';
import { fetchUsers } from '../firebase/firebase';
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10em;
`;

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  return (
    <StyledSection>
      <h1>Leaderboard</h1>
      <table>
        <tbody>
          <tr>
            <th>User</th>
            <th>Time</th>
          </tr>
          {users.map((user) => {
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
