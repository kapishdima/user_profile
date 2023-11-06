import React from "react";

import { Button } from "evergreen-ui";
import { Tag } from "./TagInputMany";

type TagAutocompleteItemProps = {
  tag: Tag;
  onClick: (tag: Tag) => void;
};

export const TagAutocompleteItem: React.FC<React.PropsWithChildren<TagAutocompleteItemProps>> = ({
  tag,
  onClick,
}) => {
  return (
    <Button
      appearance="minimal"
      justifyContent="flex-start"
      borderBottom="1px solid #edeff5"
      onClick={() => onClick(tag)}
    >
      {tag.label}
    </Button>
  );
};
