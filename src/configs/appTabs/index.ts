import { Routes } from '../routes';
import { AppTabs, Tabs } from './interfaces';

export const appTabsConfig: Tabs = {
  [AppTabs.CATALOGUE]: {
    label: 'Каталог игр',
    order: 0,
    url: Routes.CATALOG,
  },
  [AppTabs.ARCHIVE]: {
    label: 'Архив игр',
    order: 1,
    url: Routes.ARCHIVE,
  },
  [AppTabs.TRAINING]: {
    label: 'Тренировочная игра',
    order: 2,
    url: Routes.TRAINING,
  },
  [AppTabs.MOMENTARY]: {
    label: 'Моментальная игра',
    order: 3,
    url: Routes.INSTANT,
  },
  [AppTabs.PACK_CREATION]: {
    label: 'Создание пакета',
    order: 4,
    url: Routes.PACK_CREATION,
  },
  [AppTabs.MY_CREATED_GAMES]: {
    label: 'Мои созданные игры',
    order: 5,
    url: Routes.MY_CREATED_GAMES,
  },
};
