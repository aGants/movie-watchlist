import styled from 'styled-components';
import { Box } from 'styled';

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(40%);
`;

export const ItemStyled = styled(Box)`
  box-shadow: 0 4px 16px 0 rgb(50, 50, 93,.1);
  transition: .4s ease-out;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 4px 16px 0 rgb(50, 50, 93,.2);
  }

  &:active {
    box-shadow: 0 4px 16px 0 rgb(50, 50, 93,.3);
  }
`;
