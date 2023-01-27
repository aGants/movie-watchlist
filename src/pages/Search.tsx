import React, { useCallback, useState } from 'react';

import { apiKey, apiHost } from '../constants';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${apiKey}`,
    'X-RapidAPI-Host': `${apiHost}`,
  },
};

type List = {
  id: string;
  l: string;
  s: string;
};

const PageSearch = () => {
  const [list, setList] = useState<List[]>([]);

  const getAPI = useCallback(async (value: string) => {
    const request = await fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${value}`, options)
      .then(response => response.json())
      .then(data => data.d);

    return request;
  }, []);

  const getData = useCallback(async (value: string) => {
    const data = await getAPI(value);

    setList(data);

    return data;
  }, []);

  const onSearch = useCallback( () => {
    getData('game');
  }, []);

  return (
    <div>
      <input />
      <button onClick={onSearch}/>
      {list.map(item => item.l)}
    </div>
  );
};

export default PageSearch;
