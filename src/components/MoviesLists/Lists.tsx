import React from 'react';

import { List } from 'core/types';
import { Flex } from 'styles';

import Item from './Item';

type Props = {
  lists: List[];
};

const MovieLists: React.FC<Props> = ({ lists }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      {lists.map(item => <Item key={item.id} {...item}/>)}
    </Flex>
  );
};

export default MovieLists;
