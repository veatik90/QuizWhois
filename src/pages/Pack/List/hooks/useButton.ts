import { useHistory } from 'react-router';
import { UseButton } from './interfaces';

export const useButton = (): UseButton => {
  const history = useHistory();

  const handleClickCreateButton = () => {
    history.push('/pack-create');
  };

  return {
    handleClickCreateButton,
  };
};
