import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
    EditIcon,
    IconButton,
    majorScale,
    Menu,
    MoreIcon,
    Popover,
    TrashIcon,
} from "evergreen-ui";

import { DeleteConfirm } from "..";

type TableActionsProps = {
    onDelete?: () => void;
    editLink?: string;
    deletePermission?: string;
    editPermission?: string;
};

export const TableActions: React.FC<React.PropsWithChildren<
    TableActionsProps
>> = ({ editLink, onDelete }) => {
    const [isShownDeleteConfirm, setIsShown] = useState(false);

    return (
        <>
            <Popover
                minWidth={150}
                content={
                    <Menu>
                        <Menu.Group title="Дії">
                            <Menu.Item
                                is={Link}
                                to={editLink || "create"}
                                height={majorScale(4)}
                                icon={EditIcon}
                            >
                                Редагувати
                            </Menu.Item>
                            <Menu.Item
                                height={majorScale(4)}
                                icon={TrashIcon}
                                intent="danger"
                                onClick={() => setIsShown(true)}
                            >
                                Видалити
                            </Menu.Item>
                        </Menu.Group>
                    </Menu>
                }
            >
                <IconButton appearance="minimal" icon={<MoreIcon />} />
            </Popover>

            <DeleteConfirm
                isShown={isShownDeleteConfirm}
                onClose={() => setIsShown(false)}
                onDelete={onDelete}
            />
        </>
    );
};
