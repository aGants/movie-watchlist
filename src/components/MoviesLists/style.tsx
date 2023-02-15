import styled from 'styled-components';
import { Flex, radius } from 'styled';

export const PosterImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${radius.rBox};
`;

export const ItemStyled = styled(Flex)`
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 30%);
  transition: .4s ease-out;
  cursor: pointer;
  border-radius: ${radius.rBox};
  filter: brightness(0.9);

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
  backdrop-filter: blur(5px) brightness(1.2);

  transition: .4s ease-out;
  
  &:hover {
    backdrop-filter: blur(5px) brightness(1.5);
  }
`;
