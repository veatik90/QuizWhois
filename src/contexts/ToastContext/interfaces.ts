import { AlertColor } from '@mui/material';

export interface Toast {
  showMessage: (error: string, type: AlertColor | undefined) => void;
}
