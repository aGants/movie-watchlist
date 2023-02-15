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

type TextProps = {
  isTitle?: boolean;
  isSubtitle?: boolean;
  isColor?: boolean;
  margin?: string;
  padding?: string;
  isBlock?: boolean;
};

export const Box = styled.div<BoxProps>`
  display: block;
  box-sizing: border-box;
  position: ${props => props.position || 'static'};
  bottom: ${props => props.bottom || 'auto'};
  right: ${props => props.right || 'auto'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border: ${props => props.border || 'inherit'};
  border-radius: ${props => props.borderRadius || 'inherit'};
  margin: ${props => props.margin || 'auto'};
  padding: ${props => props.padding || 'auto'};
  color: ${props => props.color || 'inherit'};
  background-color: ${props => `var(--${props.bgColor})` || 'transparent'};
`;

export const Flex = styled(Box)<FlexProps & BoxProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  align-content: ${props => props.alignContent || 'normal'};
  gap: ${props => props.gap || 'inherit\t'};
  flex-wrap: ${props => props.wrap || 'wrap'};
`;

export const Text = styled.span<TextProps>`
  color: ${props => (props.isColor ? 'var(--second)' : 'inherit')};
  font-size: ${props => (props.isTitle ? '20px' : props.isSubtitle ? '18px' : '16px')};
  margin: ${props => props.margin || 'auto'};
  padding: ${props => props.padding || 'auto'};
  text-shadow: ${props => (props.isTitle ? '0 0 3px var(--main)' : 'none')};
  font-family: Roboto, sans-serif;
`;

export const radius = {
  rBox: '5px',
};
