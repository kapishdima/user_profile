import React, { useEffect, useState } from "react";

import {
  FormField,
  Heading,
  majorScale,
  Pane,
  Popover,
  TextInput,
} from "evergreen-ui";
import { useControl, useDebouncedState } from "shared/hooks";

import { Tag } from "./Tag";
import { TagBox } from "./TagBox";
import { Input } from "../Input";
import { useQuery } from "react-query";
import { Loading } from "shared/ui/layout/Loading";
import { TagAutocompleteItem } from "./TagAutocompleteItem";
import { useOnClickOutside } from "shared/hooks/useClickOutside";

const ADD_TAG_KEY_CODE = "Enter";

const isNotEmptyInputValue = (value: string) =>
  Boolean(value && value.length && value !== "");

export type Tag = {
  id?: number;
  value?: string;
  label?: string;
};

type TagInputProps = {
  label?: string;
  description?: string;
  hint?: string;
  placeholder?: string;
  name: string;
  searchFunc: any;
};

export const TagInputSingle: React.FC<React.PropsWithChildren<TagInputProps>> = ({
  label,
  description,
  hint,
  name,
  placeholder,
  searchFunc,
}) => {
  const { getValues, setValue } = useControl();
  const entity = getValues(name);

  const defaultValue: Tag = {
    id: entity?.id || "",
    label: entity?.name || "приклад",
  };

  const [selected, setSelected] = useState<Tag>(defaultValue);
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useDebouncedState<any>("", 300);
  const [isAutocompletePopoverShown, setAutocompletePopoverShown] = useState(
    false
  );
  const [isCreateTagModalShown, setCreateTagModalShown] = useState(false);

  const tagBoxRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(tagBoxRef, () => setAutocompletePopoverShown(false));

  const { data, isFetching } = useQuery(["tags", query], () =>
    isNotEmptyInputValue(query) ? searchFunc(query) : []
  );

  const isTagExisted = (value: string) =>
    data?.find((tag) => tag.value === value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
    setQuery(value);
    setAutocompletePopoverShown(isNotEmptyInputValue(value));
  };

  const handleAddTag = (selectedTag: Tag) => {
    if (isTagExisted(selectedTag.value)) {
      setSelected(selectedTag);
    }
    setAutocompletePopoverShown(false);
    setInputValue("");
  };

  const handleRemoveTag = () => {
    setSelected(null);
  };

  const handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === ADD_TAG_KEY_CODE) {
      event.preventDefault();
      setCreateTagModalShown(!isTagExisted(inputValue));
    }
  };

  useEffect(() => {
    setValue(name, selected?.id);
  }, [selected]);

  return (
    <>
      <FormField label={label} description={description} hint={hint}>
        <TagBox ref={tagBoxRef}>
          <Input key={data?.id} name={name}>
            {() => (
              <>
                {selected && (
                  <Tag key={data?.id} onRemove={() => handleRemoveTag()}>
                    {selected && selected.label}
                  </Tag>
                )}

                <Popover
                  key={data?.id}
                  minWidth="450px"
                  bringFocusInside
                  shouldCloseOnExternalClick
                  isShown={isAutocompletePopoverShown}
                  position="bottom"
                  statelessProps={{
                    style: {
                      maxHeight: "200px",
                      overflowY: "auto",
                    },
                  }}
                  content={
                    isFetching ? (
                      <Pane paddingY={majorScale(1)}>
                        <Loading minHeight="100%" minWidth="100%" />
                      </Pane>
                    ) : (
                      <Pane width="100%" display="flex" flexDirection="column">
                        {!data || !data.length ? (
                          <Pane
                            display="flex"
                            justifyContent="center"
                            paddingY={majorScale(1)}
                          >
                            <Heading size={200}>Співпадінь не знайдено</Heading>
                          </Pane>
                        ) : (
                          data?.map((tag) => (
                            <TagAutocompleteItem
                              key={data.id}
                              onClick={handleAddTag}
                              tag={tag}
                            />
                          ))
                        )}
                      </Pane>
                    )
                  }
                >
                  <Pane flex={1} display="inline-block">
                    <TextInput
                      //@ts-ignore
                      appearance="none"
                      onChange={handleInputChange}
                      value={inputValue}
                      onKeyPress={handleKeyPressed}
                      placeholder={placeholder}
                      width="100%"
                      minWidth="100px"
                      paddingLeft={0}
                    />
                  </Pane>
                </Popover>
              </>
            )}
          </Input>
        </TagBox>
      </FormField>
    </>
  );
};
