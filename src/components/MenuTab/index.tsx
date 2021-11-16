import { Tab, Tabs, MenuItem, Button } from '@mui/material';
import Menu, { MenuProps } from '@mui/material/Menu';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import { appTabsConfig } from '../../configs/appTabs';
import { Routes } from '../../configs/routes';
import { theme } from '../../theme';

export const MenuTab: FC = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
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
  const { pathname } = useLocation();
  const history = useHistory();

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
    <Box>
      {!isTablet ? (
        <Tabs value={checkTabValue()} centered>
          {Object.values(appTabsConfig).map((tab) => {
            return tab.url === Routes.TRAINING ? (
              <Tab
                key={tab.order}
                label={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <div>
                    <Button
                      disableRipple
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
                      disableRipple
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
  );
};
