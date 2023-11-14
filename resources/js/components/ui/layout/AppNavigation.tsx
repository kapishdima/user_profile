import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../accordion";
import { Typography } from "../typography";
import { menu } from "app/config/menu";

import { Button } from "../button";
import { Link } from "react-router-dom";

export const AppNavigation: React.FC = () => {
    return (
        <div className="p-6 lg:pr-0 lg:w-1/4 w-full">
            <Typography.Heading4>Меню</Typography.Heading4>
            <Accordion type="single" collapsible className="w-full">
                {menu.map((item) => (
                    <AccordionItem value={item.title}>
                        <AccordionTrigger>
                            <div className="flex items-center gap-x-2">
                                {item.icon}
                                <Typography.Small classes="no-underline">
                                    {item.title}
                                </Typography.Small>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            {item.children?.map((item) => (
                                <Button
                                    className="w-full justify-start"
                                    variant="ghost"
                                    asChild
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                </Button>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};
