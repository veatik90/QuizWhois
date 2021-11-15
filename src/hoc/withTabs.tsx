import { Tab, Tabs, MenuItem, Button, FormControl } from '@mui/material';
import Menu, { MenuProps } from '@mui/material/Menu';
import { Box } from '@mui/system';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import { ElementType, useState } from 'react';
import { useHistory } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import { appTabsConfig } from '../configs/appTabs';
import { Routes } from '../configs/routes';

export function withTabs(Component: ElementType) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  ))(() => ({
    '& .MuiPaper-root': {
      minWidth: 215,
    },
  }));
  return () => {
    const { pathname } = useLocation();
    const history = useHistory();
    const matches = useMediaQuery('(min-width:1200px)');
    const mobile = useMediaQuery('(min-width:600px)');

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
      const { url = '' } = event.currentTarget?.dataset;
      history.push(url);
    };

    const checkTabValue = () => {
      return [Routes.RANDOM_QUESTION, Routes.RANDOM_PACK, Routes.READY_PACK].some((path) => path === pathname)
        ? Routes.TRAINING
        : pathname;
    };

    return (
      <>
        {mobile ? (
          <Box>
            {matches ? (
              <Tabs value={checkTabValue()} scrollButtons allowScrollButtonsMobile centered>
                {Object.values(appTabsConfig).map((tab) => {
                  return tab.url === Routes.TRAINING ? (
                    <Tab
                      key={tab.order}
                      label={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <div>
                          <Button
                            disableElevation
                            disableRipple
                            disableFocusRipple
                            color="inherit"
                            aria-expanded={isOpen ? 'true' : undefined}
                            onClick={handleMenuClick}
                            endIcon={<KeyboardArrowDownIcon />}
                            style={{ backgroundColor: 'transparent' }}
                          >
                            Тренировочная игра
                          </Button>
                          <StyledMenu anchorEl={anchorEl} open={isOpen} onClose={handleMenuClose}>
                            <MenuItem
                              data-url={Routes.RANDOM_QUESTION}
                              onClick={handleMenuItemClick}
                              selected={pathname === Routes.RANDOM_QUESTION}
                            >
                              Случайный вопрос
                            </MenuItem>
                            <MenuItem
                              data-url={Routes.RANDOM_PACK}
                              onClick={handleMenuItemClick}
                              selected={pathname === Routes.RANDOM_PACK}
                            >
                              Случайный пакет
                            </MenuItem>
                            <MenuItem
                              data-url={Routes.READY_PACK}
                              onClick={handleMenuItemClick}
                              selected={pathname === Routes.READY_PACK}
                            >
                              Готовый пакет
                            </MenuItem>
                          </StyledMenu>
                        </div>
                      }
                      value={tab.url}
                    />
                  ) : (
                    <Tab key={tab.order} label={tab.label} value={tab.url} component={Link} to={tab.url} />
                  );
                })}
              </Tabs>
            ) : (
              <Tabs value={checkTabValue()} variant="scrollable" scrollButtons allowScrollButtonsMobile centered>
                {Object.values(appTabsConfig).map((tab) => {
                  return tab.url === Routes.TRAINING ? (
                    <Tab
                      key={tab.order}
                      label={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <div>
                          <Button
                            disableElevation
                            disableRipple
                            disableFocusRipple
                            color="inherit"
                            aria-expanded={isOpen ? 'true' : undefined}
                            onClick={handleMenuClick}
                            endIcon={<KeyboardArrowDownIcon />}
                            style={{ backgroundColor: 'transparent' }}
                          >
                            Тренировочная игра
                          </Button>
                          <StyledMenu anchorEl={anchorEl} open={isOpen} onClose={handleMenuClose}>
                            <MenuItem
                              data-url={Routes.RANDOM_QUESTION}
                              onClick={handleMenuItemClick}
                              selected={pathname === Routes.RANDOM_QUESTION}
                            >
                              Случайный вопрос
                            </MenuItem>
                            <MenuItem
                              data-url={Routes.RANDOM_PACK}
                              onClick={handleMenuItemClick}
                              selected={pathname === Routes.RANDOM_PACK}
                            >
                              Случайный пакет
                            </MenuItem>
                            <MenuItem
                              data-url={Routes.READY_PACK}
                              onClick={handleMenuItemClick}
                              selected={pathname === Routes.READY_PACK}
                            >
                              Готовый пакет
                            </MenuItem>
                          </StyledMenu>
                        </div>
                      }
                      value={tab.url}
                    />
                  ) : (
                    <Tab key={tab.order} label={tab.label} value={tab.url} component={Link} to={tab.url} />
                  );
                })}
              </Tabs>
            )}
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 1 }}>
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
          </Box>
        )}
        <Component />
      </>
    );
  };
}
