import { AlertColor } from '@mui/material';

export interface ErrorToast {
  showError: (error: string, type: AlertColor | undefined) => void;
}
