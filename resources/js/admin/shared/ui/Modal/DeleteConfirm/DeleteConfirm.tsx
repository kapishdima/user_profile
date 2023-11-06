import React, { useState } from "react";

import { Dialog } from "evergreen-ui";

type DeleteConfirmProps = {
  title?: string;
  isShown: boolean;
  onClose: () => void;
  onDelete: () => void;
};

export const DeleteConfirm: React.FC<React.PropsWithChildren<DeleteConfirmProps>> = ({
  isShown,
  onDelete,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);

  const onDeleteConfirmed = async () => {
    try {
      setLoading(true);
      await onDelete();
      setLoading(false);
      onClose();
    } catch (error) {
      setLoading(false);
      onClose();
    }
  };

  return (
    <Dialog
      isShown={isShown}
      title="Ви впевнені, що хочете видалити це?"
      intent="danger"
      onConfirm={onDeleteConfirmed}
      isConfirmLoading={loading}
      minHeightContent={0}
      confirmLabel="Видалити"
    >
      <></>
    </Dialog>
  );
};
