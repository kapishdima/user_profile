import React from "react";

export const Terms: React.FC = () => {
    return (
        <p className=" text-center text-sm text-muted-foreground">
            Нажимая «Продолжить», вы соглашаетесь с нашими{" "}
            <a
                className="underline underline-offset-4 hover:text-primary"
                href="/terms"
            >
                Условиями обслуживания
            </a>{" "}
            и{" "}
            <a
                className="underline underline-offset-4 hover:text-primary"
                href="/privacy"
            >
                Политикой конфиденциальности
            </a>
            .
        </p>
    );
};
