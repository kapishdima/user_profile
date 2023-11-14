import { HttpProvider } from "./provider";
import { client } from "./client";

import { useFetch } from "./hooks/useFetch";
import { useMutate } from "./hooks/useMutate";
import { ApiRoutes } from "./api-routes";

import { JsonResponse, Media } from "./types";

export type { JsonResponse, Media };
export { ApiRoutes, HttpProvider, client, useMutate, useFetch };
