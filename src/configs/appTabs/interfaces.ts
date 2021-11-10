export enum AppTabs {
  CATALOGUE = 'catalog',
  ARCHIVE = 'archive',
  TRAINING = 'training',
  MOMENTARY = 'momentary',
  PACK_CREATION = 'pack-creation',
  MY_CREATED_GAMES = 'my-created-games',
}

export type Tabs = {
  [key in AppTabs]: {
    label: string;
    order: number;
    url: string;
  };
};
