import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ElementType } from 'react';
import { MenuSelect } from '../components/MenuSelect';
import { MenuTab } from '../components/MenuTab';

export function withTabs(Component: ElementType) {
  return () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
      <>
        {isMobile ? <MenuSelect /> : <MenuTab />}
        <Component />
      </>
    );
  };
}
