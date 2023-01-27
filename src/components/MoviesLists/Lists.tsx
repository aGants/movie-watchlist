import React from 'react';

import { List } from 'core/types';

import Item from './Item';

type Props = {
  lists: List[];
  isLoading?: boolean;
};

const MovieLists: React.FC<Props> = ({ lists, isLoading }) => {
  return (
    <div>
      {lists.map(item =>
        <Item key={item.id} {...item}/>)}
    </div>
  );
};

export default MovieLists;
