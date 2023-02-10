import styled from 'styled-components';

type FlexProps = {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  gap?: string;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'}
  justify-content: ${props => props.justifyContent || 'flex-start'}
  align-items: ${props => props.alignItems || 'stretch'}
  align-content: ${props => props.alignContent || 'normal'}
  gap: ${props => props.gap || '0 px'}
`;
