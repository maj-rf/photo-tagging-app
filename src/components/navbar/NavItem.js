import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

const NavImg = styled.img`
  height: ${(props) => (props.primary ? '65px' : '150px')};
  width: auto;
`;

export default function NavItem({ item }) {
  return (
    <li key={item.name}>
      <NavImg
        primary
        src={item.img}
        alt={item.name}
        data-tip
        data-for={item.name}
        data-place="bottom"
      />
      <ReactTooltip id={item.name} aria-haspopup="true">
        <p>{item.name}</p>
        <NavImg src={item.img} alt={item.name}></NavImg>
      </ReactTooltip>
    </li>
  );
}
