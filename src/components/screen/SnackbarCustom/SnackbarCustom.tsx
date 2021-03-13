import {Snackbar} from '@material-ui/core';
import { useEffect, useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackbarCustom(props) {
  const { info: { show, message, type }, onClose  } = props;
  const [messageInfo, setMessageInfo] = useState({ show: false, message: '', type: 'success' });
  
  useEffect(() => {
    setMessageInfo({ show: show, message: message, type: type });
  }, [show, message, type]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={3000}
      open={messageInfo.show}
      key={messageInfo.message}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={type}>
      {messageInfo.message}
      </Alert>
    </Snackbar>
  );
}
