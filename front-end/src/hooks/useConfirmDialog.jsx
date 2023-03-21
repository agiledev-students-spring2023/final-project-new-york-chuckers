import { useState } from 'react';
import { Modal } from '../components/common/Modal';

export const useConfirmDialog = () => {
  const [open, setOpen] = useState(false);

  const openConfirmDialog = () => {
    setOpen(true);
  };

  const closeConfirmDialog = () => {
    setOpen(false);
  };

  const ConfirmDialog = ({ title, subtitle, children }) => (
    <>
      {open && (
        <Modal title={title} subtitle={subtitle} onClose={closeConfirmDialog}>
          {children}
        </Modal>
      )}
    </>
  );

  return {
    openConfirmDialog,
    closeConfirmDialog,
    ConfirmDialog,
  };
};
