import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { calculateFinalScore } from '../utils/utils';
import { fetchUsers } from '../firebase/firebase';
const BoardWrapper = styled.section`
  height: 100vh;
`;

const BoardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: clamp(17px, 2vw, 1.3rem);

  h1 {
    font-size: 3em;
  }
  table {
    background-color: #fff;
    min-width: 50%;
    text-align: justify;
  }

  thead {
    background-color: aliceblue;
    text-transform: uppercase;
  }
  tbody > tr:nth-child(odd) {
    background-color: #f0f0f0;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`;
const Spinner = styled.div`
  display: inline-block;
  width: 120px;
  height: 120px;

  &:after {
    content: ' ';
    display: block;
    width: 120px;
    height: 120px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

export default function Leaderboard() {
  const [users, setUsers] = useState(false);

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  return (
    <BoardWrapper>
      {users ? (
        <BoardBody>
          <h1>Top 10 Scores</h1>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
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
        </BoardBody>
      ) : (
        <BoardBody>
          <Spinner></Spinner>
        </BoardBody>
      )}
    </BoardWrapper>
  );
}
