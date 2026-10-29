import axios from "axios";
import { COMMON_TEXTS } from "@/constants/texts/common";

export class ApiError extends Error {
    status: number | undefined;
    isSessionExpired = false;
    constructor(
        message: string,
        status?: number,
    ) {
        super(message);
        this.name = "ApiError";
        this.status = status;
    }
}

export const normalizeError = (error: unknown): ApiError => {
    if (axios.isAxiosError(error)) {
        return new ApiError(
            error.response?.data?.message ?? error.message,
            error.response?.status,
        );
    }
    return new ApiError(error instanceof Error ? error.message : COMMON_TEXTS.errors.unknownError);
};