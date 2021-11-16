import React, { FC } from 'react';
import { MenuItem, FormControl } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Routes } from '../../configs/routes';
import { BoxForSelectStyled } from './styles';

export const MenuSelect: FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const { url = '' } = event.currentTarget?.dataset;
    history.push(url);
  };
  return (
    <BoxForSelectStyled>
      <FormControl variant="standard" size="small" sx={{ m: 1, width: '70%' }}>
        <InputLabel id="label" color="primary" />
        <Select value={pathname} labelId="label" id="select">
          <MenuItem dense value={Routes.CATALOG} data-url={Routes.CATALOG} onClick={handleMenuItemClick}>
            Каталог игр
          </MenuItem>
          <MenuItem dense value={Routes.ARCHIVE} data-url={Routes.ARCHIVE} onClick={handleMenuItemClick}>
            Архив игр
          </MenuItem>

          <MenuItem
            dense
            value={Routes.INSTANT}
            data-url={Routes.INSTANT}
            onClick={handleMenuItemClick}
            selected={pathname === Routes.INSTANT}
          >
            Моментальная игра
          </MenuItem>
          <MenuItem
            dense
            value={Routes.PACK_CREATION}
            data-url={Routes.PACK_CREATION}
            onClick={handleMenuItemClick}
            selected={pathname === Routes.RANDOM_PACK}
          >
            Создание пакета
          </MenuItem>
          <MenuItem
            dense
            value={Routes.MY_CREATED_GAMES}
            data-url={Routes.MY_CREATED_GAMES}
            onClick={handleMenuItemClick}
            selected={pathname === Routes.MY_CREATED_GAMES}
          >
            Мои созданные игры
          </MenuItem>
          <optgroup style={{ paddingLeft: '9px' }} label="Тренировочная игра" />
          <MenuItem
            dense
            value={Routes.RANDOM_QUESTION}
            data-url={Routes.RANDOM_QUESTION}
            onClick={handleMenuItemClick}
            selected={pathname === Routes.RANDOM_QUESTION}
          >
            Случайный вопрос
          </MenuItem>
          <MenuItem
            dense
            value={Routes.RANDOM_PACK}
            data-url={Routes.RANDOM_PACK}
            onClick={handleMenuItemClick}
            selected={pathname === Routes.RANDOM_PACK}
          >
            Случайный пакет
          </MenuItem>

          <MenuItem
            dense
            value={Routes.READY_PACK}
            data-url={Routes.READY_PACK}
            onClick={handleMenuItemClick}
            selected={pathname === Routes.READY_PACK}
          >
            Готовый пакет
          </MenuItem>
        </Select>
      </FormControl>
    </BoxForSelectStyled>
  );
};
