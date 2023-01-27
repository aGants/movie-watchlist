import React, { useCallback, useState } from 'react';

type Props = {
  getData: (arg: string) => void
};

const SearchBar: React.FC<Props> = ({ getData }) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearch = useCallback( (value: string) => {
    setSearchValue(value);

    if (value) {
      getData(value);
    }
  }, []);

  return (
    <div>
      <input
        value={searchValue}
        type="text"
        onChange={e => setSearchValue(e.target.value)}
        onClick={() => onSearch(searchValue)}
      />
      <button onClick={() => onSearch(searchValue)}>search</button>
    </div>
  );
};

export default SearchBar;
