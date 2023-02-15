import styled from 'styled-components';
import { Flex, constants } from 'styled';

export const PosterImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${constants.radius};
`;

export const ItemStyled = styled(Flex)`
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / .3);
  transition: .4s ease-out;
  cursor: pointer;
  border-radius: ${constants.radius};
  filter: brightness(0.8);

  &:hover {
    filter: brightness(1);
  }
`;

export const AddButton = styled.button`
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  line-height: 30px;
  text-align: center;
  
  color: var(--fourth);
  background: transparent;
  backdrop-filter: blur(5px) invert(.3) brightness(.95);

  
  &:hover {
    backdrop-filter: blur(20px) invert(.3) brightness(1);
  }
  
  &:active {
    backdrop-filter: blur(30px) invert(.3) brightness(1.05);
  }
`;
