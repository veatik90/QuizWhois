export enum AppTabs {
  CATALOGUE = 'catalog',
  ARCHIEVE = 'archive',
  TRAINING = 'training',
  MOMENTARY = 'momentary',
  PACK_CREATION = 'pack-creation',
}

export type Tabs = {
  [key in AppTabs]: {
    label: string;
    order: number;
    url: string;
  };
};
