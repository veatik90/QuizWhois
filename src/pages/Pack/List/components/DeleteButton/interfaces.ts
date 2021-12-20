import { PacksMock } from '../../../../../shared/mocks/interfaces';
import { Dispatch, SetStateAction } from 'react';

export interface ButtonProps {
  packId: number;
  packs: PacksMock[];
  setPacks: Dispatch<SetStateAction<PacksMock[]>>;
}
