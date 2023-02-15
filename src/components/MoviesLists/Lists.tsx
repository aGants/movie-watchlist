import React from 'react';

import { List } from 'core/types';
import { Flex } from 'styled';

import Item from './Item';

type Props = {
  lists: List[];
};

const MovieLists: React.FC<Props> = ({ lists }) => {
  if (lists) {
    return (
    <Flex justifyContent="flex-start" alignItems="center" width="100%">
      {lists.map(item => <Item key={item.id} {...item}/>)}
    </Flex>);
  }

  return (
    <Flex margin="0 auto" justifyContent="center" alignItems="center">
      <p>Not Found</p>
    </Flex>
  );
};

export default MovieLists;
