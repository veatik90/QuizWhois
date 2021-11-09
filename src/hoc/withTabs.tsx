import { Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import { ElementType } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { appTabsConfig } from '../configs/appTabs';

export function withTabs(Component: ElementType) {
  return () => {
    const { pathname } = useLocation();

    return (
      <>
        <Box>
          <Tabs value={pathname} centered>
            {Object.values(appTabsConfig).map((tab) => (
              <Tab key={tab.order} label={tab.label} value={tab.url} component={Link} to={tab.url} />
            ))}
          </Tabs>
        </Box>
        <Component />
      </>
    );
  };
}
