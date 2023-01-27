import React, { useCallback, useState } from 'react';

import { apiKey, apiHost } from 'core/constants';
import { List } from 'core/types';

import Lists from 'components/MoviesLists/Lists';
import SearchBar from 'components/SearchBar';
import Loading from 'components/Loading';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${apiKey}`,
    'X-RapidAPI-Host': `${apiHost}`,
  },
};

const PageSearch = () => {
  const [list, setList] = useState<List[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAPI = useCallback(async (value: string) => {
    const request = await fetch(`https://online-movie-database.p.rapidapi.com/title/v2/find?title=${value}&limit=20&sortArg=moviemeter%2Casc'`, options)
      .then(response => response.json())
      .then(data => data.results);

    return request;
  }, []);

  const getData = useCallback(async (value: string) => {
    setIsLoading(true);

    const data = await getAPI(value);

    setList(data);
    setIsLoading(false);
  }, [getAPI]);

  return (
    <div>
      <SearchBar getData={getData} />
      {isLoading ? <Loading /> : <Lists lists={list} />}
    </div>
  );
};

export default PageSearch;
