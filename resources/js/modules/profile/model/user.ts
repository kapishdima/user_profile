import { Media } from "@/app/http";

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    documents: Media[];
    avatar: Media;
};
