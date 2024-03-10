export interface NewsData {
  br: NewsBr;
  stw: NewsStw;
  creative: NewsCreative;
}

export interface NewsBr {
  hash: string;
  date: string;
  image: string;
  motds: NewsMotd[];
  messages: NewsMessage[];
}

export interface NewsCreative {
  hash: string;
  date: string;
  image: string;
  motds: NewsMotd[];
  messages: NewsMessage[];
}

export interface NewsStw {
  hash: string;
  date: string;
  image: string;
  motds: NewsMotd[];
  messages: NewsMessage[];
}

export interface NewsMotd {
  id: string;
  title: string;
  tabTitle: string;
  body: string;
  image: string;
  tileImage: string;
  sortingPriority: number;
  hidden: boolean;
}

export interface NewsMessage {
  title: string;
  body: string;
  image: string;
  adspace: string;
}
