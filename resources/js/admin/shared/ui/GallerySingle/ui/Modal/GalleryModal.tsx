import React, { useState } from "react";

import { Button, majorScale, Pane } from "evergreen-ui";

import { GalleryModalView } from "./GalleryModalView";

type GalleryModalProps = {
  title?: string;
};

export const GalleryModal: React.FC<React.PropsWithChildren<GalleryModalProps>> = ({ title }) => {
  const [isOpened, setIsOpened] = useState(false);

  const onOpen = () => {
    setIsOpened(true);
  };

  const onClose = () => {
    setIsOpened(false);
  };

  return (
    <>
      <Pane display="flex" justifyContent="center">
        <Button
          appearance="primary"
          type="button"
          onClick={onOpen}
          marginRight={majorScale(1)}
        >
          Оберіть із завантажених
        </Button>
      </Pane>
      {isOpened && (
        <GalleryModalView isOpened={isOpened} title={title} onClose={onClose} />
      )}
    </>
  );
};
