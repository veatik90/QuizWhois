import { Tab, Tabs, MenuItem, Menu, Button } from '@mui/material';
import { Box } from '@mui/system';
import { ElementType, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { appTabsConfig } from '../configs/appTabs';
import { Routes } from '../configs/routes';

export function withTabs(Component: ElementType) {
  return () => {
    const { pathname } = useLocation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        <Box>
          <Tabs value={pathname} centered>
            {Object.values(appTabsConfig).map((tab) => {
              return tab.url === Routes.TRAINING ? (
                <Tab
                  key={tab.order}
                  label={
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    <div>
                      <Button
                        color="inherit"
                        size="small"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        Тренировочная игра
                      </Button>
                      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={() => console.log('/training/randomQuestion')}>Случайный вопрос</MenuItem>
                        <MenuItem onClick={() => console.log('/training/randomPack')}>Случайный пакет</MenuItem>
                        <MenuItem onClick={() => console.log('/training/readyPack')}>Готовый пакет</MenuItem>
                      </Menu>
                    </div>
                  }
                  value={tab.url}
                />
              ) : (
                <Tab key={tab.order} label={tab.label} value={tab.url} component={Link} to={tab.url} />
              );
            })}
          </Tabs>
        </Box>
        <Component />
      </>
    );
  };
}
