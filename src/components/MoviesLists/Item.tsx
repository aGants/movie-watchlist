import React from 'react';

import { Poster } from 'core/types';
import { Box, Text } from 'styled';

import { ItemStyled, PosterImage, AddButton } from './style';

type Props = {
  title: string;
  year: number;
  image: Poster;
};

const MovieListsItem: React.FC<Props> = ({
  title, image, year,
}) => {
  return (
    <ItemStyled width="310px" height="150px" margin="15px" position="relative">
      <PosterImage src={image.url} />

      <Box width="100%" position="absolute" bottom="0px" padding="10px">
        <Text isTitle margin="5px auto">{ title }  ({ year })</Text>
      </Box>

      <Box position="absolute" bottom="0px" right="0px" margin="10px">
        <AddButton>
          <span>+</span>
        </AddButton>
      </Box>
    </ItemStyled>
  );
};

export default MovieListsItem;
