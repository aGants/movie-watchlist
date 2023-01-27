import React, { useCallback, useState } from 'react';

import { apiKey, apiHost } from 'core/constants';
import { List } from 'core/types';

import Lists from 'core/components/MoviesLists/Lists';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${apiKey}`,
    'X-RapidAPI-Host': `${apiHost}`,
  },
};

const PageSearch = () => {
  const [list, setList] = useState<List[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const getAPI = useCallback(async (value: string) => {
    const request = await fetch(`https://online-movie-database.p.rapidapi.com/title/v2/find?title=${value}&limit=20&sortArg=moviemeter%2Casc'`, options)
      .then(response => response.json())
      .then(data => data.results);

    return request;
  }, []);

  const getData = useCallback(async (value: string) => {
    const data = await getAPI(value);

    console.log(data);
    setList(data);
  }, []);

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
      <Lists lists={list} />
    </div>
  );
};

export default PageSearch;
