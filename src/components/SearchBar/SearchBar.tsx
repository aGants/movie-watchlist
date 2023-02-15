import React, { useCallback, useState } from 'react';

import { Box } from 'styled';

import { Bar } from './style';

type Props = {
  getData: (arg: string) => void
};

const SearchBar: React.FC<Props> = ({ getData }) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearch = useCallback( (e: React.KeyboardEvent, value: string) => {
    if (e.key !== 'Enter') return;

    if (value === '') return;

    setSearchValue(value);

    if (value) {
      getData(value);
    }
  }, []);

  return (
    <Box margin="0 auto">
      <Bar
        value={searchValue}
        type="text"
        onChange={e => setSearchValue(e.target.value)}
        onKeyDown={e => onSearch(e, searchValue)}
      />
    </Box>
  );
};

export default SearchBar;
