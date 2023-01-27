import React from 'react';

import { Poster } from 'core/types';

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
    {/* <img src={image.url}/> */}
    </div>
  );
};

export default MovieListsItem;
