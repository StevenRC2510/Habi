import React, { ReactNode } from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

interface Props {
  open: boolean;
  handleClose: () => {};
  children: ReactNode;
  title?: string;
}

export const Modal = ({ open, handleClose, children, title }: Props) => {
  return (
    <Dialog onClose={handleClose} aria-labelledby='dialog' open={open}>
      <DialogTitle id='dialog-title'>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};
