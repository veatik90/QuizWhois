import styled from 'styled-components';
import Button from '@mui/material/Button';

export const ButtonStyled = styled(Button)({
  textTransform: 'none',
  '&:hover': {
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
