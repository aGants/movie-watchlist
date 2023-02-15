import styled from 'styled-components';

import { constants } from 'styled';

export const Bar = styled.input`
  width: 300px;
  margin: 5px;
  padding: 15px 20px;
  background-color: var(--main-hover);
  
  border-radius: ${constants.radius};
  color: var(--fourth);
  outline: none;
  border: none;
  font-family: ${constants.font};
`;
