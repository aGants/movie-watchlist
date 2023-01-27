export type Poster = {
  height: number;
  width: number;
  id: string;
  url: string;
};

export type List = {
  id: string;
  title: string;
  titleType: string;
  year: number;
  image: Poster;
};
