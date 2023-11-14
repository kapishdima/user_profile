import { Button } from "@/components/ui/button";
import { FormSection } from "@/components/ui/layout";
import React from "react";

export const TwoFactorAuth: React.FC = () => {
    return (
        <div className="">
            <FormSection
                title="Двухфакторная авторизация"
                subtitle="Управляйте двухфакторной авторизацией здесь"
            />
            <Button>Включить двухфакторную авторизацию</Button>
        </div>
    );
};
