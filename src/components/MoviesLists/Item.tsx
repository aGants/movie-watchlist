import React from 'react';

import { Poster } from 'core/types';

import { PosterImage } from './style';

type Props = {
  title: string;
  image: Poster;
};

const MovieListsItem: React.FC<Props> = ({
  title, image,
}) => {
  return (
    <div>
      {title}
      <PosterImage src={image.url} />
    </div>
  );
};

export default MovieListsItem;
