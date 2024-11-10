import { baseDomain } from "../config/apiConfig";
import { TApiRequestMethod } from "../types/apiRequestMethod.type";
import { IServerErrorMessage } from "../types/serverMessages.interface";

const makeApiRequest = async <T = undefined>(url: string, method: TApiRequestMethod, body?: T) => {
    const response = await fetch(`${baseDomain}${url}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
            "User-Agent": "custom-agent"
        },
        body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
        const data: IServerErrorMessage = await response.json();
        throw new Error(`Status: ${response.status} - ${data.error}`);
    }

    const data = await response.json();
    return data;
};

export { makeApiRequest };