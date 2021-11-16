import useMediaQuery from '@mui/material/useMediaQuery';
import { ElementType } from 'react';
import { MenuSelect } from '../components/MenuSelect';
import { MenuTab } from '../components/MenuTab';

export function withTabs(Component: ElementType) {
  return () => {
    const mobile = useMediaQuery('(min-width:600px)');

    return (
      <>
        {mobile ? <MenuTab /> : <MenuSelect />}
        <Component />
      </>
    );
  };
}
