export type GamesApiResponse = {
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
  title: string;
};

export type GameApiResponse = {
  description: string;
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  minimum_system_requirements: MinimumSystemRequirements;
  platform: string;
  publisher: string;
  release_date: string;
  screenshots: Screenshot[];
  short_description: string;
  status: string;
  thumbnail: string;
  title: string;
};

type Screenshot = {
  id: number;
  image: string;
};

type MinimumSystemRequirements = {
  graphics: string;
  memory: string;
  os: string;
  processor: string;
  storage: string;
};

export type CommentType = {
  id: number;
  username: string;
  creationDate: string;
  comment: string;
};

export type CollectionResponse<EntityType> = {
  data: EntityType[];
  links: {
    first: UrlString;
    last: UrlString;
    prev: Nullable<UrlString>;
    next: Nullable<UrlString>;
  };
  meta: {
    filters?: Record<string, { values: { value: any }[] }>;
    completed_notifications_count: number;
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};

declare type Nullable<T> = T | null;
declare type UrlString = string;
