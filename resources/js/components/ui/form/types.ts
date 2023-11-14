import * as z from "zod";

export type OnSubmitValues<T extends z.ZodType<any, any, any>> = z.infer<T>;
