import React from 'react';

import { Poster } from 'core/types';
import { Box, Text } from 'styled';

import { ItemStyled, PosterImage } from './style';

type Props = {
  title: string;
  image: Poster;
};

const MovieListsItem: React.FC<Props> = ({
  title, image,
}) => {
  return (
    <ItemStyled width="310px" height="200px" borderRadius="4px" margin="4px" padding="10px" position="relative">
      <Box width="100%" height="70%" position="relative">
        <PosterImage src={image.url} />
      </Box>

      <Text isTitle>{ title }</Text>

      <Box position="absolute" bottom="0px" right="0px">
        <button>+</button>
      </Box>
    </ItemStyled>
  );
};

export default MovieListsItem;
