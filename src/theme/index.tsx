import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}
export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#116466',
      contrastText: '#FFCB9A',
      darker: '#2c3531',
    },
    secondary: {
      main: '#FFCB9A',
      contrastText: '#D1E8E2',
    },
    neutral: {
      main: '#D9B08C',
      contrastText: '#D1E8E2',
    },
  },
});
