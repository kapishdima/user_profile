import React, { useState } from "react";
import Countdown from "react-countdown";

import { Typography } from "../typography";

type ResendCodeProps = {
    send: () => void;
    shown?: boolean;
};

export const ResendCode: React.FC<ResendCodeProps> = ({
    send,
    shown = true,
}) => {
    const [completed, setCompleted] = useState<number>(0);

    const onClick = async () => {
        await send();
        setCompleted((times) => times + 1);
    };

    const renderer = ({ seconds, completed }) => {
        if (completed) {
            return (
                <Typography.Muted classes="cursor-pointer" onClick={onClick}>
                    Повторить
                </Typography.Muted>
            );
        } else {
            return <Typography.Muted>{seconds}</Typography.Muted>;
        }
    };

    if (!shown) {
        return null;
    }

    return (
        <Countdown
            key={completed}
            date={Date.now() + 60 * 100}
            renderer={renderer}
        />
    );
};
