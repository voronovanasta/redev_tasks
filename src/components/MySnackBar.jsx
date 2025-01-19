/* eslint-disable react/prop-types */

import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

export default function MySnackbar({ closeModal}) {
  const DURATION_HIDE = 2000;
  const [open, setOpen] = useState(true);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    closeModal();
  };


  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={DURATION_HIDE}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >You registered succesfully!</Alert>
      </Snackbar>
    </div>
  );
}