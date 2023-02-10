import React from 'react';

import { List } from 'core/types';
import { Flex } from 'styled';

import Item from './Item';

type Props = {
  lists: List[];
};

const MovieLists: React.FC<Props> = ({ lists }) => {
  return (
    <Flex justifyContent="space-around" alignItems="center" width="100%">
      {lists.map(item => <Item key={item.id} {...item}/>)}
    </Flex>
  );
};

export default MovieLists;
