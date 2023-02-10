import styled from 'styled-components';

type FlexProps = {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  gap?: string;
  wrap?: string;
};

type BoxProps = {
  position?: string;
  width?: string;
  height?: string;
  border?: string;
  margin?: string;
  padding?: string;
  color?: string;
  bgColor?: string;
  borderRadius?: string;
  bottom?: string;
  right?: string;
};

export const Box = styled.div<BoxProps>`
  display: block;
  box-sizing: border-box;
  position: ${props => props.position || 'static'};
  bottom: ${props => props.bottom || 'auto'};
  right: ${props => props.right || 'auto'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border: ${props => props.border || 'default'};
  border-radius: ${props => props.borderRadius || 'default'};
  margin: ${props => props.margin || 'auto'};
  padding: ${props => props.padding || 'auto'};
  color: ${props => props.color || 'default'};
  background-color: ${props => props.bgColor || 'none'};
`;

export const Flex = styled(Box)<FlexProps & BoxProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  align-content: ${props => props.alignContent || 'normal'};
  gap: ${props => props.gap || 'default'};
  flex-wrap: ${props => props.wrap || 'wrap'};
`;

export const Title = styled.span`
  font-size: 1.875em;
`;

export const Text = styled.span`
  font-size: 0.875em;
`;
