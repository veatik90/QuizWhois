import useMediaQuery from '@mui/material/useMediaQuery';
import { ElementType } from 'react';
import { MenuSelect } from '../components/MenuSelect';
import { MenuTab } from '../components/MenuTab';
import { theme } from '../theme';

export function withTabs(Component: ElementType) {
  return () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
      <>
        {isMobile ? <MenuSelect /> : <MenuTab />}
        <Component />
      </>
    );
  };
}
