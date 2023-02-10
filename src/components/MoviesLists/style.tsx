import styled from 'styled-components';

export const PosterImage = styled.img`
  width: 180px;
  margin: 15px 10px;
  border-radius: 4px;
  cursor: pointer;
  filter: grayscale(40%);
  box-shadow: 0 4px 16px 0 rgb(0 0 0 / 8%);
  transition: .4s ease-out;
  
  &:hover {
    filter: none;
    box-shadow: 0 4px 16px 0 rgb(0 0 0 / 30%);
  }
  
  &:active {
    box-shadow: 0 4px 16px 0 rgb(0 0 0 / 60%);
  }
`;

